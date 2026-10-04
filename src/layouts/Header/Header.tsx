'use client'

import { linkItems } from './items/linkItems'
import { Logo } from '@/components/Logo'
import { ActiveLink } from '@/components/ActiveLink'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'

export const Header = () => {
  const t = useTranslations('header')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const nextLocale = locale === 'en' ? 'ru' : 'en'

  const switchLanguage = () => {
    router.replace(pathname, {
      locale: nextLocale,
    })
  }

  return (
    <header className="sticky-header wrapper flex flex-col py-4 gap-6 sm:flex-row sm:justify-between sm:items-center">
      <div className="flex justify-between items-center sm:contents">
        <Logo />

        <div className="sm:order-3">
          <div className="flex items-center gap-3">
            <button
              type="button"
              title={t('theme')}
              data-js-switch-theme-button=""
            >
              <img
                className="p-1 bg-emerald-500 rounded-full dark:bg-transparent hover:bg-emerald-600 dark:hover:bg-gray-800"
                src="/sun.svg"
                width={44}
                height={44}
                alt=""
              />
            </button>

            <button
              type="button"
              onClick={switchLanguage}
            >
              <img
                src="/language.svg"
                width={44}
                height={44}
                alt="Switch language"
              />
            </button>
          </div>
        </div>
      </div>

      <nav className="sm:order-2 bg-emerald-500 dark:bg-white/10 p-4 rounded-full">
        <ul className="flex justify-center gap-2">
          {linkItems.map(({ label, title, href }) => (
            <li key={label}>
              <ActiveLink
                href={href}
                title={t(title)}
              >
                {t(label)}
              </ActiveLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}