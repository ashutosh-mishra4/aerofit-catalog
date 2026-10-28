import { useRef } from 'react'
import { PRODUCTS } from '../../data/catalog'
import { MORNING_READOUT, MORNING_RECOVERY } from '../../data/overview'
import { useScrollFrame } from '../../hooks/useScrollFrame'
import { cn } from '../../lib/cn'
import { easeOutCubic, pinProgress, prefersReducedMotion, range } from '../../lib/scroll'

/** Where each input chip lands around the arc, in readout row order. */
const CHIP_POSITIONS = [
  'bottom-[40%] left-[2%] sm:left-0 sm:w-[200px]',
  'bottom-[12%] left-[4%] hidden sm:block sm:w-[200px]',
  'right-[2%] bottom-[40%] sm:right-0 sm:w-[200px]',
]

const ultra = PRODUCTS.ultra

/** Pinned scene: the headline gives way to the Recovery score counting up while the band rises into frame. */
export function MorningScoreSection() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const statRef = useRef<HTMLDivElement>(null)
  const numberRef = useRef<HTMLSpanElement>(null)
  const arcRef = useRef<SVGPathElement>(null)
  const diskRef = useRef<HTMLDivElement>(null)
  const chipRefs = useRef<Array<HTMLElement | null>>([])

  useScrollFrame(() => {
    const wrap = wrapRef.current
    if (!wrap || !titleRef.current || !statRef.current || !numberRef.current || !arcRef.current || !diskRef.current) return
    const p = prefersReducedMotion() ? 1 : pinProgress(wrap)

    const titleOut = range(p, 0.06, 0.2)
    titleRef.current.style.opacity = String(1 - titleOut)
    titleRef.current.style.transform = `translate3d(0, ${-24 * titleOut}px, 0)`

    const statIn = range(p, 0.16, 0.3)
    statRef.current.style.opacity = String(statIn)
    statRef.current.style.transform = `translate3d(0, ${(1 - statIn) * 24}px, 0)`

    const fill = easeOutCubic(range(p, 0.2, 0.62))
    numberRef.current.textContent = String(Math.round(MORNING_RECOVERY * fill))
    arcRef.current.style.strokeDashoffset = String(100 - MORNING_RECOVERY * fill)
    // The disk's centre settles on the bottom edge (50%) from well below the frame (100%).
    diskRef.current.style.transform = `translate3d(-50%, ${50 + (1 - easeOutCubic(range(p, 0.05, 0.55))) * 50}%, 0)`

    chipRefs.current.forEach((chip, i) => {
      if (!chip) return
      const pop = easeOutCubic(range(p, 0.62 + i * 0.05, 0.76 + i * 0.05))
      chip.style.opacity = String(pop)
      chip.style.transform = `translate3d(0, ${(1 - pop) * 24}px, 0) scale(${0.94 + pop * 0.06})`
    })
  })

  const setChipRef = (i: number) => (node: HTMLElement | null) => {
    chipRefs.current[i] = node
  }

  return (
    <div ref={wrapRef} className="pin-wrap relative h-[260vh]">
      <div className="pin-stage sticky top-0 h-svh overflow-hidden px-4">
        <div ref={titleRef} data-scrub className="absolute inset-x-0 top-[17%] z-10 px-6 text-center">
          <p className="text-[13px] font-semibold tracking-[0.12em] text-muted uppercase">Every morning</p>
          <h2 className="mx-auto mt-4 max-w-[640px] font-serif text-[36px] leading-[1.08] font-medium tracking-[-0.01em] text-balance lg:text-heading">
            One call before your feet hit the floor.
          </h2>
        </div>

        <div
          ref={statRef}
          data-scrub
          className="absolute inset-x-0 top-[13%] z-10 grid grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 opacity-0 sm:gap-10"
        >
          <p className="text-right text-[12px] font-semibold tracking-[0.12em] text-muted uppercase sm:text-[14px]">
            This morning
          </p>
          <p
            className="font-serif text-[96px] leading-none font-medium tracking-[-0.03em] tabular-nums sm:text-[150px] lg:text-[190px]"
            aria-label={`Recovery ${MORNING_READOUT.score}`}
          >
            <span ref={numberRef}>0</span>
            <span className="text-[0.4em] text-muted">%</span>
          </p>
          <p className="text-[12px] font-semibold tracking-[0.12em] text-muted uppercase sm:text-[14px]">Recovery</p>
        </div>

        <div className="absolute inset-x-0 bottom-0 mx-auto h-[54%] max-w-[1000px]">
          <svg
            viewBox="0 0 1000 500"
            className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2"
            aria-hidden
          >
            <path d="M 40 500 A 460 460 0 0 1 960 500" fill="none" stroke="var(--color-line-strong)" strokeWidth="14" strokeLinecap="round" />
            <path
              ref={arcRef}
              d="M 40 500 A 460 460 0 0 1 960 500"
              fill="none"
              stroke="var(--color-ink)"
              strokeWidth="14"
              strokeLinecap="round"
              pathLength={100}
              strokeDasharray="100"
              strokeDashoffset="100"
            />
          </svg>

          <div
            ref={diskRef}
            data-scrub
            className="absolute bottom-0 left-1/2 aspect-square h-[150%] overflow-hidden rounded-full bg-glow-feature"
            style={{ transform: 'translate3d(-50%, 100%, 0)' }}
          >
            <img
              src={ultra.image}
              alt={`Aero Fit ${ultra.name} in ${ultra.colors[0].name}`}
              className="absolute top-[6%] left-1/2 w-[34%] -translate-x-1/2 mix-blend-multiply brightness-110"
              decoding="async"
              loading="lazy"
            />
          </div>

          {MORNING_READOUT.rows.map(({ label, value, icon: RowIcon }, i) => (
            <div
              key={label}
              ref={setChipRef(i)}
              data-scrub
              className={cn('absolute z-10 rounded-float bg-white p-4 opacity-0 shadow-float', CHIP_POSITIONS[i])}
            >
              <p className="flex items-center gap-2 text-[13px] text-muted">
                {RowIcon && <RowIcon size={15} stroke={1.75} aria-hidden />}
                {label}
              </p>
              <p className="mt-1 text-[24px] leading-tight font-semibold">{value}</p>
            </div>
          ))}
          <p
            ref={setChipRef(MORNING_READOUT.rows.length)}
            data-scrub
            className="absolute right-[4%] bottom-[16%] z-10 hidden rounded-full bg-accent px-4 py-2 text-[14px] font-medium opacity-0 shadow-soft sm:block"
          >
            {MORNING_READOUT.verdict}
          </p>
        </div>
      </div>
    </div>
  )
}
