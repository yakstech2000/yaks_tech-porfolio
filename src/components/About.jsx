import useReveal from '../hooks/useReveal'
import './About.css'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="section about">
      <div className="section-inner about-inner reveal" ref={ref}>
        <div className="about-heading">
          <span className="eyebrow">About</span>
          <h2 className="section-heading">
            A developer who&apos;s comfortable in the code and behind the router.
          </h2>
        </div>

        <div className="about-body">
          <p>
            I&apos;m a software developer and technology enthusiast focused on building
            practical digital solutions for businesses and individuals. My interests span
            software development, cloud computing, IT infrastructure, networking, mobile
            technology, and cybersecurity.
          </p>
          <p>
            I enjoy taking real-world problems and turning them into useful software
            solutions — whether that&apos;s a full web platform for a business, a mobile
            app, or getting a network and its devices working reliably.
          </p>
        </div>
      </div>
    </section>
  )
}
