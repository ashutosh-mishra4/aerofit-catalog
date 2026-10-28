import { useEffect, useRef, useState } from 'react'

/** Flips to `true` once the element scrolls into view (one-shot). */
export function useInView<T extends Element>(threshold = 0.15) {
  const ref = useRef<T>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, isInView] as const
}
