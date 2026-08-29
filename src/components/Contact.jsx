import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import './Contact.css'

// Replace these placeholders with your real contact details.
const CONTACT = {
  name: 'Yakubu Ishaq',
  location: 'Kaduna State, Nigeria',
  email: 'your-email@example.com',
  phone: '+234 906 421 6350',
  whatsapp: '+234 906 421 6350',
  github: 'https://github.com/yakstech2000',
  linkedin: 'https://www.linkedin.com/in/yakubu-ishaq',
  instagram: '@Yaks_tech',
}

// The form posts to this endpoint, read from an environment variable so no
// real credentials ever live in the source code. Set it in a local `.env`
// file (see `.env.example` and the README "Contact form" section) to a
// Formspree-style endpoint that accepts a JSON POST and returns 200 on
// success. Until it's set, the form validates normally but shows a clear
// "not configured yet" error instead of a fake success message.
const CONTACT_FORM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT

const initialForm = { name: '', email: '', subject: '', message: '' }
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Enter your name.'
  if (!form.email.trim()) {
    errors.email = 'Enter your email.'
  } else if (!EMAIL_PATTERN.test(form.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }
  if (!form.subject.trim()) errors.subject = 'Enter a subject.'
  if (!form.message.trim()) errors.message = 'Enter a message.'
  return errors
}

export default function Contact() {
  const ref = useReveal()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  // idle | submitting | success | error
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const isSubmitting = status === 'submitting'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Belt-and-braces guard against a double-click firing a second submit
    // while the first one is still in flight.
    if (isSubmitting) return

    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    if (!CONTACT_FORM_ENDPOINT) {
      setStatus('error')
      setErrorMessage(
        "This form isn't connected to an inbox yet — set VITE_CONTACT_FORM_ENDPOINT to enable sending. In the meantime, reach out using the email or WhatsApp link on the left."
      )
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }

      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
      setErrorMessage('Something went wrong sending your message. Please try again, or email me directly.')
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="section-inner contact-inner reveal" ref={ref}>
        <div className="contact-info">
          <span className="eyebrow">Contact</span>
          <h2 className="section-heading">Let&apos;s work together</h2>
          <p className="section-sub">
            Have a project in mind, or need help with a system that&apos;s giving you
            trouble? Reach out.
          </p>

          <ul className="contact-list">
            <li>
              <span>Location</span>
              <span>{CONTACT.location}</span>
            </li>
            <li>
              <span>Email</span>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
            <li>
              <span>Phone</span>
              <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a>
            </li>
            <li>
              <span>WhatsApp</span>
              <a href={`https://wa.me/${CONTACT.whatsapp.replace(/[^\d]/g, '')}`}>
                {CONTACT.whatsapp}
              </a>
            </li>
            <li>
              <span>GitHub</span>
              <a href={CONTACT.github} target="_blank" rel="noreferrer">
                {CONTACT.github.replace('https://', '')}
              </a>
            </li>
            <li>
              <span>LinkedIn</span>
              <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">
                {CONTACT.linkedin.replace('https://', '')}
              </a>
            </li>
            <li>
              <span>Instagram</span>
              <a
                href={`https://instagram.com/${CONTACT.instagram.replace('@', '')}`}
                target="_blank"
                rel="noreferrer"
              >
                {CONTACT.instagram}
              </a>
            </li>
          </ul>
        </div>

        <form className="contact-form card" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              disabled={isSubmitting}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <span id="name-error" className="form-error">
                {errors.name}
              </span>
            )}
          </div>

          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              disabled={isSubmitting}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <span id="email-error" className="form-error">
                {errors.email}
              </span>
            )}
          </div>

          <div className="form-row">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              disabled={isSubmitting}
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
            />
            {errors.subject && (
              <span id="subject-error" className="form-error">
                {errors.subject}
              </span>
            )}
          </div>

          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              disabled={isSubmitting}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <span id="message-error" className="form-error">
                {errors.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary contact-submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? 'Sending…' : 'Send Message'}
          </button>

          <div aria-live="polite">
            {status === 'success' && (
              <p className="contact-confirm">
                Message sent — thanks for reaching out, I&apos;ll reply as soon as I can.
              </p>
            )}
            {status === 'error' && errorMessage && (
              <p className="contact-confirm contact-confirm-error">{errorMessage}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
