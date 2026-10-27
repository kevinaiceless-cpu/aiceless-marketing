import Link from 'next/link'
import {
  ButtonLink,
  Faq,
  FinalCta,
  H2,
  OnBlueButton,
  PageHero,
  Placeholder,
  Section,
  Steps,
  TextLink,
} from '@/components/ui'

export const metadata = {
  title: 'Salesforce Recruiting | No fee unless you hire | Aiceless',
  description:
    'Salesforce admins, developers, architects, consultants and CRM managers, screened by a Salesforce Certified Advanced Administrator. Contingency only. No fee unless you hire.',
}

const BOOK_HIRE = '/services/contact?need=hire'
const CONTINGENCY = 'Contingency only. You pay nothing unless the hire is still in the role after 90 days.'

const roles = [
  {
    title: 'Salesforce Admin',
    desc: 'Runs the org day to day: users, security, reports and flows.',
    screen: 'how they’d fix a broken flow, set up permissions for a new team and clean up bad data.',
  },
  {
    title: 'Salesforce Developer',
    desc: 'Builds what configuration can’t: Apex, Lightning Web Components and integrations.',
    screen: 'clean, tested code and an understanding of governor limits.',
  },
  {
    title: 'Salesforce Architect',
    desc: 'Designs the data model, integrations and long-term shape of the org.',
    screen: 'the trade-offs behind their past design decisions.',
  },
  {
    title: 'Salesforce Consultant',
    desc: 'Turns business processes into Salesforce configuration, for clients or internal teams.',
    screen: 'how they run discovery and how they explain a design to non-technical people.',
  },
  {
    title: 'CRM Manager',
    desc: 'Owns Salesforce as a business system: the roadmap, adoption and vendors.',
    screen: 'how they set priorities and report results to leadership.',
  },
]

