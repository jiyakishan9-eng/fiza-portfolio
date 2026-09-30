import './Skills.css'

const skills = [
  { name: 'HTML5', mark: '5', className: 'html', description: 'Semantic structure' },
  { name: 'CSS3', mark: '#', className: 'css', description: 'Responsive styling' },
  { name: 'JavaScript', mark: 'JS', className: 'javascript', description: 'Interactive experiences' },
  { name: 'React', mark: '⚛', className: 'react', description: 'Component-based UI' },
  { name: 'Git & GitHub', mark: '⑂', className: 'git', description: 'Version control' },
  { name: 'Supabase', mark: '↗', className: 'supabase', description: 'Learning backend tools', learning: true },
]

function Skills() {
  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-title">
      <div className="skills-inner">
        <div className="skills-heading">
          <p className="skills-eyebrow">What I work with</p>
          <h2 id="skills-title">Skills &amp; tools</h2>
        </div>
        <ul className="skills-grid">
          {skills.map(({ name, mark, className, description, learning }) => (
            <li className="skill-card" key={name}>
              <span className={`skill-mark skill-mark-${className}`} aria-hidden="true">
                {mark}
              </span>
              <span className="skill-details">
                <span className="skill-name">{name}</span>
                <span className="skill-description">{description}</span>
              </span>
              {learning && <span className="skill-status">Learning</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills