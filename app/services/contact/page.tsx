import Container from '@/components/Container'
import ContactForm, { type Need } from '@/components/forms/ContactForm'
import { Placeholder } from '@/components/ui'

export const metadata = {
  title: 'Book a call | Salesforce services | Aiceless',
  description:
    'Tell Kevin what’s going on in your Salesforce org, or what Salesforce role you’re trying to fill.',
}

const valid: Need[] = ['admin', 'health-check', 'hire', 'candidate']

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const sp = await searchParams
  const raw = typeof sp.need === 'string' ? sp.need : ''
  const defaultNeed = (valid as string[]).includes(raw) ? (raw as Need) : ''

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 pt-16 pb-20 md:pt-20 md:pb-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight text-balance">
              Tell me what you need.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 text-pretty">
              Book a call and tell me what’s going on in your org, or what role you’re trying to fill. I’ll tell
              you which option fits, or if neither does.
            </p>
            <p className="mt-6 text-sm text-gray-600">
              Salesforce Certified Advanced Administrator. Based in Boston.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-lg border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
              <Placeholder note="PLACEHOLDER: scheduling embed (e.g. Calendly/Cal.com) can replace or sit beside this form once Kevin picks a tool" />
              <ContactForm key={defaultNeed} defaultNeed={defaultNeed} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
