import { Fragment, useRef } from 'react'
import { BandPanel } from '../../components/overview/BandPanel'
import { Reveal } from '../../components/ui/Reveal'
import { BAND_SHOWCASES, OVERVIEW_SECTION_IDS } from '../../data/overview'
import { useScrollFrame } from '../../hooks/useScrollFrame'
import { cn } from '../../lib/cn'
import { clamp, isDesktop, prefersReducedMotion } from '../../lib/scroll'

const STACK_Z = ['z-[1]', 'z-[2]', 'z-[3]']

/** Where stacked panels pin, 24px under the floating navbar. Panel height is `100svh - 120px` (this plus a 16px gap below). */
const STACK_TOP = 104

/**
 * Band panels that stack on desktop: each pins under the navbar at viewport height, scrolls its
 * detail cards in place, then holds while the next panel slides over it, shrinking slightly and
 * darkening under a shade.
 */
export function BandsStackSection() {
  const panelRefs = useRef<Array<HTMLElement | null>>([])
  const cardsRefs = useRef<Array<HTMLDivElement | null>>([])
  const spacerRefs = useRef<Array<HTMLDivElement | null>>([])
  const shadeRefs = useRef<Array<HTMLDivElement | null>>([])

  useScrollFrame(() => {
    const stacking = isDesktop() && !prefersReducedMotion()
    const vh = window.innerHeight
    panelRefs.current.forEach((panel, i) => {
      const cards = cardsRefs.current[i]
      const spacer = spacerRefs.current[i]
      if (!panel || !cards || !spacer) return
      panel.style.top = stacking ? `${STACK_TOP}px` : ''

      // The spacer after each panel adds the scroll distance its cards need while the panel is pinned.
      const frame = cards.parentElement
      const overflow = stacking && frame ? Math.max(0, Math.round(cards.offsetHeight - frame.clientHeight)) : 0
      const spacerHeight = `${overflow}px`
      if (spacer.style.height !== spacerHeight) spacer.style.height = spacerHeight
      // The spacer stays in flow, so how far it has risen past the pinned panel's bottom is the scroll spent inside it.
      const scrolled = overflow ? clamp((STACK_TOP + panel.offsetHeight - spacer.getBoundingClientRect().top) / overflow) : 0
      cards.style.transform = stacking ? `translate3d(0, ${(-scrolled * overflow).toFixed(1)}px, 0)` : ''

      const next = panelRefs.current[i + 1]
      if (!next) return
      const cover = stacking ? clamp((vh - next.getBoundingClientRect().top) / (vh - STACK_TOP)) : 0
      panel.style.transform = `scale(${1 - cover * 0.04})`
      const shade = shadeRefs.current[i]
      if (shade) shade.style.opacity = String(cover * 0.4)
    })
  })

  return (
    <>
      <section id={OVERVIEW_SECTION_IDS.bands} className="relative mx-auto mt-28 max-w-page scroll-mt-28 px-4">
        <Reveal>
          <h2 className="font-serif text-[36px] leading-[1.08] font-medium tracking-[-0.01em] lg:text-heading">
            Pick the band that fits your needs.
          </h2>
        </Reveal>
      </section>

      <div className="relative mt-10">
        {BAND_SHOWCASES.map((showcase, i) => (
          <Fragment key={showcase.productId}>
            <BandPanel
              ref={(node) => {
                panelRefs.current[i] = node
              }}
              cardsRef={(node) => {
                cardsRefs.current[i] = node
              }}
              showcase={showcase}
              className={cn(
                'stack-block lg:sticky lg:motion-safe:h-[calc(100svh-120px)] lg:motion-safe:overflow-clip',
                STACK_Z[i],
                i > 0 && 'mt-4',
              )}
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
            <div
              ref={(node) => {
                spacerRefs.current[i] = node
              }}
              aria-hidden
            />
          </Fragment>
        ))}
      </div>
    </>
  )
}
