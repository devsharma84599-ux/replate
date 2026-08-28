function Input({
  id,
  label,
  error,
  className = '',
  ...props
}) {
  const fieldClass = ['rp-field', error ? 'rp-field--error' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <label className={fieldClass} htmlFor={id}>
      {label ? <span className="rp-field__label">{label}</span> : null}
      <input id={id} className="rp-field__control" {...props} />
      {error ? <span className="rp-field__error">{error}</span> : null}
    </label>
  )
}

export default Input
