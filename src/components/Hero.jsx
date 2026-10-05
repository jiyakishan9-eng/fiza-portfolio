import './Hero.css'
import profileImage from '../assets/profile-cutout.png'
import useScrollReveal from '../useScrollReveal.js'

function SocialIcon({ type }) {
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

function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="portrait-glow">
        <div className="portrait-geometry" aria-hidden="true">
          <span className="portrait-shape portrait-diamond portrait-diamond-outer" />
          <span className="portrait-shape portrait-diamond portrait-diamond-inner" />
          <span className="portrait-shape portrait-rectangle portrait-rectangle-back" />
          <span className="portrait-shape portrait-rectangle portrait-rectangle-front" />
          <span className="portrait-trace portrait-trace-top" />
          <span className="portrait-trace portrait-trace-bottom" />
        </div>
        <span className="portrait-tech-mark portrait-tech-mark-code" aria-hidden="true">&lt;/&gt;</span>
        <span className="portrait-tech-mark portrait-tech-mark-braces" aria-hidden="true">{'{ }'}</span>
        <span className="portrait-tech-mark portrait-tech-mark-star" aria-hidden="true">&#10022;</span>
        <div className="portrait-frame">
          <img
            className="portrait-image"
            src={profileImage}
            alt="Portrait of Fiza Kaleem"
          />
        </div>
      </div>
    </div>
  )
}

function Hero() {
  const revealRef = useScrollReveal()

  return (
    <section ref={revealRef} className="hero-section scroll-reveal" id="home" aria-labelledby="hero-title">
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="hero-greeting">Hi, I&apos;m</p>
          <h1 id="hero-title">Fiza Kaleem</h1>
          <p className="hero-role">Web Developer</p>
          <p className="hero-intro">
            I build clean, responsive and user-friendly web experiences.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View My Projects
              <span aria-hidden="true">&#8594;</span>
            </a>
            <a className="button button-secondary" href="#contact">
              Contact Me
            </a>
          </div>
          <div className="hero-socials" aria-label="Social links">
            <span className="social-caption">Find me on</span>
            <a href="https://github.com/your-username" aria-label="GitHub profile placeholder">
              <SocialIcon type="github" />
              <span>GitHub</span>
            </a>
            <a href="mailto:your.email@example.com" aria-label="Email placeholder">
              <SocialIcon type="email" />
              <span>Email</span>
            </a>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  )
}

export default Hero