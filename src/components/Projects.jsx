import './Projects.css'
import useScrollReveal from '../useScrollReveal.js'

const projects = [
  {
    name: 'E-Commerce Web App',
    category: 'Online storefront',
    description: 'A responsive storefront with clear product details, intuitive browsing, and a streamlined shopping flow.',
    technologies: ['React.js', 'Tailwind CSS', 'Responsive UI'],
    variant: 'ecommerce',
    repository: 'https://github.com/your-username/ecommerce-web-app',
    demo: 'https://your-username.github.io/ecommerce-web-app/',
  },
  {
    name: 'Business Landing Page',
    category: 'Business website',
    description: 'A polished, mobile-first landing page that presents services clearly and guides visitors toward contact.',
    technologies: ['React.js', 'Tailwind CSS', 'Responsive UI'],
    variant: 'landing',
    repository: 'https://github.com/your-username/business-landing-page',
    demo: 'https://your-username.github.io/business-landing-page/',
  },
  {
    name: 'Interactive Dashboard',
    category: 'Web application',
    description: 'An interactive, responsive dashboard for exploring key metrics through clear visual summaries.',
    technologies: ['React.js', 'JavaScript', 'Tailwind CSS'],
    variant: 'dashboard',
    repository: 'https://github.com/your-username/interactive-dashboard',
    demo: 'https://your-username.github.io/interactive-dashboard/',
  },
]

function ProjectThumbnail({ variant }) {
  return (
    <div className={`project-thumbnail project-thumbnail-${variant}`} aria-hidden="true">
      <div className="preview-window">
        <div className="preview-toolbar">
          <span /><span /><span />
          <i />
        </div>
        {variant === 'dashboard' && (
          <div className="preview-finance">
            <div className="preview-title-lines"><i /><i /></div>
            <div className="preview-stat-row">
              <span><i /><b /></span><span><i /><b /></span><span><i /><b /></span>
            </div>
            <div className="preview-chart">
              {[35, 52, 43, 70, 58, 84, 67, 96, 76, 100, 86, 92].map((height, index) => (
                <i key={index} style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>
        )}
        {variant === 'ecommerce' && (
          <div className="preview-studio">
            <aside><i /><i /><i /><i /></aside>
            <div className="preview-store">
              <div className="preview-store-heading"><i /><i /></div>
              <div className="preview-product-grid">
                <span><i /></span><span><i /></span><span><i /></span>
              </div>
            </div>
          </div>
        )}
        {variant === 'landing' && (
          <div className="preview-landing">
            <div className="preview-landing-copy">
              <i /><i /><i /><span />
            </div>
            <div className="preview-landing-art">
              <i /><span /><b />
            </div>
          </div>
        )}
      </div>
      <span className="project-thumbnail-glow" />
    </div>
  )
}

function Projects() {
  const revealRef = useScrollReveal()

  return (
    <section ref={revealRef} className="projects-section scroll-reveal" id="projects" aria-labelledby="projects-title">
      <div className="projects-inner">
        <div className="projects-heading">
          <p className="projects-eyebrow">Selected work</p>
          <h2 id="projects-title">Featured Works</h2>
          <p className="projects-intro">
            A showcase of clean, responsive, and user-focused web applications built with modern technologies.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.name}>
              <ProjectThumbnail variant={project.variant} />
              <div className="project-card-copy">
                <div className="project-card-heading">
                  <p className="project-status">{project.category}</p>
                  <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-tags" aria-label={`${project.name} technologies`}>
                  {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
                <div className="project-actions">
                  <a className="project-action project-action-primary" href={project.demo} target="_blank" rel="noreferrer">
                    View Demo <span aria-hidden="true">&#8599;</span>
                  </a>
                  <a className="project-action project-action-secondary" href={project.repository} target="_blank" rel="noreferrer">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-4.3 1.3-4.3-2.2-6-2.7m12 5.4v-3.3a2.9 2.9 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6A4.7 4.7 0 0 0 18.4 7a4.4 4.4 0 0 0-.1-3.2S17.3 3.5 15 5.1a13 13 0 0 0-6 0C6.7 3.5 5.7 3.8 5.7 3.8A4.4 4.4 0 0 0 5.6 7a4.7 4.7 0 0 0-1.3 3.2c0 4.7 2.8 5.7 5.5 6A2.9 2.9 0 0 0 9 18.5v3.2" /></svg>
                    Source Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects