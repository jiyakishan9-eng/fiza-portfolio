import './Projects.css'

function Projects() {
  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="projects-inner">
        <div className="projects-heading">
          <p className="projects-eyebrow">Selected work</p>
          <h2 id="projects-title">Projects</h2>
          <p className="projects-intro">
            A collection of web projects is being prepared for this space.
          </p>
        </div>
        <article className="project-card" aria-label="Portfolio projects coming soon">
          <span className="project-index" aria-hidden="true">01</span>
          <div className="project-card-copy">
            <p className="project-status">Coming soon</p>
            <h3>New work in progress</h3>
            <p>
              Check back soon for project details, technologies, and live demos.
            </p>
          </div>
          <span className="project-mark" aria-hidden="true">&#8599;</span>
        </article>
      </div>
    </section>
  )
}

export default Projects