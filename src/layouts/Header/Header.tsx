import { linkItems } from './items/linkItems'

import { Logo } from '@/components/Logo'
import { ActiveLink } from '@/components/ActiveLink'

export const Header = () => {
  return (
    <header
      className="container flex justify-between items-center py-4"
    >
      <Logo />
      <dialog
        className="fixed inset-0 flex-col justify-start w-full h-full lg:contents open:flex bg-gray-900"
      >
        <nav>
          <ul className="inline-flex items-center gap-4 p-4 border border-white/15 rounded-full bg-white/10 backdrop-blur">
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
      </dialog>
      <div className="flex items-center gap-3 text-white">
        <div>Темы</div>
        <div>Язык</div>
        <button
          className="lg:hidden"
          type="button"
        >
          Burger button
        </button>
      </div>
    </header>
  )
}