function Button({
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  children,
  className = '',
  ...props
}) {
  const classes = [
    'rp-button',
    `rp-button--${variant}`,
    size !== 'md' ? `rp-button--${size}` : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button type={type} className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

export default Button
