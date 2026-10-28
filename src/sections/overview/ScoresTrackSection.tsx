import { useEffect, useRef } from 'react'
import { MetricReadout } from '../../components/overview/MetricReadout'
import { Reveal } from '../../components/ui/Reveal'
import { METRICS, OVERVIEW_SECTION_IDS } from '../../data/overview'
import { useScrollFrame } from '../../hooks/useScrollFrame'
import { easeInOutCubic, isDesktop, pinProgress, prefersReducedMotion, range } from '../../lib/scroll'

/** Fraction of the remaining distance the track covers each frame; lower glides longer. */
const GLIDE = 0.09

/**
 * Dark score cards. On desktop the section pins and vertical scroll slides the cards sideways,
 * easing into a soft hold on each one; smaller screens get a native swipe carousel.
 */
export function ScoresTrackSection() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const slideRefs = useRef<Array<HTMLElement | null>>([])
  const glide = useRef({ target: 0, current: 0, frame: 0 })

  /** Fades and shrinks every card by its distance from `position` (in card units). */
  const paintSlides = (position: number) => {
    slideRefs.current.forEach((slide, j) => {
      if (!slide) return
      const distance = Math.min(1, Math.abs(position - j))
      slide.style.opacity = (1 - distance * 0.55).toFixed(3)
      slide.style.transform = `scale(${(1 - distance * 0.04).toFixed(4)})`
    })
  }

  const step = () => {
    const track = trackRef.current
    const [first, second] = slideRefs.current
    const state = glide.current
    if (!track || !first || !second) return
    state.current += (state.target - state.current) * GLIDE
    if (Math.abs(state.target - state.current) < 0.0004) state.current = state.target
    const cardStep = second.offsetLeft - first.offsetLeft
    track.style.transform = `translate3d(${(-state.current * cardStep).toFixed(2)}px, 0, 0)`
    paintSlides(state.current)
    state.frame = state.current === state.target ? 0 : requestAnimationFrame(step)
  }

  useScrollFrame(() => {
    const wrap = wrapRef.current
    const track = trackRef.current
    if (!wrap || !track) return
    if (!isDesktop() || prefersReducedMotion()) {
      track.style.transform = ''
      return
    }
    const raw = range(pinProgress(wrap), 0.05, 0.95) * (METRICS.length - 1)
    const index = Math.min(Math.floor(raw), METRICS.length - 2)
    const t = raw - index
    // Half linear, half ease-in-out: slows on each card without ever fully stopping.
    glide.current.target = index + (t * 0.5 + easeInOutCubic(t) * 0.5)
    if (!glide.current.frame) glide.current.frame = requestAnimationFrame(step)
  })

  useEffect(() => {
    const state = glide.current
    return () => {
      cancelAnimationFrame(state.frame)
      state.frame = 0
    }
  }, [])

  const handleSwipe = () => {
    const track = trackRef.current
    if (!track || isDesktop()) return
    const middle = track.scrollLeft + track.clientWidth / 2
    slideRefs.current.forEach((slide) => {
      if (!slide) return
      const distance = Math.min(1, Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - middle) / slide.offsetWidth)
      slide.style.opacity = String(1 - distance * 0.6)
      slide.style.transform = `scale(${1 - distance * 0.04})`
    })
  }

  return (
    <div ref={wrapRef} id={OVERVIEW_SECTION_IDS.scores} className="pin-wrap relative lg:h-[380vh]">
      <div className="pin-stage flex flex-col justify-center lg:sticky lg:top-0 lg:h-svh">
        <section className="relative mx-4 overflow-hidden rounded-section bg-ink py-16 text-white lg:py-14">
          <Reveal className="mx-auto max-w-page px-4 text-center">
            <h2 className="font-serif text-[36px] leading-[1.08] font-medium tracking-[-0.01em] text-balance lg:text-heading">
              A band that understands your body
            </h2>
          </Reveal>

          <div
            ref={trackRef}
            data-lenis-prevent
            onScroll={handleSwipe}
            className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-[calc((100%-min(760px,84vw))/2)] no-scrollbar will-change-transform lg:snap-none lg:overflow-visible lg:scroll-auto"
          >
            {METRICS.map((metric, i) => {
              const Icon = metric.icon
              return (
                <article
                  key={metric.id}
                  ref={(node) => {
                    slideRefs.current[i] = node
                  }}
                  className="w-[min(760px,84vw)] shrink-0 snap-center will-change-[transform,opacity]"
                  style={i === 0 ? undefined : { opacity: 0.45, transform: 'scale(0.96)' }}
                >
                  <div className="relative h-[300px] overflow-hidden rounded-card sm:h-[420px]">
                    <img
                      src={metric.image}
                      alt={metric.imageAlt}
                      className={`size-full object-cover ${metric.imagePosition}`}
                      loading="lazy"
                      decoding="async"
                    />
                    <MetricReadout metric={metric} />
                  </div>
                  <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_1.2fr] sm:gap-10">
                    <h3 className="flex items-center gap-3 font-serif text-[26px] leading-tight font-medium">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-ink">
                        <Icon size={17} stroke={2} aria-hidden />
                      </span>
                      {metric.label}
                    </h3>
                    <div>
                      <p className="text-[15px] leading-[1.6] text-white/70">{metric.description}</p>
                      <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${metric.label} is based on`}>
                        {metric.sources.map((source) => (
                          <li key={source} className="rounded-full bg-white/10 px-3 py-1 text-[12px] font-medium">
                            {source}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}
