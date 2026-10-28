/** Math and viewport helpers for the scroll-driven overview scenes. */

export const clamp = (value: number, min = 0, max = 1): number => Math.min(max, Math.max(min, value))

/** Maps `progress` from the `[start, end]` window to 0–1. */
export const range = (progress: number, start: number, end: number): number =>
  clamp((progress - start) / (end - start))

export const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3)

export const easeInOutCubic = (t: number): number => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

export const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Pinned scenes and horizontal tracks only run at the `lg` breakpoint. */
export const isDesktop = (): boolean => window.innerWidth >= 1024

/** 0 → 1 while a tall `.pin-wrap` element's sticky stage is pinned to the viewport. */
export function pinProgress(wrapper: HTMLElement): number {
  const total = wrapper.offsetHeight - window.innerHeight
  return total > 0 ? clamp(-wrapper.getBoundingClientRect().top / total) : 1
}
