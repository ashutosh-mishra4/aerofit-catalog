import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { scrollToSection } from '../../lib/catalog'

/** Scrolls to the hash target after navigation, or to the top on page change. */
export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 })
      return
    }
    const frame = requestAnimationFrame(() => scrollToSection(decodeURIComponent(hash.slice(1))))
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}
