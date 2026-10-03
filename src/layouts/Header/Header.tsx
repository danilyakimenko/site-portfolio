import { linkItems } from './items/linkItems'

import { Logo } from '@/components/Logo'
import { ActiveLink } from '@/components/ActiveLink'

export const Header = () => {
  return (
    <header className="wrapper flex flex-col py-4 gap-6 sm:flex-row sm:justify-between sm:items-center">
      <div className="flex justify-between items-center sm:contents">
        <Logo />
        <div className="sm:order-3">
          <div className="flex items-center gap-3">
            <button>
              <img
                className=""
                src="/sun.svg"
                width={44}
                height={44}
                alt="Switch to a light theme"
              />
            </button>
            <button>
              <img
                className=""
                src="/language.svg"
                width={44}
                height={44}
                alt="Switch language"
              />
            </button>
          </div>
        </div>
      </div>
      <nav className="sm:order-2">
        <ul className="flex justify-center gap-2">
          {linkItems.map(({ label, href }) => (
            <li key={label}>
              <ActiveLink
                href={href}
                title={`Visit ${label} page`}
              >
                {label}
              </ActiveLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
