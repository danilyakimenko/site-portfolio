'use client'

import { useEffect } from 'react'
import { ThemeSwitcher } from '@/modules/ThemeSwitcher'

export const ThemeSwitcherInit = () => {
  useEffect(() => {
    const themeSwitcher = new ThemeSwitcher()

    return () => {
      themeSwitcher.destroy()
    }
  }, [])

  return null
}