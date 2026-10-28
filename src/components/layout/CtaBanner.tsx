import type { ReactNode } from 'react'
import { Reveal } from '../ui/Reveal'

interface CtaBannerProps {
  title: ReactNode
  description: ReactNode
  actions: ReactNode
  image?: { src: string; alt: string }
}

/** Dark closing banner shared by marketing pages. */
export function CtaBanner({ title, description, actions, image }: CtaBannerProps) {
  return (
    <Reveal className="mx-4 mt-28">
      <section className="grid overflow-hidden rounded-section bg-ink text-white lg:grid-cols-[1fr_480px]">
        <div className="flex flex-col justify-center bg-ink px-6 py-14 lg:px-[80px] lg:py-20">
          <h2 className="max-w-[560px] font-serif text-[40px] leading-[1.08] font-medium lg:text-heading">{title}</h2>
          <p className="mt-5 max-w-[480px] text-[16px] leading-[1.6] text-white/75">{description}</p>
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
