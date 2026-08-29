import useReveal from '../hooks/useReveal'
import timeline from '../data/experience'
import './Experience.css'

export default function Experience() {
  const ref = useReveal()

  return (
    <section id="experience" className="section experience">
      <div className="section-inner reveal" ref={ref}>
        <span className="eyebrow">Learning &amp; Building</span>
        <h2 className="section-heading">Where my skills stand today</h2>

        <ol className="timeline">
          {timeline.map((entry) => (
            <li key={entry.id} className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <span className="timeline-period">{entry.period}</span>
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
