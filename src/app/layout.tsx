import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '../styles/globals.css'
import { Header } from '@/layouts/Header'
import { Main } from '@/layouts/Main'
import { Footer } from '@/layouts/Footer'

const rubik = localFont({
  src: [
    {
      path: './fonts/Rubik-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Rubik-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Rubik-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Rubik-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: 'Danil Yakimenko. Frontend Developer',
  description:
    'Portfolio of Danil Yakimenko, a Frontend Engineer building modern and responsive web interfaces.',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={rubik.className}>
      <body className="antialiased">
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  )
}
