'use client'

import { useEffect, useState } from 'react'

export const PageLoader = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 700)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`
        fixed inset-0 z-[9999] flex items-center justify-center
        bg-white dark:bg-gray-900
        transition-opacity duration-500
        ${
        isVisible
          ? 'opacity-100'
          : 'pointer-events-none opacity-0'
      }
      `}
    >
      <div className="flex flex-col items-center gap-3">
        <span
          className="
            text-6xl font-bold tracking-widest
            text-emerald-500
            animate-pulse
          "
        >
          DK
        </span>

        <span
          className="
            text-sm uppercase tracking-[6px]
            text-gray-500 dark:text-gray-400
          "
        >
          Frontend Developer
        </span>
      </div>
    </div>
  )
}