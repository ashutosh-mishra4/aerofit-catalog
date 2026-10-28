import { IconPlus } from '@tabler/icons-react'
import type { ReactNode } from 'react'

export interface AccordionItem {
  id: string
  title: string
  content: ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
  /** Item expanded on first render. */
  defaultOpenId?: string
}

/** Multi-open disclosure list built on native <details> for keyboard + screen-reader support. */
export function Accordion({ items, defaultOpenId }: AccordionProps) {
  return (
    <div className="border-t border-line-strong">
      {items.map((item) => (
        <details key={item.id} open={item.id === defaultOpenId} className="group border-b border-line-strong">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[18px] font-medium transition hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink [&::-webkit-details-marker]:hidden">
            {item.title}
            <span
              aria-hidden
              className="flex size-9 shrink-0 items-center justify-center rounded-full bg-chip transition duration-300 group-open:rotate-45 group-open:bg-accent"
            >
              <IconPlus size={16} stroke={2} />
            </span>
          </summary>
          <div className="max-w-[620px] pb-6 text-[15px] leading-[1.65] text-ink-soft">{item.content}</div>
        </details>
      ))}
    </div>
  )
}
