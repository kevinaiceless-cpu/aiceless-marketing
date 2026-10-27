import {
  ButtonLink,
  Checklist,
  Faq,
  FinalCta,
  H2,
  KevinBio,
  OnBlueButton,
  PageHero,
  Placeholder,
  Section,
  Steps,
  TextLink,
} from '@/components/ui'

export const metadata = {
  title: 'Fractional Salesforce Admin | Starting at $1,000 per month | Aiceless',
  description:
    'A Salesforce Certified Advanced Administrator who runs your org on a monthly plan. Users, reports, flows and data cleanup, starting at $1,000 per month. Get a free health check.',
}

const HEALTH_CHECK = '/services/contact?need=health-check'
const BOOK_ADMIN = '/services/contact?need=admin'

export default function SalesforceAdminPage() {
  return (
    <>
      <PageHero
        line1="Your Salesforce, looked after."
        line2="No full-time admin required."
        subhead="I handle the reports, flows, user access and data cleanup your team keeps putting off. Starting at $1,000 per month for 10 hours a week of dedicated administration."
        smallPrint="Salesforce Certified Advanced Administrator. Based in Boston."
      >
        <ButtonLink href={HEALTH_CHECK} shadow>
          Get a free health check
        </ButtonLink>
        <ButtonLink href={BOOK_ADMIN} variant="secondary">
          Book a call
        </ButtonLink>
      </PageHero>

      <Section labelledBy="familiar-heading">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <H2 id="familiar-heading">Sound familiar?</H2>
            <p className="mt-6 text-lg text-gray-600 text-pretty">
              If two or more of these are true, start with the free health check. I’ll show you what’s broken
              and what to fix first.
            </p>
            <p className="mt-6 text-lg">
              <TextLink href={HEALTH_CHECK}>Get a free health check</TextLink>
            </p>
          </div>
          <div className="lg:col-span-7">
            <Checklist
              items={[
                'Your data has duplicates, and nobody trusts the reports.',
                'Your sales reps spend their afternoons doing admin work.',
                'A flow broke, and nobody knows who built it.',
                'People stopped logging into Salesforce.',
                'Your admin left, and nobody knows how things were set up.',
                'There’s a backlog of requests and nobody owns it.',
              ]}
            />
          </div>
        </div>
      </Section>

      <Section tone="gray" labelledBy="included-heading">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <H2 id="included-heading" className="mb-8">
              What I handle
            </H2>
            <Checklist
              items={[
                <>
                  <strong className="font-semibold text-gray-900">Users and permissions:</strong> new users,
                  departures, profiles, permission sets and role hierarchy.
                </>,
                'Reports and dashboards your managers will use.',
                <>
                  <strong className="font-semibold text-gray-900">Flows and automation:</strong> building new
                  ones and fixing the ones that broke.
                </>,
                'Data cleanup and imports, including duplicate rules and validation rules.',
                'Releases and sandbox management, so changes get tested before they reach your users.',
                'Training for your team when something changes.',
              ]}
            />
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-lg border border-gray-200 bg-white p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-900">What’s not included</h3>
              {/* Copy edit: source sentence was garbled ("...from another CRM or don't fit"). Flagged for Writer. */}
              <p className="mt-3 text-lg text-gray-600 text-pretty">
                Large projects, like a new Salesforce implementation or a migration from another CRM, don’t fit
                in a monthly plan. If you need one, I’ll tell you up front and we’ll scope it separately.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section labelledBy="how-heading">
        <H2 id="how-heading" className="mb-10">
          How we start
        </H2>
        <Steps
          steps={[
            {
              title: 'Intro call.',
              body: 'You tell me what’s going on with your Salesforce and what’s getting in the way.',
            },
            {
              title: 'Free health check.',
              body: (
                <>
                  I review your org: data quality, automation, security and the backlog.
                  <Placeholder note="CONFIRM: what the health check covers" />
                </>
              ),
            },
            {
              title: 'A plan in priority order.',
              body: 'You get a short list of what to fix first, and why.',
            },
            {
              title: 'Monthly support.',
              body: (
                <>
                  I work through the list and take on new requests as they come in. You get a regular report on
                  what I did.
                  <Placeholder note="CONFIRM: report frequency, e.g. monthly" />
                </>
              ),
            },
          ]}
        />
      </Section>

      <Section tone="gray" labelledBy="pricing-heading" id="pricing">
        <div className="max-w-3xl">
          <H2 id="pricing-heading" className="tabular-nums">
            Starting at $1,000 per month
          </H2>
          <p className="mt-6 text-lg text-gray-600 text-pretty">
            The price depends on how much work your org needs. After the health check, I’ll recommend a plan and
            give you the monthly price before you commit to anything.
          </p>
          <Placeholder note="CONFIRM: this is how Kevin wants to quote" />
          <Placeholder note="PLACEHOLDER: What's included in a plan: hours or workload covered at the starting price, if Kevin wants to publish it" />
          <Placeholder note="PLACEHOLDER: Terms: month-to-month or minimum term" />
          <Placeholder note="PLACEHOLDER: Unused hours: roll over, expire, or not applicable" />
          <p className="mt-4 text-lg text-gray-600 text-pretty">
            If your workload grows past what a monthly plan makes sense for, I’ll tell you. I also recruit
            Salesforce admins, so I can find you a full-time person and keep your org running while I search.
          </p>
          <p className="mt-4 text-lg">
            <TextLink href="/services/salesforce-recruiting">See Salesforce recruiting</TextLink>
          </p>
          <div className="mt-8">
            <ButtonLink href={HEALTH_CHECK}>Get a free health check</ButtonLink>
          </div>
        </div>
      </Section>

      <Section labelledBy="proof-heading">
        <H2 id="proof-heading" className="sr-only">
          Credentials
        </H2>
        <p className="text-xl md:text-2xl font-semibold text-gray-900">Salesforce Certified Advanced Administrator.</p>
        <Placeholder note="PLACEHOLDER: certification badge image, if Kevin has rights to display it through Trailhead/Credential verification" />
        <Placeholder note="PLACEHOLDER: testimonial from a fractional admin client, with name, title and company" />
        <Placeholder note="PLACEHOLDER: testimonial from a second fractional admin client, with name, title and company" />
        <Placeholder note="PLACEHOLDER: 1-2 short case studies (problem, what Kevin did, result). Leave this block out at launch if there's nothing real to show yet." />
      </Section>

      <Section tone="gray" labelledBy="who-heading">
        <H2 id="who-heading" className="mb-6">
          Who does the work
        </H2>
        <KevinBio placeholder="PLACEHOLDER: headshot of Kevin">
          <p>
            I’m Kevin. I’m a Salesforce Certified Advanced Administrator based in Boston, with 10+ years of
            hands-on CRM administration, architecture and development.
          </p>
          <p>
            When you sign up, I’m your admin. Your requests come to me, and I’m the one who makes the changes in
            your org.
          </p>
          <p>
            Along with Salesforce, I work with FinancialForce/Certinia, NetSuite/Oracle, ZoomInfo, Lusha, Clay and
            LinkedIn, so I can help when your Salesforce connects to the rest of your stack.
          </p>
          <p>
            <TextLink href="/about">More about me</TextLink>
          </p>
        </KevinBio>
      </Section>

      <Section labelledBy="faq-heading">
        <H2 id="faq-heading" className="mb-8">
          Questions
        </H2>
        <Faq
          items={[
            {
              q: 'How does this compare to hiring a full-time admin?',
              a: (
                <p>
                  A full-time admin means a salary, benefits and a search before anyone starts. A fractional plan
                  starts at $1,000 per month, and you get an experienced admin without running a search first. If
                  you grow to the point where you need someone full-time, I can recruit that person for you.
                </p>
              ),
            },
            {
              q: 'What’s in the free health check?',
              a: (
                <p>
                  I review your org and send you a written list of the biggest problems I find and what I’d fix
                  first. It’s free, and there’s no obligation to sign up for a plan.
                  <Placeholder note="CONFIRM: health check FAQ answer" />
                </p>
              ),
            },
            {
              q: 'How do you handle access and security?',
              a: (
                <p>
                  I build and test changes in a sandbox before they go to production. You decide what access I
                  get, and you can remove it at any time.
                  <Placeholder note="CONFIRM: access and security FAQ answer" />
                </p>
              ),
            },
            {
              q: 'What access do you need from us?',
              a: (
                <p>
                  A Salesforce user with system administrator access, plus access to your sandboxes. If your org
                  connects to other systems, we’ll talk about whether I need access to those too.
                  <Placeholder note="CONFIRM: access needed FAQ answer" />
                </p>
              ),
            },
          ]}
        />
        <Placeholder note="PLACEHOLDER FAQ (hidden until answered): What are the contract terms? (month-to-month or minimum term, notice period, how billing works)" />
        <Placeholder note="PLACEHOLDER FAQ (hidden until answered): How fast do you respond to requests? (response time Kevin will commit to)" />
        <Placeholder note="PLACEHOLDER FAQ (hidden until answered): Do you do custom development? (should match What's not included)" />
      </Section>

      <FinalCta
        heading="Start with a free health check."
        body="I’ll look at your org and tell you what I’d fix first. It costs nothing, and you don’t have to sign up for anything after."
      >
        <OnBlueButton href={HEALTH_CHECK}>Get a free health check</OnBlueButton>
        <OnBlueButton href={BOOK_ADMIN} outline>
          Book a call
        </OnBlueButton>
      </FinalCta>
    </>
  )
}
