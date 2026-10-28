import { useRef } from 'react'
import { Link } from 'react-router'
import { ReadoutCard } from '../../components/overview/ReadoutCard'
import { buttonClasses, textLinkClass } from '../../components/ui/buttonStyles'
import { Reveal } from '../../components/ui/Reveal'
import { ROUTES } from '../../data/navigation'
import { MORNING_READOUT, OVERVIEW_HERO_IMAGE, OVERVIEW_SECTION_IDS } from '../../data/overview'
import { useScrollFrame } from '../../hooks/useScrollFrame'
import { clamp, prefersReducedMotion, range } from '../../lib/scroll'

export function OverviewHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const copyRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  // Photo drifts and zooms, the copy lifts away and the panel pulls in at the sides.
  useScrollFrame(() => {
    const section = sectionRef.current
    if (!section || !imageRef.current || !copyRef.current || !cardRef.current) return
    const p = prefersReducedMotion() ? 0 : clamp(window.scrollY / section.offsetHeight)
    imageRef.current.style.transform = `translate3d(0, ${p * 14}%, 0) scale(${1 + p * 0.1})`
    copyRef.current.style.transform = `translate3d(0, ${-p * 90}px, 0)`
    copyRef.current.style.opacity = String(1 - range(p, 0.15, 0.6))
    cardRef.current.style.transform = `translate3d(0, ${-p * 160}px, 0)`
    section.style.clipPath = `inset(0 ${p * 32}px round 28px)`
  })

  return (
    <section
      ref={sectionRef}
      className="relative mx-4 mt-5 h-[calc(100svh-108px)] max-h-[860px] min-h-[600px] overflow-hidden rounded-section"
    >
      <div className="absolute inset-0 animate-hero-zoom">
        <img
          ref={imageRef}
          data-scrub
          src={OVERVIEW_HERO_IMAGE}
          alt="Woman stretching on a coastal road at sunrise wearing an Aero Fit band"
          className="size-full object-cover object-[70%_center]"
          fetchPriority="high"
        />
      </div>
      <div aria-hidden className="absolute inset-0 bg-hero-fade" />

      <div
        ref={copyRef}
        data-scrub
        className="relative flex h-full max-w-[720px] flex-col justify-end pr-6 pb-14 pl-8 lg:pb-[88px] lg:pl-[96px]"
      >
        <Reveal delay={100}>
          <h1 className="font-serif text-[44px] leading-[1.02] font-medium tracking-[-0.02em] lg:text-display">
            Know what your body
            <br />
            is ready for today.
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-5 max-w-[460px] text-[17px] leading-[1.55] text-ink-soft">
            Aero Fit bands read your sleep, heart and effort around the clock. Each morning the app gives you one call:
            push, hold steady or recover.
          </p>
        </Reveal>
        <Reveal delay={300} className="mt-7 flex flex-wrap items-center gap-5">
          <Link to={ROUTES.howItWorks} className={buttonClasses()}>
            See how membership works
          </Link>
          <Link to={{ hash: OVERVIEW_SECTION_IDS.bands }} className={textLinkClass}>
            Shop the five bands
          </Link>
        </Reveal>
      </div>

      <div ref={cardRef} data-scrub className="absolute right-6 bottom-6 hidden md:block">
        <Reveal delay={450}>
          <ReadoutCard {...MORNING_READOUT} />
        </Reveal>
      </div>
    </section>
  )
}
