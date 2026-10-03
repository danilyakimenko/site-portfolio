import Image from 'next/image'
import { portfolioItems } from '@/sections/Portfolio/items/portfolioItems'

export const Portfolio = () => {
  return (
    <section
      className="flex-1 flex flex-col items-center gap-2 py-20"
    >
      <h1 className="text-5xl text-center">My <span className="text-emerald-500">Portfolio</span>
      </h1>
      <ul className="grid gap-y-20">
        {portfolioItems.map(({ title, href, description, date, imageSrc, tools }) => (
          <li
            className="flex justify-between gap-10 shadow-lg shadow-emerald-500/30 p-8 rounded-2xl hover:shadow-emerald-500/80 transition duration-200"
            key={title}
          >
            <Image
              className="w-120 h-80 object-cover object-top rounded-4xl shrink-0"
              src={imageSrc}
              width={400}
              height={320}
              alt={title}
            />
            <div className="flex flex-col items-start gap-y-6">
              <time className="border border-emerald-900 rounded-xl px-4 py-2 text-emerald-500">
                {date}
              </time>
              <a
                className="text-3xl relative hover:text-emerald-500 after:absolute after:content-[''] after:bottom-5 after:-right-[25px] after:bg-[url('/link.svg')] after:bg-contain after:bg-no-repeat after:w-4 after:h-4"
                href={href}
              >
                <h2 >{title}</h2>
              </a>
              <p>{description}</p>
              <ul className="flex gap-5">
                {tools.map(({ title, toolIcon }) => (
                  <li
                    className="flex justify-center items-center p-3 shadow-md shadow-emerald-500/50 rounded-full"
                    title={title}
                    key={title}
                  >
                    <img
                      src={toolIcon}
                      width={32}
                      height={32}
                      alt={title}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}