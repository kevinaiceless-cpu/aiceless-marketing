import CandidateForm from '@/components/forms/CandidateForm'
import { ButtonLink, Checklist, H2, PageHero, Placeholder, Section, TextLink } from '@/components/ui'

export const metadata = {
  title: 'Salesforce Jobs | Submit your profile | Aiceless',
  description:
    'Salesforce admins, developers, architects, consultants and CRM managers: send your profile to a recruiter who does Salesforce work. Free and confidential.',
}

export default function CandidatesPage() {
  return (
    <>
      <PageHero
        line1="Your next Salesforce role."
        line2="Found by someone who does the work."
        subhead="I place Salesforce admins, developers, architects, consultants and CRM managers. It’s free for candidates."
      >
        <ButtonLink href="#profile-form" shadow>
          Submit your profile
        </ButtonLink>
      </PageHero>

      <Section labelledBy="roles-heading">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <H2 id="roles-heading" className="mb-8">
              Roles I recruit for
            </H2>
            <Placeholder note="CONFIRM: same role list as the employer page" />
            <Checklist
              items={[
                'Salesforce Admin',
                'Salesforce Developer',
                'Salesforce Architect',
                'Salesforce Consultant',
                'CRM Manager',
              ]}
            />
          </div>
          <div>
            <H2 id="expect-heading" className="mb-8">
              What to expect
            </H2>
            <dl className="space-y-6 text-lg">
              <div>
                <dt className="font-bold text-gray-900">It’s free.</dt>
                <dd className="mt-1 text-gray-600">You never pay me. The employer pays only if they hire you.</dd>
              </div>
              <div>
                <dt className="font-bold text-gray-900">It’s confidential.</dt>
                <dd className="mt-1 text-gray-600">
                  I won’t send your resume to an employer without asking you first.
                  <Placeholder note="CONFIRM: confidentiality line" />
                </dd>
              </div>
              <div>
                <dt className="font-bold text-gray-900">You get straight feedback.</dt>
                <dd className="mt-1 text-gray-600">
                  I’m a Salesforce Certified Advanced Administrator, so we can talk about your Salesforce work in
                  detail. If an interview doesn’t go your way, I’ll tell you what I heard and why.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      <Section tone="gray" labelledBy="open-roles-heading">
        <div className="max-w-3xl">
          {/* Developer note: replace this block with live listings once real roles exist. Don't show an empty list. */}
          <H2 id="open-roles-heading">Open roles</H2>
          <p className="mt-6 text-lg text-gray-600">
            No open roles are listed right now. Send your profile and I’ll reach out when a role fits.
          </p>
        </div>
      </Section>

      <Section id="profile-form" labelledBy="form-heading" className="scroll-mt-20">
        <div className="max-w-2xl">
          <H2 id="form-heading" className="mb-8">
            Send me your profile
          </H2>
          <Placeholder note="CONFIRM: resume required or optional; privacy policy updated to cover resumes and data storage location decided before launch" />
          <CandidateForm />
        </div>
      </Section>

      <Section tone="gray">
        <p className="text-lg text-gray-600">
          Hiring for a Salesforce role? <TextLink href="/services/salesforce-recruiting">Work with me on a search</TextLink>
        </p>
      </Section>
    </>
  )
}
