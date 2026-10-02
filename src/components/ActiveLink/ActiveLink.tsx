'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

type ActiveLinkProps = {
  href: string
  title: string
  children: React.ReactNode
}

export const ActiveLink = ({ href, title, children }: ActiveLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      className={clsx('nav-link', {
        'is-active': isActive,
      })}
      href={href}
      title={title}
    >
      {children}
    </Link>
  )
}
