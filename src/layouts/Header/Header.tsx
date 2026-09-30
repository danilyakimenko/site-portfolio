import { linkItems } from './items/linkItems'
import Link from 'next/link'
import { Logo } from '@/components/Logo'

export const Header = () => {

  return (
    <header className="container">
      <Logo />
      <nav>
        <ul className="bg-emerald-800 rounded-2xl">
          {linkItems.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                title={`Visit ${label} page`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}