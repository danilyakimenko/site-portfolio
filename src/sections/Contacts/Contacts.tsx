import { Field } from '@/components/Field'

export const Contacts = () => {
  return (
    <section className="flex flex-col flex-1 gap-y-20 py-20">
      <h1 className="text-5xl text-center">Contact <span className="text-emerald-500">me</span>
      </h1>
      <form className="grid md:grid-cols-2 gap-10">
        <Field
          title="First Name"
          placeholder="Ivan"
          id="name"
          isRequired
          type="text"
        />
        <Field
          title="Email"
          placeholder="example@email.com"
          id="email"
          isRequired
          type="email"
        />
        <Field
          className="col-[-1/1]"
          title="Message"
          placeholder="Hi! I have a suggestion for you..."
          id="name"
          mode="textarea"
          isRequired
          type="text"
        />
        <button
          className="w-50 px-6 py-4 rounded-2xl text-white dark:text-white/70
           font-semibold border border-white/15 bg-emerald-500 dark:bg-white/10 hover:bg-emerald-600
             hover:text-white
            transition text-center justify-self-start"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}