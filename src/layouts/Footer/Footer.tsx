import { linkItems } from './items/linkItems'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer
      className="container mb-12"
    >
      <div className="flex justify-between gap-7 p-10 bg-gray-800 rounded-2xl">
        <div className="flex flex-col justify-between gap-y-6">
          <div className="text-5xl">
            <span>Do you want to ask</span><br />
            <span className="text-emerald-500">something interesting?</span>
          </div>
          <p>
            <Link
              className="text-emerald-500"
              href="/contacts"
              title="Visit Contacts page"
            >
              Contact me.
            </Link>&nbsp;
            I am in touch mon-fri from 8 am to 8 pm (GMT +7).
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <ul className="flex gap-3">
            {linkItems.map(({ title, href, imgSrc }) => (
              <li key={title}>
                <a
                  className="w-16 h-16 bg-gray-700 flex justify-center items-center rounded-full p-4"
                  href={href}
                  title={title}
                  target="_blank"
                >
                  <img
                    src={imgSrc}
                    width={44}
                    height={44}
                    alt={title}
                  />
                </a>
              </li>
            ))}
          </ul>
          <p className="self-end">© Danil Yakimenko, 2026</p>
        </div>
      </div>
    </footer>
  )
}
