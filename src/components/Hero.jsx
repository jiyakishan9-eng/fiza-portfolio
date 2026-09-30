import './Hero.css'

function SocialIcon({ type }) {
  if (type === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 19c-4.3 1.3-4.3-2.2-6-2.7m12 5.4v-3.3a2.9 2.9 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6A4.7 4.7 0 0 0 18.4 7a4.4 4.4 0 0 0-.1-3.2S17.3 3.5 15 5.1a13 13 0 0 0-6 0C6.7 3.5 5.7 3.8 5.7 3.8A4.4 4.4 0 0 0 5.6 7a4.7 4.7 0 0 0-1.3 3.2c0 4.7 2.8 5.7 5.5 6A2.9 2.9 0 0 0 9 18.5v3.2" />
      </svg>
    )
  }

  if (type === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 9v10M5 5.5v.1M10 19v-6a4 4 0 0 1 8 0v6m-8-6V9" />
        <circle cx="5" cy="5" r="1" />
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
    <div className="hero-visual" aria-hidden="true">
      <div className="visual-orbit" />
      <div className="code-window">
        <div className="window-bar">
          <div className="window-dots">
            <span />
            <span />
            <span />
          </div>
          <span className="window-file">fiza.js</span>
          <span className="window-menu">•••</span>
        </div>
        <div className="editor">
          <div className="line-number">01</div>
          <div className="code-line"><span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}</div>
          <div className="line-number">02</div>
          <div className="code-line code-indent"><span className="code-blue">name</span>: <span className="code-green">'Fiza Kaleem'</span>,</div>
          <div className="line-number">03</div>
          <div className="code-line code-indent"><span className="code-blue">focus</span>: <span className="code-green">'Web development'</span>,</div>
          <div className="line-number">04</div>
          <div className="code-line code-indent"><span className="code-blue">approach</span>: <span className="code-green">'Thoughtful &amp; responsive'</span>,</div>
          <div className="line-number">05</div>
          <div className="code-line">{'}'}</div>
          <div className="line-number">06</div>
          <div className="code-line code-comment">// Making the web feel a little better.</div>
        </div>
        <div className="window-status">
          <span><i /> Ready to build</span>
          <span>JavaScript</span>
        </div>
      </div>
      <div className="visual-label">
        <span className="label-check">&#10003;</span>
        <span>Thoughtful by design</span>
      </div>
      <div className="visual-sparkle">&#10022;</div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="hero-greeting">Hello, I&apos;m</p>
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
            <a href="https://www.linkedin.com/in/your-username" aria-label="LinkedIn profile placeholder">
              <SocialIcon type="linkedin" />
              <span>LinkedIn</span>
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