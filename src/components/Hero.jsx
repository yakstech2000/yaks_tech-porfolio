import './Hero.css'

const nodes = [
  { id: 'web', label: 'Web', cx: 230, cy: 70 },
  { id: 'cloud', label: 'Cloud', cx: 382, cy: 181 },
  { id: 'support', label: 'Support', cx: 324, cy: 359 },
  { id: 'network', label: 'Network', cx: 136, cy: 359 },
  { id: 'mobile', label: 'Mobile', cx: 78, cy: 181 },
]

const center = { cx: 230, cy: 230 }

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="section-inner hero-inner">
        <div className="hero-copy">
          <div className="hero-status">
            <span className="hero-status-dot" />
            Available for freelance work · Kaduna, Nigeria
          </div>

          <h1 className="hero-title">
            Hi, I&apos;m <span>Yakubu Ishaq</span>
          </h1>
          <p className="hero-role">Software Developer &amp; Cloud/IT Solutions Specialist</p>
          <p className="hero-tagline">&ldquo;Turning Ideas Into Real Digital Solutions.&rdquo;</p>

          <p className="hero-support">
            I build modern web applications, business software, mobile solutions and
            practical IT systems that solve real-world problems.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-ghost">
              Let&apos;s Work Together
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-diagram-wrap">
            <svg viewBox="0 0 460 460" className="hero-diagram" aria-hidden="true">
              {nodes.map((node) => (
                <line
                  key={`spoke-${node.id}`}
                  x1={center.cx}
                  y1={center.cy}
                  x2={node.cx}
                  y2={node.cy}
                  className="hero-diagram-spoke"
                />
              ))}
              {nodes.map((node, i) => {
                const next = nodes[(i + 1) % nodes.length]
                return (
                  <line
                    key={`ring-${node.id}`}
                    x1={node.cx}
                    y1={node.cy}
                    x2={next.cx}
                    y2={next.cy}
                    className="hero-diagram-ring"
                  />
                )
              })}

              {nodes.map((node, i) => (
                <g
                  key={node.id}
                  className="hero-diagram-node"
                  style={{ animationDelay: `${i * 0.35}s` }}
                >
                  <circle cx={node.cx} cy={node.cy} r="7" />
                  <text
                    x={node.cx}
                    y={node.cy + (node.cy < center.cy ? -18 : 26)}
                    textAnchor="middle"
                  >
                    {node.label}
                  </text>
                </g>
              ))}
            </svg>

            <div className="hero-diagram-photo">
              <img src="/images/yakubu-portrait.jpg" alt="Yakubu Ishaq" />
            </div>
            <img
              src="/images/yaks-tech-badge.png"
              alt="Yaks_tech logo"
              className="hero-diagram-badge"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
