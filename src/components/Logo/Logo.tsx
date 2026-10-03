import Link from 'next/link'
import Image from 'next/image'

export const Logo = () => {
  return (
    <Link href="/" title="Visit About page">
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