export default function SalesforceRecruitingPage() {
  return (
    <>
      <PageHero
        line1="Salesforce hires, screened by a Salesforce admin."
        line2="No fee unless you hire."
        subhead="I recruit Salesforce admins, developers, architects, consultants and CRM managers. I do hands-on Salesforce work myself, so I can tell who knows the platform and who just has the keywords."
      >
        <ButtonLink href={BOOK_HIRE} shadow>
          Book a call
        </ButtonLink>
      </PageHero>

      <Section labelledBy="roles-heading">
        <H2 id="roles-heading" className="mb-10">
          Roles I place
        </H2>
        <Placeholder note="CONFIRM: these five roles, and the screening notes on each card" />
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((r) => (
            <li key={r.title} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">{r.title}</h3>
              <p className="mt-2 text-gray-600 text-lg text-pretty">{r.desc}</p>
              <p className="mt-4 text-gray-600 text-pretty">
                <strong className="font-semibold text-gray-900">I screen for:</strong> {r.screen}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="gray" labelledBy="contingency-heading">
        <div className="max-w-3xl">
          <H2 id="contingency-heading">No fee unless you hire</H2>
          <p className="mt-6 text-xl font-semibold text-gray-900 text-pretty">{CONTINGENCY}</p>
          <p className="mt-4 text-lg text-gray-600 text-pretty">
            There’s no retainer and no upfront cost. The fee depends on the role, and I’ll walk you through it on
            our call.
          </p>
          <div className="mt-8">
            <ButtonLink href={BOOK_HIRE}>Book a call</ButtonLink>
          </div>
        </div>
      </Section>

      <Section labelledBy="process-heading">
        <H2 id="process-heading" className="mb-10">
          How a search works
        </H2>
        <Steps
          steps={[
            {
              title: 'Intake call.',
              body: 'We go over the role, the team, your Salesforce setup and what the person will do in their first six months.',
            },
            { title: 'Sourcing.', body: 'I look for people who have done this exact job before.' },
            {
              title: 'Technical screening.',
              body: 'I interview every candidate about real Salesforce work before you see them.',
            },
            { title: 'Shortlist.', body: 'You get a short list of screened candidates, with my notes on each.' },
            {
              title: 'Interviews and offer.',
              body: 'I set up interviews, collect feedback from both sides and help you close the offer.',
            },
            {
              title: 'Check-ins after the hire.',
              body: 'I stay in touch with you and your new hire after they start.',
            },
          ]}
        />
        <p className="mt-10 max-w-3xl text-lg text-gray-900 font-medium text-pretty">
          Once Aiceless is an approved vendor with an agreement in place, I present a first candidate within two
          business days.
        </p>
      </Section>

      <Section tone="gray" labelledBy="results-heading">
        <H2 id="results-heading" className="mb-10">
          Results
        </H2>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
          <div className="rounded-lg bg-white border border-gray-200 p-6 sm:p-8">
            <dt className="text-lg text-gray-600">Full-time placements stay in the role for</dt>
            <dd className="mt-2 text-4xl font-bold text-aiceless-blue tabular-nums">
              3+ years <span className="text-lg font-normal text-gray-600">on average</span>
            </dd>
          </div>
          <div className="rounded-lg bg-white border border-gray-200 p-6 sm:p-8">
            <dt className="text-lg text-gray-600">Offers extended to candidates I source that are accepted</dt>
            <dd className="mt-2 text-4xl font-bold text-aiceless-blue tabular-nums">85%</dd>
          </div>
        </dl>
        <Placeholder note="PLACEHOLDER: testimonial from a hiring manager, with name, title and company" />
        <Placeholder note="PLACEHOLDER: recent placements by role and company type, e.g. Salesforce Admin, healthcare company. Leave out at launch if Kevin can't cite any yet." />
      </Section>

      <Section labelledBy="why-heading">
        <div className="max-w-3xl">
          <H2 id="why-heading">Your recruiter does Salesforce work</H2>
          <p className="mt-6 text-lg text-gray-600 text-pretty">
            I’m a Salesforce Certified Advanced Administrator with 10+ years of hands-on CRM administration,
            architecture and development, and I still do admin work for clients every week. When I interview a
            candidate, I ask the questions you’d ask.
            <Placeholder note="CONFIRM: every week" />
          </p>
          <p className="mt-4 text-lg text-gray-600 text-pretty">
            I also have 5+ years of search and recruitment experience, mostly in software, life sciences,
            healthcare and consulting.
            <Placeholder note="CONFIRM: mostly, and that these industries describe Kevin's recruiting work" />
          </p>
          <p className="mt-6 text-lg">
            <TextLink href="/about">More about me</TextLink>
          </p>
        </div>
      </Section>

      <Section tone="gray" labelledBy="faq-heading">
        <H2 id="faq-heading" className="mb-8">
          Questions
        </H2>
        <Faq
          items={[
            {
              q: 'What’s your fee?',
              a: <p>No fee unless you hire. The fee depends on the role, and we’ll go over it on our call.</p>,
            },
            {
              q: 'What if the hire doesn’t work out?',
              a: (
                <p>
                  You pay nothing unless the hire is still in the role after 90 days. We’ll cover the rest of the
                  terms on our call.
                </p>
              ),
            },
            {
              q: 'Can you cover the work while we hire?',
              a: (
                <>
                  <p>
                    Yes. I’m also a fractional Salesforce admin, starting at $1,000 per month. I can keep your org
                    running while I find your permanent person.
                  </p>
                  <p>
                    <TextLink href="/services/salesforce-admin">See fractional admin</TextLink>
                  </p>
                </>
              ),
            },
          ]}
        />
        <Placeholder note="PLACEHOLDER FAQ (hidden until answered): Do you work on an exclusive basis?" />
        <Placeholder note="PLACEHOLDER FAQ (hidden until answered): Do you recruit for remote roles? (remote, hybrid and on-site, and any location limits)" />
        <Placeholder note="PLACEHOLDER FAQ (hidden until answered): Do you place contractors? (answer missing from copy)" />
      </Section>

      <FinalCta
        heading="Hiring for a Salesforce role?"
        body={`Book a call and tell me about the role. ${CONTINGENCY}`}
        after={
          <p>
            Looking for a Salesforce job?{' '}
            <Link
              href="/services/salesforce-recruiting/candidates"
              className="font-semibold text-white underline underline-offset-4 decoration-2 hover:decoration-white/60"
            >
              Submit your profile
            </Link>
          </p>
        }
      >
        <OnBlueButton href={BOOK_HIRE}>Book a call</OnBlueButton>
      </FinalCta>
    </>
  )
}
