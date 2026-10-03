import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '../styles/globals.scss'
import { Header } from '@/layouts/Header'
import { Main } from '@/layouts/Main'
import { Footer } from '@/layouts/Footer'

const rubik = localFont({
  src: './fonts/Rubik-Variable.woff2',
})

export const metadata: Metadata = {
  title: 'Danil Yakimenko. Frontend Developer',
  description:
    'Portfolio of Danil Yakimenko, a Frontend Engineer building modern and responsive web interfaces.',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${rubik.className} h-full`}>
      <body className="antialiased flex flex-col bg-white dark:bg-gray-900 m-h-100% text-black dark:text-white">
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  )
}
