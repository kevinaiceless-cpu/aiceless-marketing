import { ButtonLink, FinalCta, H2, KevinBio, OnBlueButton, PageHero, Section, TextLink } from '@/components/ui'

export const metadata = {
  title: 'Salesforce services | Fractional admin and Salesforce recruiting | Aiceless',
  description:
    'A fractional Salesforce admin starting at $1,000 per month, or Salesforce recruiting with no fee unless you hire. From a Boston-based Salesforce Certified Advanced Administrator.',
}

function ServiceCard({
  id,
  title,
  pain,
  offer,
  terms,
  children,
}: {
  id: string
  title: string
  pain: string
  offer: string
  terms: string
  children: React.ReactNode
}) {
  return (
    <article aria-labelledby={id} className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
      <h3 id={id} className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
        {title}
      </h3>
      <p className="mt-4 text-lg font-semibold text-gray-900">{pain}</p>
      <p className="mt-2 text-lg text-gray-600 text-pretty">{offer}</p>
      <p className="mt-6 inline-flex self-start rounded-lg bg-gray-50 px-4 py-2 font-semibold text-aiceless-blue tabular-nums">
        {terms}
      </p>
      <div className="mt-auto pt-8 flex flex-col sm:flex-row sm:items-center gap-4">{children}</div>
    </article>
  )
}

export default function ServicesHubPage() {
  return (
    <>
      <PageHero
        line1="Salesforce help for growing teams."
        line2="Part-time admin or full-time hire."
        subhead="Some teams need an admin for a few hours a week. Others need to hire one. I do both."
      >
        <ButtonLink href="/services/contact" shadow>
          Book a call
        </ButtonLink>
      </PageHero>

      <Section labelledBy="services-heading">
        <H2 id="services-heading" className="sr-only">
          Two services
        </H2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <ServiceCard
            id="card-admin"
            title="Fractional Salesforce admin"
            pain="No admin, or an admin with more work than hours?"
            offer="I run your Salesforce on a monthly plan: users, reports, flows and data cleanup."
            terms="Starting at $1,000 per month."
          >
            <ButtonLink href="/services/salesforce-admin" size="md">
              See fractional admin
            </ButtonLink>
            <TextLink href="/services/contact?need=health-check">Get a free health check</TextLink>
          </ServiceCard>
          <ServiceCard
            id="card-recruiting"
            title="Salesforce recruiting"
            pain="Hiring a Salesforce admin, developer or architect?"
            offer="I find and screen Salesforce candidates for your team, and I screen them as someone who does the work."
            terms="No fee unless you hire."
          >
            <ButtonLink href="/services/salesforce-recruiting" size="md">
              See Salesforce recruiting
            </ButtonLink>
          </ServiceCard>
        </div>
      </Section>

      <Section tone="gray" labelledBy="which-heading">
        <div className="max-w-3xl">
          <H2 id="which-heading">Not sure which?</H2>
          <p className="mt-6 text-xl text-gray-900 text-pretty">
            Fractional covers the work now. Recruiting finds your permanent person.
          </p>
          <p className="mt-4 text-lg text-gray-600 text-pretty">
            You can use both at once. I’ll keep your org running while I search for your hire, so your backlog
            doesn’t pile up while the seat is empty.
          </p>
        </div>
      </Section>

      <Section labelledBy="about-heading">
        <H2 id="about-heading" className="mb-6">
          About me
        </H2>
        <KevinBio placeholder="PLACEHOLDER: headshot of Kevin">
          <p>
            I’m Kevin, a Salesforce Certified Advanced Administrator based in Boston. I have 10+ years of
            hands-on CRM administration, architecture and development, and 5+ years of search and recruitment
            experience. When you work with Aiceless, you work with me.
          </p>
          <p>
            <TextLink href="/about">More about me</TextLink>
          </p>
        </KevinBio>
      </Section>

      <FinalCta
        heading="Tell me what you need."
        body="Book a call and tell me what’s going on in your org, or what role you’re trying to fill. I’ll tell you which option fits, or if neither does."
      >
        <OnBlueButton href="/services/contact">Book a call</OnBlueButton>
      </FinalCta>
    </>
  )
}
