function Spinner({ size = 'md', label = 'Loading' }) {
  const classes = ['rp-spinner', size !== 'md' ? `rp-spinner--${size}` : '']
    .filter(Boolean)
    .join(' ')

  return <span className={classes} role="status" aria-label={label} />
}

export default Spinner
