import useReveal from '../hooks/useReveal'
import skillGroups from '../data/skills'
import './Skills.css'

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" className="section skills">
      <div className="section-inner reveal" ref={ref}>
        <span className="eyebrow">Tech Stack</span>
        <h2 className="section-heading">Tools I reach for</h2>
        <p className="section-sub">Organized by where each one fits, not a logo wall.</p>

        <div className="skills-groups">
          {skillGroups.map((group) => (
            <div key={group.id} className="skills-row">
              <span className="skills-label">{group.label}</span>
              <div className="skills-tags">
                {group.items.map((item) => (
                  <span key={item} className="skills-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
