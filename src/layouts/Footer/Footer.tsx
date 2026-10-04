'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { linkItems } from './items/linkItems'

export const Footer = () => {
  const t = useTranslations('Footer')

  return (
    <footer className="wrapper mb-12 text-white">
      <div className="flex flex-col justify-between gap-7 rounded-2xl bg-gray-500 p-10 dark:bg-gray-800 md:flex-row">
        <div className="flex flex-col justify-between gap-y-6">
          <div className="grid text-3xl sm:text-4xl">
            <span>{t('question')}</span>
            <span className="text-emerald-500">
              {t('interesting')}
            </span>
          </div>

          <p>
            <Link
              className="text-emerald-400 underline underline-offset-3 hover:text-emerald-500"
              href="/contacts"
              title={t('contactsTitle')}
            >
              {t('contact')}
            </Link>
            &nbsp;{t('availability')}
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-6">
          <ul className="flex gap-3">
            {linkItems.map(({ title, href, imgSrc }) => (
              <li key={title}>
                <a
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 p-4 hover:bg-emerald-600 dark:bg-gray-700"
                  href={href}
                  title={title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={imgSrc}
                    width={44}
                    height={44}
                    alt={title}
                  />
                </a>
              </li>
            ))}
          </ul>

          <p className="md:self-end">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  )
}