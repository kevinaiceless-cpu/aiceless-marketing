import Container from './Container'

/** Shared layout for the Terms and Privacy pages: readable measure, clear headings, fixed effective date. */
export function LegalPage({
  title,
  effective,
  intro,
  toc,
  children,
}: {
  title: string
  effective: string
  intro?: React.ReactNode
  toc?: { id: string; label: string }[]
  children: React.ReactNode
}) {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-gray-50 pt-16 pb-12 md:pt-20 md:pb-16">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight text-balance">{title}</h1>
            <p className="mt-4 text-base text-gray-600">
              <span className="font-semibold text-gray-900">Effective date:</span> {effective}
            </p>
            {intro && <div className="mt-6 text-lg text-gray-600 text-pretty space-y-4">{intro}</div>}
          </div>
        </Container>
      </section>
      <section className="bg-white py-12 md:py-16">
        <Container>
          <div className="max-w-3xl">
            {toc && toc.length > 0 && (
              <nav aria-labelledby="toc-heading" className="mb-12 rounded-lg border border-gray-200 bg-gray-50 p-6">
                <h2 id="toc-heading" className="font-semibold text-gray-900">
                  On this page
                </h2>
                <ol className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 list-decimal pl-5 text-gray-600">
                  {toc.map((t) => (
                    <li key={t.id}>
                      <a href={'#' + t.id} className="hover:text-aiceless-blue underline-offset-2 hover:underline">
                        {t.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}
            <div className="space-y-12">{children}</div>
          </div>
        </Container>
      </section>
    </>
  )
}

export function LegalSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={id + '-heading'} className="scroll-mt-24">
      <h2 id={id + '-heading'} className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight text-balance">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-lg leading-relaxed text-gray-600 text-pretty">{children}</div>
    </section>
  )
}

export function LegalH3({ children }: { children: React.ReactNode }) {
  return <h3 className="pt-2 text-xl font-bold text-gray-900">{children}</h3>
}

export function LegalList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc pl-6 space-y-2 marker:text-aiceless-blue">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

/** Prominent notice box for statements that must not be lost in fine print. */
export function Notice({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-r-lg border-l-4 border-aiceless-blue bg-gray-50 p-6 text-lg text-gray-900">
      {title && <p className="font-bold">{title}</p>}
      <div className={title ? 'mt-2 space-y-3' : 'space-y-3'}>{children}</div>
    </div>
  )
}

export function Mail({ to }: { to: string }) {
  return (
    <a href={'mailto:' + to} className="font-semibold text-aiceless-blue underline underline-offset-2">
      {to}
    </a>
  )
}
