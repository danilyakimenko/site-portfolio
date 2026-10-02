export const Footer = () => {
  const linkItems = [
    {
      title: 'GitHub',
      href: '/',
      imgSrc: 'github',
    },

  ]

  return (
    <footer
      className="container"
    >
      <div>
        <div>
          <span>Do you want to ask</span>
          <span>something interesting?</span>
        </div>
        <p>Contact me. I am in touch mon-fri from 8 am to 8 pm (gmt).</p>
      </div>
      <div>
        <ul>
          <img
            src="/github.svg"
            width={48}
            height={48}
            alt=""
          />
        </ul>
      </div>
    </footer>
  )
}
