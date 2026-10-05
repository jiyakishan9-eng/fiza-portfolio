import { useEffect, useRef } from 'react'

function useScrollReveal() {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return undefined

    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      element.classList.add('is-visible')
      return undefined
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('is-visible')
        observer.unobserve(element)
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return elementRef
}

export default useScrollReveal