import { linkItems } from './items/linkItems'

import { Logo } from '@/components/Logo'
import { ActiveLink } from '@/components/ActiveLink'

export const Header = () => {
  return (
    <header className="wrapper flex justify-between items-center py-4">
      <Logo />
      <dialog className="flex absolute w-full h-full inset-0 bg-gray-900 lg:hidden" open>
        <nav className="h-full">
          <ul className="inline-flex items-center gap-4 p-5 border border-white/15 rounded-full bg-white/10">
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
        <div className="flex items-center gap-3 text-white">
          <div>Темы</div>
          <div>Язык</div>
        </div>
      </dialog>
      <button
        className="lg:hidden"
        type="button"
      >
        Burger button
      </button>
    </header>
  )
}
