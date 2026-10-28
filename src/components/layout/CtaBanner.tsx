import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { Reveal } from '../ui/Reveal'

/** `ink` is the dark default; `soft` is a light beige surface for pages kept in pale tones. */
type CtaTone = 'ink' | 'soft'

const TONES: Record<CtaTone, { surface: string; description: string }> = {
  ink: { surface: 'bg-ink text-white', description: 'text-white/75' },
  soft: { surface: 'bg-beige text-ink', description: 'text-ink-soft' },
}

interface CtaBannerProps {
  title: ReactNode
  description: ReactNode
  actions: ReactNode
  image?: { src: string; alt: string }
  tone?: CtaTone
}

/** Closing banner shared by marketing pages. */
export function CtaBanner({ title, description, actions, image, tone = 'ink' }: CtaBannerProps) {
  const style = TONES[tone]

  return (
    <Reveal className="mx-4 mt-28">
      <section className={cn('grid overflow-hidden rounded-section lg:grid-cols-[1fr_480px]', style.surface)}>
        <div className="flex flex-col justify-center px-6 py-14 lg:px-[80px] lg:py-20">
          <h2 className="max-w-[560px] font-serif text-[40px] leading-[1.08] font-medium lg:text-heading">{title}</h2>
          <p className={cn('mt-5 max-w-[480px] text-[16px] leading-[1.6]', style.description)}>{description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">{actions}</div>
        </div>
        {image && (
          <img
            src={image.src}
            alt={image.alt}
            className="h-[320px] w-full object-cover lg:h-full"
            loading="lazy"
            decoding="async"
          />
        )}
      </section>
    </Reveal>
  )
}
