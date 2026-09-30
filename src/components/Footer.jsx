import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a className="footer-brand" href="#home">Fiza Kaleem</a>
        <p className="footer-copyright">
          &copy; Fiza Kaleem
        </p>
        <a className="footer-top-link" href="#home">
          Back to top <span aria-hidden="true">&#8593;</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer