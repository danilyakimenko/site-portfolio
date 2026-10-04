import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export const Logo = () => {
  const t = useTranslations('header')
  return (
    <Link href="/" title={t('visitHome')}>
      <Image
        className="rounded-2xl order-1 sm:w-16 sm:h-16"
        src="/logo.jpg"
        alt="Logo"
        width={44}
        height={44}
      />
    </Link>
  )
}
