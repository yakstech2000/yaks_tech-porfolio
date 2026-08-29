import useReveal from '../hooks/useReveal'
import services from '../data/services'
import './Services.css'

export default function Services() {
  const ref = useReveal()

  return (
    <section id="services" className="section services">
      <div className="section-inner">
        <div className="reveal" ref={ref}>
          <span className="eyebrow">Services</span>
          <h2 className="section-heading">What I can build and support</h2>
          <p className="section-sub">
            From writing the software to setting up the machine and network it runs on.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }) {
  const ref = useReveal()
  return (
    <div
      className="card service-card reveal"
      ref={ref}
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
    >
      <h3>{service.title}</h3>
      <p className="service-summary">{service.summary}</p>
      <ul className="service-list">
        {service.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
