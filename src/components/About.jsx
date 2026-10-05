import './About.css'
import useScrollReveal from '../useScrollReveal.js'

function About() {
  const revealRef = useScrollReveal()

  return (
    <section ref={revealRef} className="about-section scroll-reveal" id="about" aria-labelledby="about-title">
      <div className="about-layout">
        <div className="about-heading">
          <p className="about-eyebrow">A little about me</p>
          <h2 id="about-title">Building for people, one thoughtful detail at a time.</h2>
        </div>
        <div className="about-copy">
          <div className="about-signal" aria-hidden="true">
            <span className="about-signal-icon">&lt;/&gt;</span>
            <span className="about-signal-rule" />
            <span className="about-signal-label">Frontend development</span>
          </div>
          <p>
            I&apos;m Fiza Kaleem, a web developer who enjoys turning ideas into
            clear, approachable experiences on the web. I focus on interfaces
            that feel intuitive, work beautifully across screen sizes, and make
            everyday tasks a little easier.
          </p>
          <p>
            I&apos;m growing my craft through modern frontend development, with
            care for clean code, accessibility, and the small details that make
            a product feel considered.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About