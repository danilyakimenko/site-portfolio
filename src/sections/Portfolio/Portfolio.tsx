import Image from 'next/image'

export const Portfolio = () => {
  const portfolioItems = [
    {
      title: 'AnimeVibe',
      description: 'AnimeVibe is a responsive multi-page anime streaming platform built with Minista, JavaScript, JSX and SCSS.',
      date: 'September 2026',
      imageSrc: '/',
      tools: [
        {
          title: 'React',
          toolIcon: '/'
        }
      ]
    },
    {
      title: 'AnimeVibe',
      description: 'AnimeVibe is a responsive multi-page anime streaming platform built with Minista, JavaScript, JSX and SCSS.',
      date: 'September 2026',
      imageSrc: '/',
      tools: [
        {
          title: 'React',
          toolIcon: '/'
        }
      ]
    },
    {
      title: 'AnimeVibe',
      description: 'AnimeVibe is a responsive multi-page anime streaming platform built with Minista, JavaScript, JSX and SCSS.',
      date: 'September 2026',
      imageSrc: '/',
      tools: [
        {
          title: 'React',
          toolIcon: '/'
        }
      ]
    },
  ]

  return (
    <section
      className="flex-1 flex justify-center items-center gap-2 py-20"
    >
      <h1 className="text-5xl text-center">My <span className="text-emerald-500">Portfolio</span></h1>
      <ul>
        {portfolioItems.map(({title, description, date, imageSrc}) => (
          <li>
            <div>
              <button>
                <Image src={imageSrc} alt="" />
              </button>
              <div>
                <time>{date}</time>
                <h2>{title}</h2>
                <p>{description}</p>
                <ul>

                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}