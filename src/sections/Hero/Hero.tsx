'use client'

import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

export const Hero = () => {
  const t = useTranslations('Hero')

  const greeting = t('greeting')
  const intro = t('intro')
  const description = t('description')

  const [greetingLength, setGreetingLength] = useState(0)
  const [introLength, setIntroLength] = useState(0)
  const [descriptionLength, setDescriptionLength] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    setGreetingLength(0)
    setIntroLength(0)
    setDescriptionLength(0)
    setIsFinished(false)

    let greetingIndex = 0
    let introIndex = 0
    let descriptionIndex = 0

    const greetingTimer = setInterval(() => {
      greetingIndex += 1
      setGreetingLength(greetingIndex)

      if (greetingIndex >= greeting.length) {
        clearInterval(greetingTimer)

        const introTimer = setInterval(() => {
          introIndex += 1
          setIntroLength(introIndex)

          if (introIndex >= intro.length) {
            clearInterval(introTimer)

            const descriptionTimer = setInterval(() => {
              descriptionIndex += 1
              setDescriptionLength(descriptionIndex)

              if (descriptionIndex >= description.length) {
                clearInterval(descriptionTimer)
                setIsFinished(true)
              }
            }, 40)
          }
        }, 40)
      }
    }, 60)

    return () => {
      clearInterval(greetingTimer)
    }
  }, [greeting, intro, description])

  return (
    <section className="wrapper flex flex-col items-center justify-center gap-20 py-20 sm:flex-row">
      <div className="grid flex-1 gap-y-6 text-4xl sm:text-5xl">
        <h1 className="tracking-[4px]">
          <span className="text-emerald-500">
            {greeting.slice(0, greetingLength)}
          </span>

          {greetingLength >= greeting.length && (
            <>
              &nbsp;
              {intro.slice(0, introLength)}
            </>
          )}
        </h1>

        <p className="tracking-[4px]">
          {description.slice(0, descriptionLength)}
        </p>

        <Link
          className={`w-40 rounded-2xl border-none bg-emerald-500 px-5 py-3 text-center
            text-lg font-semibold text-white transition-all duration-700
            hover:bg-emerald-600
            dark:border dark:border-white/15 dark:bg-white/10 dark:text-white/70
            dark:hover:border-emerald-600 dark:hover:text-white
            ${
            isFinished
              ? 'translate-y-0 opacity-100'
              : 'pointer-events-none translate-y-4 opacity-0'
          }`}
          href="/portfolio"
          title={t('portfolioTitle')}
        >
          {t('portfolio')}
        </Link>
      </div>

      <Image
        className="w-full max-w-md rounded-2xl"
        src="/logo.jpg"
        width={300}
        height={300}
        alt=""
      />

    </section>
  )
}