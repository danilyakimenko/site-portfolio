'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { portfolioItems } from '@/sections/Portfolio/items/portfolioItems'

export const Portfolio = () => {
  const t = useTranslations('Portfolio')

  return (
    <section className="flex flex-col items-center gap-6 py-20">
      <h1 className="text-center text-5xl">
        {t('title')}{' '}
        <span className="text-emerald-500">{t('portfolio')}</span>
      </h1>

      <ul className="grid gap-y-20">
        {portfolioItems.map(
          ({ id, title, href, imageSrc, tools }) => (
            <li
              className="flex flex-col gap-20 justify-between rounded-2xl bg-emerald-500/10 p-8 shadow-lg shadow-emerald-500/30 transition duration-200 hover:shadow-emerald-500/80 md:flex-row"
              key={id}
            >
              <Image
                className="h-80 w-100 shrink-0 rounded-4xl object-cover object-top"
                src={imageSrc}
                width={400}
                height={320}
                alt={title}
              />

              <div className="flex flex-col items-start gap-y-6">
                <time className="rounded-xl border border-emerald-500 px-4 py-2 text-emerald-500 dark:border-emerald-900">
                  {t(`items.${id}.date`)}
                </time>

                <a
                  className="relative text-3xl hover:text-emerald-500 after:absolute after:-right-[25px] after:bottom-5 after:h-4 after:w-4 after:bg-[url('/link.svg')] after:bg-contain after:bg-no-repeat after:content-['']"
                  href={href}
                >
                  <h2>{title}</h2>
                </a>

                <p>{t(`items.${id}.description`)}</p>

                <ul className="flex flex-wrap gap-5">
                  {tools.map(({ title, toolIcon }) => (
                    <li
                      className="flex items-center justify-center rounded-full p-3 shadow-md shadow-emerald-500/50"
                      key={title}
                      title={title}
                    >
                      <img
                        src={toolIcon}
                        width={24}
                        height={24}
                        alt={title}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ),
        )}
      </ul>
    </section>
  )
}