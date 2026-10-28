import { cn } from '../../lib/cn'
import type { Metric, ReadoutTone } from '../../types/content'

const TONE_CLASSES: Record<ReadoutTone, string> = {
  chip: 'bg-chip',
  ink: 'bg-ink',
  accent: 'bg-accent',
}

/** Floating app readout pinned to the corner of a score card photo. */
export function MetricReadout({ metric }: { metric: Metric }) {
  const { readout, value, unit } = metric

  return (
    <div className="absolute bottom-4 left-4 w-[230px] rounded-float bg-white/92 p-4 text-ink shadow-float backdrop-blur-md">
      <p className="text-[12px] text-muted">{metric.readoutLabel ?? metric.label}</p>
      <p className="mt-0.5 text-[32px] leading-none font-semibold">
        {value}
        {unit === '%' ? unit : unit && <span className="ml-1 text-[16px] font-medium text-muted">{unit}</span>}
      </p>

      {readout.kind === 'bars' && (
        <div className="mt-3 flex h-8 items-end gap-[3px]" aria-hidden>
          {readout.bars.map((bar, i) => (
            <span key={i} className={cn('flex-1 rounded-sm', TONE_CLASSES[bar.tone])} style={{ height: `${bar.level}%` }} />
          ))}
        </div>
      )}

      {readout.kind === 'progress' && (
        <>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-chip" aria-hidden>
            <div className="h-full rounded-full bg-ink" style={{ width: `${readout.level}%` }} />
          </div>
          <p className="mt-3 inline-flex rounded-full bg-accent px-2.5 py-0.5 text-[12px] font-medium">{readout.verdict}</p>
        </>
      )}

      {readout.kind === 'segments' && (
        <>
          <div className="mt-3 flex gap-1" aria-hidden>
            {readout.segments.map((tone, i) => (
              <span key={i} className={cn('h-1.5 flex-1 rounded-full', TONE_CLASSES[tone])} />
            ))}
          </div>
          <p className="mt-3 text-[12px] text-muted">{readout.caption}</p>
        </>
      )}

      {readout.kind === 'trend' && (
        <svg viewBox="0 0 200 40" className="mt-3 h-8 w-full" aria-hidden>
          <polyline fill="none" stroke="var(--color-ink)" strokeWidth="2" strokeLinejoin="round" points={readout.points} />
        </svg>
      )}
    </div>
  )
}
