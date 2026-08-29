import { useEffect, useRef } from 'react'

/**
 * Adds the `is-visible` class to an element once it scrolls into view,
 * pairing with the `.reveal` utility in index.css for a one-shot fade/rise.
 */
export default function useReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, options)

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}
