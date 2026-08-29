import useReveal from '../hooks/useReveal'
import projects from '../data/projects'
import ProjectCard from './ProjectCard'
import './Projects.css'

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="projects" className="section projects">
      <div className="section-inner">
        <div className="reveal" ref={ref}>
          <span className="eyebrow">Projects</span>
          <h2 className="section-heading">Things I&apos;ve built</h2>
          <p className="section-sub">
            A mix of client work and personal builds — this list grows as new projects
            ship.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
