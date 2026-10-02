import Image from 'next/image'
import Link from 'next/link'

export const Hero = () => {
  return (
    <section className="flex justify-ce items-center gap-2">
      <div className="grid gap-y-4 flex-1">
        <h1 className="text-6xl">Hello! My name is <br/> Danil Yakimenko.</h1>
        <p className="text-4xl">I can do some great
          things for you.</p>
        <Link
          className="w-40 px-5 py-3 rounded-2xl text-white/70 font-semibold border border-white/15 bg-white/10  hover:text-white hover:border-white transition text-center"
          href="/portfolio"
        >
          Let's check!
        </Link>
      </div>
      <div>
        <Image
          className="rounded-2xl"
          src="/animation.webp"
          width={500}
          height={500}
          alt=""
        />
      </div>
    </section>
  )
}
