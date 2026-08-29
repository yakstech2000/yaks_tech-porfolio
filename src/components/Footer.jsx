import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="section-inner footer-inner">
        <span className="footer-brand">
          Yaks<span>_tech</span>
        </span>
        <p>&copy; {year} Yakubu Ishaq. Turning Ideas Into Real Digital Solutions.</p>
        <a href="#home" className="footer-top">
          Back to top
        </a>
      </div>
    </footer>
  )
}
