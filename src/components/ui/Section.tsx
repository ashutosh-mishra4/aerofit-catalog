import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

/** Centered page-width section wrapper. */
export function Section({ className, ...rest }: HTMLAttributes<HTMLElement>) {
  return <section className={cn('mx-auto max-w-page px-4', className)} {...rest} />
}

type HeadingSize = 'md' | 'lg'

interface SectionHeadingProps {
  children: ReactNode
  size?: HeadingSize
  className?: string
}

export function SectionHeading({ children, size = 'lg', className }: SectionHeadingProps) {
  return (
    <h2 className={cn('font-serif font-medium', size === 'lg' ? 'text-heading' : 'text-heading-sm', className)}>
      {children}
    </h2>
  )
}

interface SectionHeaderProps {
  title: ReactNode
  titleClassName?: string
  description?: ReactNode
  descriptionClassName?: string
  /** Right-aligned content (controls or intro copy). */
  aside?: ReactNode
}

export function SectionHeader({
  title,
  titleClassName,
  description,
  descriptionClassName,
  aside,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
      <div>
        <SectionHeading className={titleClassName}>{title}</SectionHeading>
        {description && (
          <p className={cn('mt-3 text-[15px] leading-[1.6] text-ink-soft', descriptionClassName)}>{description}</p>
        )}
      </div>
      {aside}
    </div>
  )
}
