import { useRef } from 'react'
import { Link } from 'react-router'
import { BandPanel } from '../../components/overview/BandPanel'
import { textLinkClass } from '../../components/ui/buttonStyles'
import { Reveal } from '../../components/ui/Reveal'
import { SECTION_IDS } from '../../data/catalog'
import { ROUTES } from '../../data/navigation'
import { BAND_SHOWCASES, OVERVIEW_SECTION_IDS } from '../../data/overview'
import { useScrollFrame } from '../../hooks/useScrollFrame'
import { cn } from '../../lib/cn'
import { clamp, isDesktop, prefersReducedMotion } from '../../lib/scroll'

const STACK_Z = ['z-[1]', 'z-[2]', 'z-[3]']

/**
 * Band panels that stack on desktop: each holds still at the bottom of the viewport while the
 * next one slides over it, shrinking slightly and darkening under a shade.
 */
export function BandsStackSection() {
  const panelRefs = useRef<Array<HTMLElement | null>>([])
  const shadeRefs = useRef<Array<HTMLDivElement | null>>([])

  useScrollFrame(() => {
    const stacking = isDesktop() && !prefersReducedMotion()
    const vh = window.innerHeight
    panelRefs.current.forEach((panel, i) => {
      if (!panel) return
      panel.style.top = stacking ? `${Math.min(0, vh - panel.offsetHeight - 24)}px` : ''
      const next = panelRefs.current[i + 1]
      if (!next) return
      const cover = stacking ? clamp(1 - next.getBoundingClientRect().top / vh) : 0
      panel.style.transform = `scale(${1 - cover * 0.04})`
      const shade = shadeRefs.current[i]
      if (shade) shade.style.opacity = String(cover * 0.4)
    })
  })

  return (
    <>
      <section id={OVERVIEW_SECTION_IDS.bands} className="relative mx-auto mt-28 max-w-page scroll-mt-28 px-4">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div>
            <Reveal>
              <h2 className="font-serif text-[36px] leading-[1.08] font-medium tracking-[-0.01em] lg:text-heading">
                Pick the hardware.
                <br />
                The coaching is the same.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-3 max-w-[520px] text-[15px] leading-[1.6] text-ink-soft">
                Five bands, one membership. Here are three to start with, from an 18 g sleep tracker to a titanium GPS
                watch.
              </p>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <Link to={`${ROUTES.shop}#${SECTION_IDS.compare}`} className={textLinkClass}>
              Compare all five side by side
            </Link>
          </Reveal>
        </div>
      </section>

      <div className="relative mt-10">
        {BAND_SHOWCASES.map((showcase, i) => (
          <BandPanel
            key={showcase.productId}
            ref={(node) => {
              panelRefs.current[i] = node
            }}
            showcase={showcase}
            className={cn('stack-block lg:sticky', STACK_Z[i], i > 0 && 'mt-4')}
            shade={
              i < BAND_SHOWCASES.length - 1 && (
                <div
                  ref={(node) => {
                    shadeRefs.current[i] = node
                  }}
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-10 rounded-section bg-ink opacity-0"
                />
              )
            }
          />
        ))}
      </div>

      <div className="mx-auto mt-6 flex max-w-page flex-col gap-3 px-8 text-[14px] text-ink-soft sm:flex-row sm:items-center sm:justify-between">
        <p>
          Also in the lineup: <span className="font-medium text-ink">Smart</span>, with an always-on display, and{' '}
          <span className="font-medium text-ink">Music</span>, with 500 songs on your wrist.
        </p>
        <Link to={`${ROUTES.shop}#${SECTION_IDS.lineup}`} className={cn(textLinkClass, 'text-ink')}>
          See all five bands
        </Link>
      </div>
    </>
  )
}
