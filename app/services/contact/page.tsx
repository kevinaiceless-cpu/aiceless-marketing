import Link from 'next/link'
import Container from '@/components/Container'
import ContactForm, { type Need } from '@/components/forms/ContactForm'

export const metadata = {
  title: 'Book a call | Salesforce admin help and recruiting | Aiceless',
  description:
    'Need Salesforce admin help, a health check or a Salesforce hire? Tell me what’s going on. I reply within one business day.',
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
              Book a call.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 text-pretty">
              Need admin help, a health check or a new hire? Tell me what’s going on in your Salesforce org.
            </p>
            <p className="mt-6 text-sm text-gray-600">
              Salesforce Certified Advanced Administrator. Based in Boston.
            </p>
            <p className="mt-8 text-base text-gray-600">
              Looking for a Salesforce role?{' '}
              <Link
                href="/services/salesforce-recruiting/candidates#profile-form"
                className="font-semibold text-aiceless-blue underline underline-offset-4"
              >
                Submit your profile instead.
              </Link>
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-lg border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
              <p className="mb-6 text-lg text-gray-700">
                Fill out the form and I’ll read it myself. I’ll reply within one business day to set up a call.
              </p>
              {/* PLACEHOLDER: Calendly/Cal.com scheduler embed can replace or sit beside this form once Kevin picks a tool */}
              <ContactForm key={defaultNeed} defaultNeed={defaultNeed} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
