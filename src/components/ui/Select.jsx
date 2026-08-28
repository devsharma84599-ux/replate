function Select({
  id,
  label,
  error,
  children,
  className = '',
  ...props
}) {
  const fieldClass = ['rp-field', error ? 'rp-field--error' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <label className={fieldClass} htmlFor={id}>
      {label ? <span className="rp-field__label">{label}</span> : null}
      <select id={id} className="rp-field__control rp-select" {...props}>
        {children}
      </select>
      {error ? <span className="rp-field__error">{error}</span> : null}
    </label>
  )
}

export default Select
