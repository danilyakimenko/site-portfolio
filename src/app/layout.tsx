import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '../styles/globals.css'
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
    <html lang="en" className={rubik.className}>
      <body className="antialiased">
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  )
}
