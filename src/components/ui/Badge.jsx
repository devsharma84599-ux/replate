const BADGE_LABELS = {
  available: 'Available',
  claimed: 'Claimed',
  scheduled: 'Scheduled',
  'picked-up': 'Picked up',
  completed: 'Completed',
  expired: 'Expired',
  pending: 'Pending',
}

function Badge({ variant = 'pending', children, className = '' }) {
  const classes = ['rp-badge', `rp-badge--${variant}`, className]
    .filter(Boolean)
    .join(' ')

  return <span className={classes}>{children ?? BADGE_LABELS[variant]}</span>
}

export default Badge
