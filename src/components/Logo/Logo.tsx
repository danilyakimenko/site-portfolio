import Link from 'next/link'
import Image from 'next/image'

export const Logo = () => {
  return (
    <Link
      href="/"
      title="Visit About page"
    >
      <Image
        className="rounded-full"
        src="/logo.jpg"
        alt="Logo"
        width={64}
        height={64}
      />
    </Link>
  )
}