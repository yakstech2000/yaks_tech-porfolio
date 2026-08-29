import useReveal from '../hooks/useReveal'
import './ProjectCard.css'

export default function ProjectCard({ project, index = 0 }) {
  const ref = useReveal()
  const { featured, name, description, stack, features, image, demoUrl, codeUrl } = project

  return (
    <article
      className={`project-card card reveal ${featured ? 'is-featured' : ''}`}
      ref={ref}
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
    >
      <div className="project-media">
        <img src={image} alt={`${name} preview`} loading="lazy" />
        {featured && <span className="project-featured-tag">Featured Project</span>}
      </div>

      <div className="project-body">
        <h3>{name}</h3>
        <p className="project-description">{description}</p>

        <div className="project-stack">
          {stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        {features?.length > 0 && (
          <ul className="project-features">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        )}

        <div className="project-actions">
          {demoUrl && (
            <a href={demoUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
              Live Demo
            </a>
          )}
          {codeUrl && (
            <a href={codeUrl} className="btn btn-ghost" target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {!demoUrl && !codeUrl && <span className="project-actions-note">Links coming soon</span>}
        </div>
      </div>
    </article>
  )
}
