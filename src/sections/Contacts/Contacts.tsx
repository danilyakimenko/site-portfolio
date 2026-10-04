'use client'

import { useTranslations } from 'next-intl'
import { Field } from '@/components/Field'

export const Contacts = () => {
  const t = useTranslations('Contacts')

  return (
    <section className="flex flex-1 flex-col gap-y-20 py-20">
      <h1 className="text-center text-5xl">
        {t('title')}{' '}
        <span className="text-emerald-500">{t('me')}</span>
      </h1>

      <form className="grid gap-10 md:grid-cols-2">
        <Field
          title={t('firstName')}
          placeholder={t('firstNamePlaceholder')}
          id="name"
          isRequired
          type="text"
        />

        <Field
          title={t('email')}
          placeholder={t('emailPlaceholder')}
          id="email"
          isRequired
          type="email"
        />

        <Field
          className="col-[-1/1]"
          title={t('message')}
          placeholder={t('messagePlaceholder')}
          id="message"
          mode="textarea"
          isRequired
          type="text"
        />

        <button
          className="w-50 justify-self-start rounded-2xl border border-white/15 bg-emerald-500 px-6 py-4 text-center
            font-semibold text-white transition hover:bg-emerald-600 hover:text-white
            dark:bg-white/10 dark:text-white/70"
          type="submit"
        >
          {t('send')}
        </button>
      </form>
    </section>
  )
}