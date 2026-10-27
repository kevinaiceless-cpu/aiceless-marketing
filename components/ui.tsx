import Link from 'next/link'
import Container from './Container'

type Variant = 'primary' | 'secondary'
type Size = 'lg' | 'md'

const base =
  'inline-flex items-center justify-center rounded-lg font-semibold transition-colors text-center min-h-[44px]'
const variants: Record<Variant, string> = {
  primary: 'bg-aiceless-blue text-white hover:bg-opacity-90',
  secondary: 'bg-white text-aiceless-blue border-2 border-aiceless-blue hover:bg-gray-50',
}
const sizes: Record<Size, string> = {
  lg: 'px-8 py-4 text-lg',
  md: 'px-6 py-3 text-base',
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  size = 'lg',
  shadow = false,
  className = '',
}: {
  href: string
  children: React.ReactNode
  variant?: Variant
  size?: Size
  shadow?: boolean
  className?: string
}) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${shadow ? 'shadow-lg' : ''} ${className}`
  const external = href.startsWith('http')
  if (external) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  )
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="font-semibold text-aiceless-blue underline underline-offset-4 decoration-2 decoration-aiceless-blue/30 hover:decoration-aiceless-blue transition-colors"
    >
      {children}
    </Link>
  )
}

/**
 * Renders a real HTML comment in the page source so placeholders stay findable
 * (view-source / grep "PLACEHOLDER") without showing anything to visitors.
 */
export function Placeholder({ note }: { note: string }) {
  const safe = note.replace(/--/g, '\u2014')
  return <span hidden dangerouslySetInnerHTML={{ __html: `<!-- ${safe} -->` }} />
}

export function Section({
  children,
  tone = 'white',
  id,
  className = '',
  labelledBy,
}: {
  children: React.ReactNode
  tone?: 'white' | 'gray'
  id?: string
  className?: string
  labelledBy?: string
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`py-16 md:py-24 ${tone === 'gray' ? 'bg-gray-50' : 'bg-white'} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  )
}

export function H2({ id, children, className = '' }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <h2 id={id} className={`text-3xl md:text-4xl font-bold text-gray-900 tracking-tight text-balance ${className}`}>
      {children}
    </h2>
  )
}

export function PageHero({
  line1,
  line2,
  subhead,
  children,
  smallPrint,
}: {
  line1: string
  line2?: string
  subhead: React.ReactNode
  children?: React.ReactNode
  smallPrint?: React.ReactNode
}) {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 pt-16 pb-20 md:pt-20 md:pb-28">
      <Container>
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight text-balance">
            {line1}
            {line2 && <span className="block text-aiceless-blue mt-2">{line2}</span>}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl text-pretty">{subhead}</p>
          {children && <div className="mt-8 flex flex-col sm:flex-row gap-4">{children}</div>}
          {smallPrint && <p className="mt-4 text-sm text-gray-500">{smallPrint}</p>}
        </div>
      </Container>
    </section>
  )
}

export function Checklist({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-lg text-gray-600">
          <svg
            aria-hidden="true"
            className="mt-1 size-5 flex-shrink-0 text-aiceless-teal"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
              clipRule="evenodd"
            />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function Steps({ steps }: { steps: { title: string; body: React.ReactNode }[] }) {
  return (
    <ol className="space-y-8 max-w-3xl">
      {steps.map((s, i) => (
        <li key={s.title} className="flex items-start gap-5">
          <span
            aria-hidden="true"
            className="flex-shrink-0 size-10 rounded-full bg-aiceless-blue text-white flex items-center justify-center font-bold tabular-nums"
          >
            {i + 1}
          </span>
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              <span className="sr-only">Step {i + 1}: </span>
              {s.title}
            </h3>
            <div className="mt-1 text-gray-600 text-lg">{s.body}</div>
          </div>
        </li>
      ))}
    </ol>
  )
}

export function Faq({ items }: { items: { q: string; a: React.ReactNode }[] }) {
  return (
    <div className="max-w-3xl divide-y divide-gray-200 border-y border-gray-200">
      {items.map((item) => (
        <details key={item.q} className="group py-2">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-semibold text-gray-900 [&::-webkit-details-marker]:hidden">
            {item.q}
            <svg
              aria-hidden="true"
              className="size-5 flex-shrink-0 text-aiceless-blue transition-transform group-open:rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
            </svg>
          </summary>
          <div className="pb-4 text-gray-600 text-lg space-y-3">{item.a}</div>
        </details>
      ))}
    </div>
  )
}

export function FinalCta({
  heading,
  body,
  children,
  after,
}: {
  heading: string
  body: React.ReactNode
  children: React.ReactNode
  after?: React.ReactNode
}) {
  return (
    <section aria-labelledby="final-cta" className="on-blue bg-aiceless-blue py-16 md:py-24">
      <Container>
        <div className="max-w-3xl">
          <h2 id="final-cta" className="text-3xl md:text-4xl font-bold text-white tracking-tight text-balance">
            {heading}
          </h2>
          <p className="mt-4 text-lg md:text-xl text-white/90 text-pretty">{body}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">{children}</div>
          {after && <div className="mt-6 text-white/90">{after}</div>}
        </div>
      </Container>
    </section>
  )
}

/** White button for use on the blue final-CTA band. */
export function OnBlueButton({
  href,
  children,
  outline = false,
}: {
  href: string
  children: React.ReactNode
  outline?: boolean
}) {
  const cls = outline
    ? `${base} px-8 py-4 text-lg border-2 border-white text-white hover:bg-white/10`
    : `${base} px-8 py-4 text-lg bg-white text-aiceless-blue hover:bg-gray-100 shadow-lg`
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  )
}

export function KevinBio({ children, placeholder }: { children: React.ReactNode; placeholder: string }) {
  return (
    <div className="max-w-3xl">
      <Placeholder note={placeholder} />
      <div className="space-y-4 text-lg text-gray-600 text-pretty">{children}</div>
    </div>
  )
}
