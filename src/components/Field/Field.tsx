import clsx from 'clsx'


export const Field = (props) => {
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
        className={clsx("text-xl w-80 h-10 p-7 rounded-xl border hover:border-emerald-500 w-full", {
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