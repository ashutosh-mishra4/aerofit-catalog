import { useEffect, useRef } from 'react'

/**
 * Runs `onFrame` once per animation frame while the page scrolls or resizes, and once on mount.
 * Scenes write styles straight to DOM refs inside `onFrame`, so scrolling never re-renders React.
 */
export function useScrollFrame(onFrame: () => void) {
  const frameRef = useRef(onFrame)

  useEffect(() => {
    frameRef.current = onFrame
  })

  useEffect(() => {
    let pending = 0
    const schedule = () => {
      if (pending) return
      pending = requestAnimationFrame(() => {
        pending = 0
        frameRef.current()
      })
    }

    frameRef.current()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    window.addEventListener('load', schedule)
    return () => {
      cancelAnimationFrame(pending)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      window.removeEventListener('load', schedule)
    }
  }, [])
}
