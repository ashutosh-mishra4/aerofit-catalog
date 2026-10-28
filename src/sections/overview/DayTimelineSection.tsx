import { useRef } from 'react'
import { DAY_MOMENTS } from '../../data/overview'
import { useScrollFrame } from '../../hooks/useScrollFrame'
import { easeOutCubic, isDesktop, pinProgress, prefersReducedMotion, range } from '../../lib/scroll'

/** Share of the segment before each dot over which that moment unlocks, finishing as the line touches the dot. */
const UNLOCK = 0.5

/**
 * Pinned timeline: scrolling draws the line across the day and unlocks each moment in turn.
 * Moments the line has passed stay lit; the ones still ahead of it stay dimmed.
 * Scroll writes `--reach` and `--scroll-focus` per moment, which the `.day-moment` CSS reads.
 */
export function DayTimelineSection() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const fillRef = useRef<HTMLSpanElement>(null)
  const momentRefs = useRef<Array<HTMLLIElement | null>>([])
  const dotRefs = useRef<Array<HTMLSpanElement | null>>([])

  /** Where each dot's centre sits along the line, 0–1. Read from layout since column gaps shift them off i / count. */
  const dotStops = (line: HTMLElement) =>
    DAY_MOMENTS.map((_, i) => {
      const moment = momentRefs.current[i]
      const dot = dotRefs.current[i]
      if (!moment || !dot || !line.offsetWidth) return i / DAY_MOMENTS.length
      return (moment.offsetLeft + dot.offsetLeft + dot.offsetWidth / 2 - line.offsetLeft) / line.offsetWidth
    })

  useScrollFrame(() => {
    const wrap = wrapRef.current
    const fill = fillRef.current
    if (!wrap || !fill) return
    const pinned = isDesktop() && !prefersReducedMotion()
    const drawn = pinned ? range(pinProgress(wrap), 0.05, 0.9) : 1
    const stops = dotStops(fill)
    fill.style.transform = `scaleX(${drawn})`

    DAY_MOMENTS.forEach((_, i) => {
      const moment = momentRefs.current[i]
      if (!moment) return

      // 0 → 1 as the line head crosses the second half of the segment before this dot, then stays 1.
      // Without the pinned scene (small screens, reduced motion) every moment starts unlocked.
      const unlock = (start: number) => range(drawn, stops[i] - (stops[i] - start) * UNLOCK, stops[i])
      const unlocked = !pinned || i === 0 ? 1 : unlock(stops[i - 1])

      moment.style.setProperty('--reach', unlocked.toFixed(3))
      moment.style.setProperty('--scroll-focus', easeOutCubic(unlocked).toFixed(3))
    })
  })

  return (
    <div ref={wrapRef} className="pin-wrap relative mt-4 lg:h-[320vh]">
      <div className="pin-stage flex items-center lg:sticky lg:top-0 lg:h-svh">
        <section className="relative mx-4 w-full rounded-section bg-beige px-6 py-16 lg:px-[80px] lg:py-20">
          <h2 className="max-w-[760px] font-serif text-[36px] leading-[1.08] font-medium tracking-[-0.01em] text-balance lg:text-heading-sm">
            Wear and forget it. Aero Fit only speaks up when there is something to act on
          </h2>

          <ol className="day-moments relative mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <span aria-hidden className="absolute top-[7px] right-0 left-0 hidden h-px bg-line-strong lg:block" />
            <span
              ref={fillRef}
              aria-hidden
              className="absolute top-[6px] right-0 left-0 hidden h-[3px] origin-left rounded-full bg-ink lg:block"
              style={{ transform: 'scaleX(0)' }}
            />

            {DAY_MOMENTS.map((moment, i) => (
              <li
                key={moment.title}
                ref={(node) => {
                  momentRefs.current[i] = node
                }}
                className="day-moment relative"
              >
                <span
                  ref={(node) => {
                    dotRefs.current[i] = node
                  }}
                  aria-hidden
                  className="relative block size-[15px] rounded-full border-[3px] border-beige bg-ink"
                />
                <h3 className="mt-4 font-serif text-[24px] leading-tight font-medium">{moment.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-ink-soft">{moment.description}</p>
                <figure className="day-moment-photo mt-5 h-[190px] overflow-hidden rounded-tile bg-tile">
                  <img src={moment.image} alt={moment.imageAlt} className="size-full object-cover" loading="lazy" decoding="async" />
                </figure>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  )
}
