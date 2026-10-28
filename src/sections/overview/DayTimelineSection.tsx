import { useRef } from 'react'
import { DAY_MOMENTS } from '../../data/overview'
import { useScrollFrame } from '../../hooks/useScrollFrame'
import { easeOutCubic, isDesktop, pinProgress, prefersReducedMotion, range } from '../../lib/scroll'

/**
 * Pinned timeline: scrolling draws the line across the day and lights up each moment in turn.
 * Every photo stays visible but dimmed; the moment in focus (the current one while scrolling,
 * or the one under the pointer or keyboard focus) brightens and the rest stay dim.
 */
export function DayTimelineSection() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const fillRef = useRef<HTMLSpanElement>(null)
  const momentRefs = useRef<Array<HTMLLIElement | null>>([])
  const photoRefs = useRef<Array<HTMLElement | null>>([])
  const pointedRef = useRef<number | null>(null)

  const paint = () => {
    const wrap = wrapRef.current
    if (!wrap || !fillRef.current) return
    const pinned = isDesktop() && !prefersReducedMotion()
    const drawn = pinned ? range(pinProgress(wrap), 0.05, 0.9) : 1
    const count = DAY_MOMENTS.length
    const pointed = pointedRef.current
    fillRef.current.style.transform = `scaleX(${drawn})`

    DAY_MOMENTS.forEach((_, i) => {
      const moment = momentRefs.current[i]
      const photo = photoRefs.current[i]
      if (!moment || !photo) return

      const reached = !pinned || drawn >= i / count - 0.001
      moment.style.opacity = reached || pointed === i ? '1' : '0.35'

      // 1 while this moment is current, easing in as the line arrives and out as the next one starts.
      const local = drawn * count - i
      const isLast = i === count - 1
      let focus = (i === 0 ? 1 : range(local, 0, 0.18)) * (isLast ? 1 : 1 - range(local, 0.9, 1.02))
      // Without the pinned scene (small screens, reduced motion) every photo starts bright.
      if (!pinned) focus = 1
      if (pointed !== null) focus = pointed === i ? 1 : 0
      const f = easeOutCubic(focus)

      photo.style.opacity = (0.45 + 0.55 * f).toFixed(3)
      photo.style.filter = `grayscale(${((1 - f) * 0.7).toFixed(3)}) brightness(${(0.8 + 0.2 * f).toFixed(3)})`
      photo.style.transform = `scale(${(0.97 + 0.03 * f).toFixed(4)})`
    })
  }

  useScrollFrame(paint)

  const point = (index: number | null) => () => {
    pointedRef.current = index
    paint()
  }

  return (
    <div ref={wrapRef} className="pin-wrap relative mt-4 lg:h-[320vh]">
      <div className="pin-stage flex items-center lg:sticky lg:top-0 lg:h-svh">
        <section className="relative mx-4 w-full rounded-section bg-sand px-6 py-16 lg:px-[80px] lg:py-20">
          <h2 className="max-w-[520px] font-serif text-[36px] leading-[1.08] font-medium tracking-[-0.01em] text-balance lg:text-heading-sm">
            Wear and forget it. Aero Fit only speaks up when there is something to act on
          </h2>

          <ol className="relative mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8" onMouseLeave={point(null)}>
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
                tabIndex={0}
                onMouseEnter={point(i)}
                onFocus={point(i)}
                onBlur={point(null)}
                className="relative rounded-tile transition-opacity duration-500 outline-none focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-ink"
              >
                <span aria-hidden className="relative block size-[15px] rounded-full border-[3px] border-sand bg-ink" />
                <h3 className="mt-4 font-serif text-[24px] leading-tight font-medium">{moment.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-ink-soft">{moment.description}</p>
                <figure
                  ref={(node) => {
                    photoRefs.current[i] = node
                  }}
                  className="mt-5 h-[190px] overflow-hidden rounded-tile bg-tile opacity-45 transition-[opacity,filter,transform] duration-300 ease-out"
                >
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
