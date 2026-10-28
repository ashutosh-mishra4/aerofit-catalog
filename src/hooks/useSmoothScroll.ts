import Lenis from 'lenis'
import { useEffect } from 'react'
import { prefersReducedMotion } from '../lib/scroll'

/** Eases wheel scrolling with Lenis for as long as the calling page is mounted. */
export function useSmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return

    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
    let frame = requestAnimationFrame(function tick(time) {
      lenis.raf(time)
      frame = requestAnimationFrame(tick)
    })

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])
}
