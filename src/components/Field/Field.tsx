import clsx from 'clsx'

type FieldProps = {
  className?: string
  title: string
  mode?: string
  placeholder: string
  isRequired: boolean
  id: string
  type: string
}

export const Field = (props: FieldProps) => {
  const {
    className,
    title,
    /**
     * '' (default input) | 'textarea'
     */
    mode,
    placeholder,
    isRequired,
    id,
    /**
     * 'text' (default) | 'email' | 'number'
     */
    type,
  } = props

  const Component = mode ? 'textarea' : 'input'
  const isTextArea = mode === 'textarea'

  return (
    <div className={clsx("grid gap-y-2", className)}>
      <label
        className="text-2xl"
        htmlFor={id}
      >
        {title}
        {isRequired && (
          <span className="text-red-600">*</span>
        )}
      </label>
      <Component
        className={clsx("placeholder:text-black/50 dark:placeholder:text-white/50 text-xl w-80 h-10 p-7" +
          " rounded-xl bg-emerald-600/10 hover:bg-emerald-600/20 border border-emerald-700 hover:border-emerald-500 w-full", {
          "h-70": isTextArea
        })}
        id={id}
        placeholder={placeholder}
        required={isRequired}
        type={type}
      >
      </Component>
    </div>
  )
}