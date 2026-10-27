import Container from '@/components/Container'
import { ButtonLink, Placeholder, TextLink } from '@/components/ui'

export const metadata = {
  title: 'Aiceless | Simple tools for small businesses. Salesforce help for growing ones.',
  description:
    'Aiceless Alerts posts closures, sales and updates everywhere in one click. Aiceless also offers fractional Salesforce admin and Salesforce recruiting.',
}

function Door({
  id,
  heading,
  body,
  children,
  proof,
}: {
  id: string
  heading: string
  body: string
  children: React.ReactNode
  proof: React.ReactNode
}) {
  return (
    <div className="flex flex-col">
      <article
        aria-labelledby={id}
        className="flex flex-1 flex-col rounded-lg border border-gray-200 bg-white p-6 sm:p-8 lg:p-10 shadow-sm"
      >
        <h2 id={id} className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
          {heading}
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-pretty flex-1">{body}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">{children}</div>
      </article>
      <div className="mt-4 px-2 md:min-h-[3rem]">{proof}</div>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-gray-50 pt-16 pb-16 md:pt-20 md:pb-24">
        <Container>
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight text-balance">
              Simple tools for small businesses.
              <span className="block text-aiceless-blue mt-2">Salesforce help for growing ones.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600">Pick the one you came for.</p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <Door
              id="door-alerts"
              heading="Aiceless Alerts"
              body="Post closures, sales and updates to Facebook, Instagram and your website in one click."
              proof={
                <Placeholder note="PLACEHOLDER: testimonial from an Aiceless Alerts customer, with name and business" />
              }
            >
              <ButtonLink href="/signup" size="md">
                Start free trial
              </ButtonLink>
              <ButtonLink href="/alerts" variant="secondary" size="md">
                See how it works
              </ButtonLink>
            </Door>

            <Door
              id="door-services"
              heading="Salesforce services"
              body="A part-time Salesforce admin when you need one. A permanent Salesforce hire when you’re ready for one."
              proof={
                <p className="text-sm text-gray-600">
                  Salesforce Certified Advanced Administrator. 10+ years of hands-on CRM administration,
                  architecture and development.
                </p>
              }
            >
              <ButtonLink href="/services/salesforce-admin" size="md">
                Fractional admin
              </ButtonLink>
              <ButtonLink href="/services/salesforce-recruiting" variant="secondary" size="md">
                Recruiting
              </ButtonLink>
            </Door>
          </div>
        </Container>
      </section>

      <section aria-labelledby="about-heading" className="bg-white py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <Placeholder note="PLACEHOLDER: small photo of Kevin" />
            <h2 id="about-heading" className="sr-only">
              About Aiceless
            </h2>
            <p className="text-xl md:text-2xl text-gray-900 leading-relaxed text-pretty">
              I’m Kevin. Aiceless is my company, and I run it from Boston. Aiceless Alerts is our app for small
              businesses. On the Salesforce side, I’m a Salesforce Certified Advanced Administrator, and I do the
              admin work and the recruiting myself.
            </p>
            <p className="mt-6 text-lg">
              <TextLink href="/about">More about me</TextLink>
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
