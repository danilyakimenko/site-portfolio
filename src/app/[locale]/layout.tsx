import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { hasLocale } from 'next-intl'
import { routing } from '@/i18n/routing'

import '../../styles/globals.scss'

import { Header } from '@/layouts/Header'
import { Main } from '@/layouts/Main'
import { Footer } from '@/layouts/Footer'
import { ThemeSwitcherInit } from '@/modules/ThemeSwitcherInit'
import { notFound } from 'next/navigation'

const rubik = localFont({
  src: '../fonts/Rubik-Variable.woff2',
})

export const metadata: Metadata = {
  title: 'Danil Yakimenko. Frontend Developer',
  description:
    'Portfolio of Danil Yakimenko, a Frontend Engineer building modern and responsive web interfaces.',
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<'/[locale]'>) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html lang={locale} className={`${rubik.className} h-full`}>
      <body className="antialiased flex flex-col bg-white dark:bg-gray-900 min-h-full text-black dark:text-white">
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