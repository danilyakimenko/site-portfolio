import Image from 'next/image'
import Link from 'next/link'

export const Hero = () => {
  return (
    <section className="wrapper flex flex-col justify-center items-center gap-4 py-20 sm:flex-row">
      <div className="grid gap-y-6 flex-1 text-4xl sm:text-5xl shrink-0">
        <h1 className="tracking-[4px]">
          <span className="text-emerald-500">Hello!</span>&nbsp; My name is{' '}
          <br /> Danil Yakimenko.
        </h1>
        <p className="tracking-[4px]">
          I can do some great things for you.
        </p>
        <Link
          className="text-lg w-40 px-5 py-3 rounded-2xl text-white/70 font-semibold border border-white/15 bg-white/10  hover:text-white hover:border-emerald-600 transition text-center"
          href="/portfolio"
        >
          Let's check!
        </Link>
      </div>
        <Image
          className="rounded-2xl w-full max-w-md "
          src="/animation.webp"
          width={350}
          height={350}
          alt=""
        />
    </section>
  )
}
