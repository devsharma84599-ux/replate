function Navbar({ brand = 'RePlate', children }) {
  return (
    <header className="rp-navbar">
      <div className="rp-navbar__inner">
        <span className="rp-navbar__brand">{brand}</span>
        {children ? <div className="rp-navbar__actions">{children}</div> : null}
      </div>
    </header>
  )
}

export default Navbar
