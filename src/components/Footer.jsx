import './Footer.css'

function FooterIcon({ type }) {
  if (type === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 19c-4.3 1.3-4.3-2.2-6-2.7m12 5.4v-3.3a2.9 2.9 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6A4.7 4.7 0 0 0 18.4 7a4.4 4.4 0 0 0-.1-3.2S17.3 3.5 15 5.1a13 13 0 0 0-6 0C6.7 3.5 5.7 3.8 5.7 3.8A4.4 4.4 0 0 0 5.6 7a4.7 4.7 0 0 0-1.3 3.2c0 4.7 2.8 5.7 5.5 6A2.9 2.9 0 0 0 9 18.5v3.2" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="14" rx="2" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-copyright">
          &copy; 2026 Fiza Kaleem. All rights reserved.
        </p>
        <nav className="footer-socials" aria-label="Footer links">
          <a href="https://github.com/your-username" aria-label="GitHub profile">
            <FooterIcon type="github" />
          </a>
          <a href="mailto:your.email@example.com" aria-label="Send email">
            <FooterIcon type="email" />
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer