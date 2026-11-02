import Link from 'next/link'
import { LegalList, LegalPage, LegalSection, Mail, Notice } from '@/components/legal'
import { Placeholder } from '@/components/ui'

export const metadata = {
  title: 'Terms of Service | Aiceless Recruiting',
  description:
    'Terms for job seekers and employers who work with Aiceless, a Massachusetts recruiting and placement agency. Job seekers never pay a fee.',
}

const EFFECTIVE = 'November 2, 2026'
const EMAIL = 'Support@Aiceless.com'

const toc = [
  { id: 'who-we-are', label: 'Who we are' },
  { id: 'no-fees', label: 'No fees to job seekers' },
  { id: 'job-seekers', label: 'Our services for job seekers' },
  { id: 'consent', label: 'Your consent before we submit you' },
  { id: 'strikes', label: 'Strikes and lockouts' },
  { id: 'candidate-commitments', label: 'What we ask of job seekers' },
  { id: 'employers', label: 'Terms for employers' },
  { id: 'employer-obligations', label: 'Employer obligations' },
  { id: 'eeo', label: 'Equal opportunity' },
  { id: 'ethics', label: 'Non-solicitation and ethics' },
  { id: 'complaints', label: 'Questions and complaints' },
  { id: 'liability', label: 'Limits of liability' },
  { id: 'law', label: 'Governing law' },
  { id: 'changes', label: 'Changes to these terms' },
  { id: 'contact', label: 'Contact us' },
]

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      effective={EFFECTIVE}
      toc={toc}
      intro={
        <>
          <p>
            These terms apply to job seekers and employers who use aiceless.com or work with Aiceless on
            recruiting and placement. Part A covers job seekers. Part B covers employers.
          </p>
          <p>
            The Aiceless Alerts app has its own terms. See the{' '}
            <Link href="/alerts/terms" className="font-semibold text-aiceless-blue underline underline-offset-2">
              Alerts Terms of Service
            </Link>
            .
          </p>
        </>
      }
    >
      <LegalSection id="who-we-are" title="1. Who we are">
        <p>
          Aiceless is a recruiting and placement agency based in Boston, Massachusetts. We find candidates for
          full-time, permanent roles with employer clients. We work on a contingency basis: an employer pays us only
          when it hires someone we introduced. We don’t place temporary or contract workers.
        </p>
        <Placeholder note="CONFIRM: legal entity name (e.g. Aiceless LLC) and full street address. Use only the business name(s) registered with DLS." />
        <p>
          <span className="font-semibold text-gray-900">Aiceless</span>
          <br />
          Boston, Massachusetts
          <br />
          Email: <Mail to={EMAIL} />
        </p>
        <p>In these terms, “we,” “us” and “our” mean Aiceless. “You” means the job seeker or employer using our services.</p>
      </LegalSection>

      <h2 className="sr-only">Part A: Job seekers</h2>
      <p className="text-sm font-semibold uppercase tracking-wider text-aiceless-blue" aria-hidden="true">
        Part A: Job seekers
      </p>

      <LegalSection id="no-fees" title="2. No fees to job seekers">
        <Notice title="You will never be charged a fee.">
          <p>
            Aiceless never charges job seekers any fee, including fees to register, submit a résumé, be considered,
            or be placed. Our fees are paid solely by employer clients.
          </p>
          <p>
            Under Massachusetts law (M.G.L. c. 140, § 46O(f)), an employer may not deduct any part of our fee from
            your wages.
          </p>
        </Notice>
        <p>
          If anyone claiming to represent Aiceless asks you for money, don’t pay. Email us at <Mail to={EMAIL} />.
        </p>
      </LegalSection>

      <LegalSection id="job-seekers" title="3. Our services for job seekers">
        <p>When you send us your profile or résumé, here is what happens:</p>
        <LegalList
          items={[
            'We review your background and keep your profile on file so we can match you to roles that fit.',
            'When we have a role that may fit, we contact you to talk about it.',
            'If you want to be considered, and only then, we present you to that employer.',
            'If the employer wants to move forward, we help set up interviews and pass along feedback.',
          ]}
        />
        <p>Please keep in mind:</p>
        <LegalList
          items={[
            'Sending us your profile doesn’t guarantee an interview, an offer or a placement.',
            'Aiceless is not the employer. The employer makes all hiring decisions and sets the terms of any job offer.',
            'You’re free to work with other recruiters and to apply for jobs on your own.',
          ]}
        />
      </LegalSection>

      <LegalSection id="consent" title="4. Your consent before we submit you">
        <Notice>
          <p>
            We will not submit your résumé to an employer without telling you first and getting your OK.
          </p>
        </Notice>
        <p>
          Before we submit you, we’ll tell you the employer, or at least the role, so you can decide. If we ever
          want to present your profile to an employer that hasn’t given us an open job, we’ll tell you in advance and
          ask first. You can say no at any time.
        </p>
      </LegalSection>

      <LegalSection id="strikes" title="5. Strikes and lockouts">
        <p>
          If a role we discuss with you is at a workplace where there is a strike or lockout, we will tell you in
          writing before you decide whether to be considered.
        </p>
      </LegalSection>

      <LegalSection id="candidate-commitments" title="6. What we ask of job seekers">
        <LegalList
          items={[
            'Give us accurate, honest information about your experience, skills and certifications.',
            'Tell us if your situation changes, for example if you accept another job or no longer want to be considered.',
            'Reference checks and background verification happen only after we tell you, and only with your consent.',
            'You’re never obligated to accept any interview or offer.',
          ]}
        />
      </LegalSection>

      <h2 className="sr-only">Part B: Employers</h2>
      <p className="text-sm font-semibold uppercase tracking-wider text-aiceless-blue" aria-hidden="true">
        Part B: Employers
      </p>

      <LegalSection id="employers" title="7. Terms for employers">
        <p>We work with employer clients on full-time, permanent searches, on a contingency basis.</p>
        <LegalList
          items={[
            <>
              <span className="font-semibold text-gray-900">Fees.</span> Our fee, and when it’s due, are set out in
              a written agreement signed before we start a search. You pay nothing unless you hire a candidate we
              introduced.
            </>,
            <>
              <span className="font-semibold text-gray-900">Guarantee.</span> Any guarantee or replacement period is
              set out in the written agreement.
            </>,
            <>
              <span className="font-semibold text-gray-900">Introductions.</span> What counts as an introduction,
              and how long it applies, is defined in the written agreement.
            </>,
            <>
              <span className="font-semibold text-gray-900">The agreement controls.</span> If these terms and a
              signed client agreement conflict, the signed agreement controls.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection id="employer-obligations" title="8. Employer obligations">
        <p>When you work with us, you agree to:</p>
        <LegalList
          items={[
            'Give us only lawful, non-discriminatory job requirements.',
            'Provide the pay range for each role when Massachusetts pay-transparency law applies to you (M.G.L. c. 149, § 105F, for employers with 25 or more Massachusetts employees). We include pay ranges in postings.',
            'Never deduct any part of our fee from a placed employee’s wages (M.G.L. c. 140, § 46O(f)).',
            'Not ask us to obtain a candidate’s salary history (M.G.L. c. 149, § 105A) or criminal history at the initial application stage (M.G.L. c. 151B, § 4(9½)).',
            'Tell us in writing if a role is at a workplace affected by a strike or lockout.',
            'Keep candidate information we share with you confidential and use it only to consider the candidate for the role.',
          ]}
        />
      </LegalSection>

      <h2 className="sr-only">Part C: Everyone</h2>
      <p className="text-sm font-semibold uppercase tracking-wider text-aiceless-blue" aria-hidden="true">
        Part C: Everyone
      </p>

      <LegalSection id="eeo" title="9. Equal opportunity">
        <p>
          Aiceless refers candidates without regard to race, color, religion, creed, sex, gender identity, sexual
          orientation, national origin, ancestry, age, disability, genetic information, pregnancy, veteran or
          military status, or any other characteristic protected by law. We will not accept job orders that
          discriminate.
        </p>
      </LegalSection>

      <LegalSection id="ethics" title="10. Non-solicitation and ethics">
        <p>
          We do not encourage people we have placed to leave their jobs so we can earn a new fee, and we never ask
          employers to create vacancies by firing employees.
        </p>
        <p>We are honest in what we tell candidates and employers about roles, people and terms.</p>
      </LegalSection>

      <LegalSection id="complaints" title="11. Questions and complaints">
        <p>
          If you have a concern about how we’ve handled your search or your information, email us at{' '}
          <Mail to={EMAIL} /> and we’ll respond.
        </p>
        <Notice>
          <p>
            Questions or complaints about placement agencies may be directed to the Massachusetts Department of
            Labor Standards, (617) 626-6969,{' '}
            <a
              href="https://www.mass.gov/dls"
              className="font-semibold text-aiceless-blue underline underline-offset-2"
              rel="noopener noreferrer"
            >
              mass.gov/dls
            </a>
            .
          </p>
        </Notice>
      </LegalSection>

      <LegalSection id="liability" title="12. Limits of liability">
        <p>
          We work hard to match the right people with the right roles, but we can’t guarantee the outcome of any
          search, interview or hire. Employers are responsible for their own hiring and employment decisions, and
          candidates are responsible for the accuracy of the information they give us.
        </p>
        <p>
          To the extent the law allows, Aiceless is not liable for indirect, incidental or consequential damages
          arising from the use of this website or our services. For employer clients, any further limits are set out
          in the signed client agreement.
        </p>
        <p>
          Nothing in these terms limits or waives any right you have under Massachusetts or federal law that cannot
          be waived, including rights under M.G.L. c. 93A and c. 149.
        </p>
      </LegalSection>

      <LegalSection id="law" title="13. Governing law">
        <p>
          These terms are governed by the laws of the Commonwealth of Massachusetts, without regard to its
          conflict-of-law rules.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="14. Changes to these terms">
        <p>
          We may update these terms. When we do, we’ll change the effective date at the top of this page. If a
          change is significant, we’ll make reasonable efforts to let active candidates and clients know by email.
          Changes don’t apply retroactively to a signed client agreement.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="15. Contact us">
        <p>
          Email: <Mail to={EMAIL} />
          <br />
          Aiceless, Boston, Massachusetts
        </p>
        <p>
          See our{' '}
          <Link href="/privacy" className="font-semibold text-aiceless-blue underline underline-offset-2">
            Privacy Policy
          </Link>{' '}
          for how we handle your information.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
