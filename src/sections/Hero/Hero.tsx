'use client'

import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

export const Hero = () => {
  const t = useTranslations('Hero')

  return (
    <section className="wrapper flex flex-col items-center justify-center gap-4 py-20 sm:flex-row">
      <div className="grid shrink-0 flex-1 gap-y-6 text-4xl sm:text-5xl">
        <h1 className="tracking-[4px]">
          <span className="text-emerald-500">{t('greeting')}</span>&nbsp;
          {t('intro')}
        </h1>

        <p className="tracking-[4px]">
          {t('description')}
        </p>

        <Link
          className="w-40 rounded-2xl border-none bg-emerald-500 px-5 py-3 text-center
            text-lg font-semibold text-white transition hover:bg-emerald-600
            dark:border dark:border-white/15 dark:bg-white/10 dark:text-white/70
            dark:hover:border-emerald-600 dark:hover:text-white"
          href="/portfolio"
          title={t('portfolioTitle')}
        >
          {t('portfolio')}
        </Link>
      </div>

      <Image
        className="w-full max-w-md rounded-2xl"
        src="/animation.webp"
        width={350}
        height={350}
        alt=""
      />
    </section>
  )
}