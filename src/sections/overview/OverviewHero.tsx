import { Link } from 'react-router'
import { ReadoutCard } from '../../components/overview/ReadoutCard'
import { buttonClasses, textLinkClass } from '../../components/ui/buttonStyles'
import { Eyebrow } from '../../components/ui/Eyebrow'
import { Reveal } from '../../components/ui/Reveal'
import { ROUTES } from '../../data/navigation'
import { MORNING_READOUT, OVERVIEW_HERO_IMAGE } from '../../data/overview'

export function OverviewHero() {
  return (
    <section className="relative mx-4 mt-5 h-[640px] overflow-hidden rounded-section">
      <img
        src={OVERVIEW_HERO_IMAGE}
        alt="Woman stretching on a coastal road at sunrise wearing an Aero Fit band"
        className="absolute inset-0 size-full animate-hero-zoom object-cover object-[70%_center]"
        fetchPriority="high"
      />
      <div aria-hidden className="absolute inset-0 bg-hero-fade" />

      <div className="relative flex h-full max-w-[680px] flex-col justify-center pl-8 lg:pl-[96px]">
        <Reveal>
          <Eyebrow>The Aero Fit system</Eyebrow>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-6 font-serif text-[44px] leading-[1.02] font-medium tracking-[-0.02em] lg:text-display">
            Know what your body
            <br />
            is ready for today.
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-5 max-w-[460px] text-[17px] leading-[1.55] text-ink-soft">
            Aero Fit bands read your sleep, heart and effort around the clock. The app turns it into one call each
            morning: push, hold steady or recover.
          </p>
        </Reveal>
        <Reveal delay={300} className="mt-7 flex flex-wrap items-center gap-5">
          <Link to={ROUTES.howItWorks} className={buttonClasses()}>
            See how membership works
          </Link>
          <Link to={ROUTES.shop} className={textLinkClass}>
            Shop the five bands
          </Link>
        </Reveal>
      </div>

      <Reveal delay={450} className="absolute right-6 bottom-6 hidden md:block">
        <ReadoutCard {...MORNING_READOUT} />
      </Reveal>
    </section>
  )
}
