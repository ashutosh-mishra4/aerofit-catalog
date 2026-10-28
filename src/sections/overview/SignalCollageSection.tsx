import { useRef } from 'react'
import { Link } from 'react-router'
import { buttonClasses } from '../../components/ui/buttonStyles'
import { COLLAGE_ITEMS, OVERVIEW_SECTION_IDS } from '../../data/overview'
import { useScrollFrame } from '../../hooks/useScrollFrame'
import { cn } from '../../lib/cn'
import { clamp, easeOutCubic, pinProgress, prefersReducedMotion, range } from '../../lib/scroll'
import type { CollageItem } from '../../types/content'

function CollageCard({ item }: { item: CollageItem }) {
  if (item.kind === 'stat') {
    return (
      <>
        <span className="text-[12px] text-muted">{item.label}</span>
        <span className="text-[20px] leading-tight font-semibold">{item.value}</span>
      </>
    )
  }
  if (item.kind === 'product') {
    return <img src={item.image} alt="" className="size-[78%] object-contain mix-blend-multiply brightness-110" decoding="async" />
  }
  return <img src={item.image} alt={item.alt} className="size-full object-cover" decoding="async" />
}

const CARD_STYLES: Record<CollageItem['kind'], string> = {
  photo: 'overflow-hidden rounded-tile shadow-soft',
  product: 'flex items-center justify-center overflow-hidden rounded-tile bg-glow-thumb shadow-soft',
  stat: 'flex flex-col justify-center rounded-thumb bg-white px-4 shadow-float',
}

/** Pinned scene: photo and stat cards fan out from behind the headline, each at its own speed, then fade out as the pin ends. */
export function SignalCollageSection() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<Array<HTMLDivElement | null>>([])

  useScrollFrame(() => {
    const wrap = wrapRef.current
    const text = textRef.current
    if (!wrap || !text) return
    // Reduced motion shows the fully fanned-out state.
    const p = prefersReducedMotion() ? 0.45 : pinProgress(wrap)
    const stageW = wrap.clientWidth
    const stageH = window.innerHeight
    const sizeK = stageW < 640 ? 0.62 : stageW < 1024 ? 0.82 : 1
    const spreadK = stageW < 640 ? 1.25 : 1
    const fanIn = easeOutCubic(range(p, 0, 0.4))
    const driftOut = range(p, 0.45, 0.78)
    // Fully gone by 0.78: the next section overlaps the last screen of this pin and fades its headline in from there.
    const fadeOut = range(p, 0.58, 0.78)

    COLLAGE_ITEMS.forEach((item, i) => {
      const card = cardRefs.current[i]
      if (!card) return
      const x = (item.x / 100) * stageW * spreadK
      const y = (item.y / 100) * stageH
      const reach = fanIn + driftOut * 0.3 * item.speed
      const lift = driftOut * 220 * item.speed
      card.style.width = `${item.width * sizeK}px`
      card.style.height = `${item.height * sizeK}px`
      card.style.transform = `translate(-50%, -50%) translate3d(${x * reach}px, ${y * reach - lift}px, 0) scale(${0.5 + 0.5 * fanIn})`
      card.style.opacity = String(clamp(range(p, 0.02 * i, 0.25 + 0.02 * i)) * (1 - fadeOut))
      card.style.zIndex = String(Math.round(item.speed * 10))
    })

    text.style.opacity = String(range(p, 0, 0.15) * (1 - range(p, 0.52, 0.7)))
    text.style.transform = `translate3d(0, ${(1 - range(p, 0, 0.2)) * 30 - driftOut * 40}px, 0)`
  })

  return (
    <div ref={wrapRef} className="pin-wrap relative h-[240vh]">
      <div className="pin-stage sticky top-0 flex h-svh items-center justify-center overflow-hidden">
        <div aria-hidden>
          {COLLAGE_ITEMS.map((item, i) => (
            <div
              key={`${item.kind}-${item.x}-${item.y}`}
              ref={(node) => {
                cardRefs.current[i] = node
              }}
              data-scrub
              className={cn('absolute top-1/2 left-1/2 opacity-0', CARD_STYLES[item.kind])}
            >
              <CollageCard item={item} />
            </div>
          ))}
        </div>

        <div ref={textRef} data-scrub className="relative z-10 max-w-[560px] px-6 text-center opacity-0">
          <h2 className="font-serif text-[36px] leading-[1.08] font-medium tracking-[-0.01em] text-balance lg:text-heading">
            Built on what your body already tells you.
          </h2>
          <p className="mx-auto mt-4 max-w-[400px] text-[15px] leading-[1.6] text-ink-soft">
            Heart rate, HRV, skin temperature and movement, read every few seconds, day and night.
          </p>
          <Link to={{ hash: OVERVIEW_SECTION_IDS.scores }} className={buttonClasses({ className: 'mt-7' })}>
            See the four scores
          </Link>
        </div>
      </div>
    </div>
  )
}
