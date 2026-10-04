'use client'

import { useTranslations } from 'next-intl'
import { skillsItems } from '@/sections/Skills/items/skillItems'

export const Skills = () => {
  const t = useTranslations('Skills')

  return (
    <section className="flex flex-col justify-center gap-y-10 py-20">
      <h2 className="text-center text-4xl">{t('title')}</h2>

      <div className="grid gap-14 md:grid-cols-2">
        {skillsItems.map(({ title, items }) => (
          <div className="flex flex-col gap-y-10" key={title}>
            <h3 className="text-center text-3xl">
              <span className="text-emerald-500">{t(title)}</span>&nbsp;
              {t('skills')}
            </h3>

            <ul className="grid gap-y-8">
              {items.map((item) => (
                <li
                  className="rounded-2xl bg-emerald-500/10 p-4 shadow-lg shadow-emerald-500/50 dark:shadow-md"
                  key={item}
                >
                  {t(`items.${item}`)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}