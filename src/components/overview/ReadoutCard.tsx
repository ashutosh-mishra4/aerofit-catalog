import { cn } from '../../lib/cn'
import type { ReadoutRow } from '../../types/content'

interface ReadoutCardProps {
  score: string
  verdict: string
  rows: ReadoutRow[]
  className?: string
}

/** Floating mock of the app's morning Recovery screen. */
export function ReadoutCard({ score, verdict, rows, className }: ReadoutCardProps) {
  return (
    <div
      className={cn('w-[340px] rounded-float bg-white/92 p-5 shadow-float backdrop-blur-md', className)}
      aria-label={`Example morning readout: Recovery ${score}`}
      role="img"
    >
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[13px] text-muted">This morning</p>
          <p className="font-serif text-[22px] leading-tight font-medium">Recovery</p>
        </div>
        <p className="text-[40px] leading-none font-semibold">{score}</p>
      </div>
      <dl className="mt-5 space-y-3">
        {rows.map((row) => (
          <div key={row.label} className="grid grid-cols-[84px_1fr_auto] items-center gap-3 text-[13px]">
            <dt className="text-muted">{row.label}</dt>
            <div className="h-1.5 overflow-hidden rounded-full bg-chip">
              <div className="h-full rounded-full bg-ink" style={{ width: `${row.level}%` }} />
            </div>
            <dd className="font-medium">{row.value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-5 inline-flex rounded-full bg-accent px-3 py-1 text-[13px] font-medium">{verdict}</p>
    </div>
  )
}
