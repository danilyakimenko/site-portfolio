'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'

export const LanguageSwitcher = () => {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const languages = ['en', 'ru'] as const

  const switchLanguage = (nextLocale: (typeof languages)[number]) => {
    if (nextLocale === locale) return

    router.replace(pathname, { locale: nextLocale })
  }

  return (
    <div className="relative group">
      <button
        type="button"
        className="h-11 w-11 rounded-full bg-emerald-500 font-bold uppercase text-white hover:bg-emerald-600 dark:bg-transparent dark:hover:bg-gray-800"
        aria-label="Select language"
      >
        {locale}
      </button>

      <div className="invisible pointer-events-none absolute right-0 top-full z-50 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:pointer-events-auto group-hover:opacity-100">
        <div className="min-w-24 overflow-hidden rounded-md border border-emerald-900 bg-emerald-600 p-1 shadow-lg dark:border-gray-700 dark:bg-gray-900">
          {languages.map((language) => (
            <button
              key={language}
              type="button"
              onClick={() => switchLanguage(language)}
              className="flex w-full items-center rounded px-3 py-2 text-sm font-medium uppercase text-white transition-colors hover:bg-emerald-700"
            >
              <span>{language}</span>

              {language === locale && (
                <span className="ml-auto">✓</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}