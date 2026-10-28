import { HeroProductCard } from '../components/catalog/HeroProductCard'
import { buttonClasses } from '../components/ui/buttonStyles'
import { FEATURED_PRODUCT_ID, HERO_IMAGE, PRODUCTS, SECTION_IDS } from '../data/catalog'

export function HeroSection() {
  return (
    <section className="relative mx-4 mt-5 h-[600px] overflow-hidden rounded-section">
      <img
        src={HERO_IMAGE}
        alt="Athlete checking his Aero Fit band on a track at sunrise"
        className="absolute inset-0 size-full object-cover object-[70%_center]"
        fetchPriority="high"
      />
      <div aria-hidden className="absolute inset-0 bg-hero-fade" />

      <div className="relative flex h-full max-w-[640px] flex-col justify-center pl-8 lg:pl-[96px]">
        <h1 className="font-serif text-[44px] leading-[1.02] font-medium tracking-[-0.02em] lg:text-display">
          Built for the
          <br />
          long way round.
        </h1>
        <p className="mt-5 max-w-[440px] text-[17px] leading-[1.55] text-ink-soft">
          Aero Fit Ultra runs 14 days on a charge with dual-band GPS, so a week of trail miles fits between charges.
        </p>
        <div className="mt-7 flex items-center gap-5">
          <a href={`#${SECTION_IDS.featured}`} className={buttonClasses()}>
            View Ultra
          </a>
          <a
            href={`#${SECTION_IDS.lineup}`}
            className="text-[14px] font-medium underline underline-offset-4 transition hover:opacity-70"
          >
            See all five bands
          </a>
        </div>
      </div>

      <HeroProductCard
        product={PRODUCTS[FEATURED_PRODUCT_ID]}
        note="Ships from November 4"
        className="absolute right-6 bottom-6 hidden md:flex"
      />
    </section>
  )
}
