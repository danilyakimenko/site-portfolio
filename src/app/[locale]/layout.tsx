import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { NextIntlClientProvider } from 'next-intl'
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from 'next-intl/server'
import { hasLocale } from 'next-intl'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'

import '../../styles/globals.scss'

import { Header } from '@/layouts/Header'
import { Main } from '@/layouts/Main'
import { Footer } from '@/layouts/Footer'
import { ThemeSwitcherInit } from '@/modules/ThemeSwitcherInit'
import { PageLoader } from '@/components/PageLoader'

const rubik = localFont({
  src: '../fonts/Rubik-Variable.woff2',
})

type LocaleLayoutProps = LayoutProps<'/[locale]'>

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  const t = await getTranslations({
    locale,
    namespace: 'meta',
  })

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html lang={locale} className={`${rubik.className} h-full dark`}>
      <body className="antialiased flex flex-col bg-white dark:bg-gray-900 min-h-full text-black dark:text-white">
        <PageLoader />

        <NextIntlClientProvider messages={messages}>
          <ThemeSwitcherInit />
          <Header />
          <Main>{children}</Main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}