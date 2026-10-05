import './Skills.css'
import useScrollReveal from '../useScrollReveal.js'

const skills = [
  { name: 'React', className: 'react', level: 85 },
  { name: 'Tailwind CSS', className: 'tailwind', level: 90 },
  { name: 'JavaScript', className: 'javascript', level: 90 },
  { name: 'HTML5', className: 'html', level: 95 },
  { name: 'CSS3', className: 'css', level: 90 },
  { name: 'Git & GitHub', className: 'git', level: 80 },
]

function SkillIcon({ type }) {
  if (type === 'react') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="2.2">
          <ellipse cx="24" cy="24" rx="20" ry="8" />
          <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(60 24 24)" />
          <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(120 24 24)" />
        </g>
        <circle cx="24" cy="24" r="3.4" fill="currentColor" />
      </svg>
    )
  }

  if (type === 'tailwind') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M12 19c2.1-5.6 6.1-8.4 12-8.4 8.9 0 10 6.7 14.4 7.8-2.1 5.6-6.1 8.4-12 8.4-8.9 0-10-6.7-14.4-7.8Zm-6 12c2.1-5.6 6.1-8.4 12-8.4 8.9 0 10 6.7 14.4 7.8-2.1 5.6-6.1 8.4-12 8.4-8.9 0-10-6.7-14.4-7.8Z" fill="currentColor" />
      </svg>
    )
  }

  if (type === 'javascript') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M7 7h34v34H7z" fill="currentColor" />
        <path d="M27 34c1 1.7 2.3 2.6 4.2 2.6 1.7 0 2.7-.8 2.7-2 0-1.4-1.1-1.9-3-2.7l-1-.4c-2.9-1.2-4.8-2.8-4.8-6 0-3 2.3-5.3 5.9-5.3 2.6 0 4.4.9 5.8 3.2l-3.2 2.1c-.7-1.2-1.4-1.7-2.6-1.7-1.1 0-1.8.7-1.8 1.6 0 1.1.7 1.6 2.5 2.3l1 .4c3.4 1.5 5.3 3 5.3 6.3 0 3.6-2.8 5.6-6.6 5.6-3.7 0-6.1-1.8-7.3-4.2L27 34ZM10 33.8l3.7-2.2c.7 1.2 1.3 2.2 2.8 2.2 1.4 0 2.2-.5 2.2-2.7V20.4h4.5v10.8c0 4.7-2.7 6.8-6.6 6.8-3.6 0-5.6-1.9-6.6-4.2Z" fill="#101820" />
      </svg>
    )
  }

  if (type === 'html') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="m8 5 3 34 13 4 13-4 3-34H8Z" fill="currentColor" />
        <path d="M16 13h17l-.5 4H20l.4 4h11.7l-1.3 13-6.8 2-6.8-2-.5-6h4.1l.2 2.8 3 .9 3-.9.4-5.8H16.8L16 13Z" fill="#101820" />
      </svg>
    )
  }

  if (type === 'css') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="m8 5 3 34 13 4 13-4 3-34H8Z" fill="currentColor" />
        <path d="M15 13h19l-.5 4H19.5l.3 3.7h11.9l-1.4 13.2-6.3 2-6.4-2-.5-5.4h4l.2 2.3 2.7.8 2.8-.8.6-6.2H16.5L15 13Z" fill="#101820" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="m24 4 18 10v20L24 44 6 34V14L24 4Z" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M24 13v20M24 22l9-5" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="24" cy="13" r="3" fill="currentColor" />
      <circle cx="24" cy="34" r="3" fill="currentColor" />
      <circle cx="34" cy="16" r="3" fill="currentColor" />
    </svg>
  )
}

function Skills() {
  const revealRef = useScrollReveal()

  return (
    <section ref={revealRef} className="skills-section scroll-reveal" id="skills" aria-labelledby="skills-title">
      <div className="skills-inner">
        <div className="skills-heading">
          <p className="skills-eyebrow">What I work with</p>
          <h2 id="skills-title">Skills &amp; tools</h2>
        </div>
        <ul className="skills-grid">
          {skills.map(({ name, className, level }) => (
            <li className="skill-card" key={name}>
              <span className={`skill-mark skill-mark-${className}`} aria-hidden="true">
                <SkillIcon type={className} />
              </span>
              <span className="skill-details">
                <span className="skill-heading">
                  <span className="skill-name">{name}</span>
                  <span className="skill-level">{level}%</span>
                </span>
                <span
                  className="skill-progress"
                  role="progressbar"
                  aria-label={`${name} proficiency`}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow={level}
                >
                  <span className="skill-progress-value" style={{ width: `${level}%` }} />
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills