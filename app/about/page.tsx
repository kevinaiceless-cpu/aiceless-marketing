import { ButtonLink, Checklist, H2, OnBlueButton, PageHero, Placeholder, Section } from '@/components/ui'
import Container from '@/components/Container'

export const metadata = {
  title: 'About | Kevin and Aiceless',
  description:
    'Aiceless is run by Kevin, a Boston-based Salesforce Certified Advanced Administrator. It makes Aiceless Alerts for small businesses and offers Salesforce admin and recruiting services.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        line1="I’m Kevin."
        line2="I run Aiceless."
        subhead="I’m a Salesforce Certified Advanced Administrator based in Boston."
      />

      <Section labelledBy="story-heading">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <H2 id="story-heading">My story</H2>
            <p className="mt-6 text-xl text-gray-900 leading-relaxed text-pretty">
              I started Aiceless to support small business owners doing everything themselves—much like
              Salesforce and RevOps professionals, who are often treated as cost centers rather than revenue
              generators and get the short end of the stick when it comes to resources.
            </p>
          </div>
          <div className="lg:col-span-5">
            <h2 id="background-heading" className="text-xl font-bold text-gray-900 mb-6">
              My background
            </h2>
            <Checklist
              items={[
                'Salesforce Certified Advanced Administrator',
                '10+ years of hands-on CRM administration, architecture and development',
                '5+ years of search and recruitment experience',
                'Industries: software, life sciences, healthcare and consulting',
                'Tools I work with: Salesforce, FinancialForce/Certinia, NetSuite/Oracle, ZoomInfo, Lusha, Clay and LinkedIn',
              ]}
            />
          </div>
        </div>
      </Section>

      <Section tone="gray" labelledBy="does-heading">
        <H2 id="does-heading" className="mb-10">
          Two things, for two kinds of business
        </H2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="rounded-lg border border-gray-200 bg-white p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-gray-900">Aiceless Alerts</h3>
            <p className="mt-3 text-lg text-gray-600 text-pretty">
              Our app for small businesses. It posts closures, sales and updates to Facebook, Instagram and your
              website in one click.
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-gray-900">Salesforce services</h3>
            <p className="mt-3 text-lg text-gray-600 text-pretty">
              For growing teams. I work as a fractional Salesforce admin, starting at $1,000 per month, and I
              recruit Salesforce professionals on contingency, with no fee unless you hire.
            </p>
          </div>
        </div>
        <Placeholder note="PLACEHOLDER: one or two sentences from Kevin on why Aiceless does both, if he wants to say more than the line below" />
      </Section>

      <Section labelledBy="fits-heading">
        <div className="max-w-3xl">
          <H2 id="fits-heading">How the Salesforce work fits together</H2>
          <p className="mt-6 text-lg text-gray-600 text-pretty">
            The admin work and the recruiting make each other better. Because I’m in Salesforce orgs every week, I
            know what a good admin or developer looks like, and I screen candidates on real work. And when a
            client needs a full-time person, I can keep their org running while I find one.
            <Placeholder note="CONFIRM: every week" />
          </p>
          <p className="mt-4 text-xl font-semibold text-gray-900">
            I do the work myself. You won’t get handed off to a junior.
          </p>
        </div>
      </Section>

      <section aria-labelledby="final-cta" className="on-blue bg-aiceless-blue py-16 md:py-24">
        <Container>
          <h2 id="final-cta" className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Work with me
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="text-lg md:text-xl text-white/90">
                Need help with Salesforce, or hiring for a Salesforce role?
              </p>
              <div className="mt-6">
                <OnBlueButton href="/services/contact">Book a call</OnBlueButton>
              </div>
            </div>
            <div>
              <p className="text-lg md:text-xl text-white/90">Here for the app?</p>
              <div className="mt-6">
                <OnBlueButton href="/signup" outline>
                  Start free trial
                </OnBlueButton>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
