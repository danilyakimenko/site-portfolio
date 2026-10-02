import { skillsItems } from '@/sections/Skills/items/skillItems'

export const Skills = () => {
  return (
    <section className="flex flex-col justify-center flex-1 gap-y-20 py-20">
      <h1 className="text-5xl text-center">My Skills</h1>
      <div className="grid grid-cols-2 gap-14">
      {skillsItems.map(({ title, items }, index) => (
        <div
          className="flex flex-col gap-y-10"
          key={index}
        >
          <h2 className="text-4xl text-center">
            <span className="text-emerald-500">{title}</span>&nbsp;
            skills
          </h2>
          <ul className="grid gap-y-8">
            {items.map((item, index) => (
              <li
                className="shadow-md shadow-emerald-500/50 rounded-2xl p-4"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
      </div>
    </section>
  )
}