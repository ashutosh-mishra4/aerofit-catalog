import { useState, type FormEvent } from 'react'
import { Button } from '../ui/Button'

export function NewsletterCard() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email.trim()) return
    setIsSubscribed(true)
    setEmail('')
  }

  return (
    <div className="rounded-float bg-white p-6 shadow-soft">
      <p className="text-[17px] font-medium">Get health tips in your inbox</p>
      <p className="mt-1.5 text-[13px] leading-[1.55] text-muted">
        Sleep, recovery and training insights from the Aero Fit performance team, every week.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-5 flex h-[52px] items-center gap-2 rounded-full border border-line bg-canvas pr-1.5 pl-5 focus-within:border-ink"
      >
        <input
          type="email"
          required
          aria-label="Email address"
          placeholder="Email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="min-w-0 flex-1 bg-transparent text-[14px] outline-hidden placeholder:text-placeholder"
        />
        <Button type="submit" size="sm">
          Subscribe
        </Button>
      </form>
      <p aria-live="polite" className={isSubscribed ? 'mt-2 text-[12px] text-muted' : 'sr-only'}>
        {isSubscribed ? "Thanks. You're on the list." : ''}
      </p>
    </div>
  )
}
