import { useEffect } from 'react'

function Modal({ open, onClose, title, children }) {
  useEffect(() => {
    if (!open) {
      return undefined
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose?.()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  if (!open) {
    return null
  }

  return (
    <div
      className="rp-modal-overlay"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="rp-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'rp-modal-title' : undefined}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="rp-modal__header">
          {title ? (
            <h2 id="rp-modal-title" className="rp-heading-section">
              {title}
            </h2>
          ) : (
            <span />
          )}
          <button
            type="button"
            className="rp-modal__close"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal
