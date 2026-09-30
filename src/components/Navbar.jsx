import { useState } from 'react'
import './Navbar.css'

const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          Fiza Kaleem
        </a>

        <button
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`primary-navigation${menuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {navigationLinks.map(({ label, href }) => (
            <a key={label} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>

        <a className="button button-cv" href="/Fiza-Kaleem-CV.pdf" download>
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M10 2.75v9m0 0 3.25-3.25M10 11.75 6.75 8.5M4 13.25v2.5c0 .69.56 1.25 1.25 1.25h9.5c.69 0 1.25-.56 1.25-1.25v-2.5" />
          </svg>
          <span>Download CV</span>
        </a>
      </div>
    </header>
  )
}

export default Navbar