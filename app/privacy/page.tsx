import Link from 'next/link'
import { LegalH3, LegalList, LegalPage, LegalSection, Mail, Notice } from '@/components/legal'
import { Placeholder } from '@/components/ui'

export const metadata = {
  title: 'Privacy Policy | Aiceless Recruiting',
  description:
    'How Aiceless, a Massachusetts recruiting and placement agency, collects, uses, shares, keeps and protects information about job seekers, employer contacts and site visitors.',
}

const EFFECTIVE = 'November 2, 2026'
const EMAIL = 'Support@Aiceless.com'

const toc = [
  { id: 'scope', label: 'Who this covers' },
  { id: 'collect', label: 'Information we collect' },
  { id: 'not-collect', label: 'Information we don’t collect' },
  { id: 'use', label: 'How we use information' },
  { id: 'share', label: 'Who we share it with' },
  { id: 'retention', label: 'How long we keep it' },
  { id: 'rights', label: 'Your choices and rights' },
  { id: 'security', label: 'Security' },
  { id: 'breach', label: 'Breach notification' },
  { id: 'automated', label: 'Automated tools and AI' },
  { id: 'communications', label: 'Emails from us' },
  { id: 'cookies', label: 'Cookies and analytics' },
  { id: 'children', label: 'Children' },
  { id: 'changes', label: 'Changes to this policy' },
  { id: 'contact', label: 'Contact us' },
]

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      effective={EFFECTIVE}
      toc={toc}
      intro={
        <>
          <p>
            Aiceless is a recruiting and placement agency based in Boston, Massachusetts. This policy explains what
            information we collect, how we use it, who we share it with, and the choices you have.
          </p>
          <p>
            The Aiceless Alerts app has its own policy. See the{' '}
            <Link href="/alerts/privacy" className="font-semibold text-aiceless-blue underline underline-offset-2">
              Alerts Privacy Policy
            </Link>
            .
          </p>
        </>
      }
    >
      <LegalSection id="scope" title="1. Who this covers">
        <LegalList
          items={[
            <>
              <span className="font-semibold text-gray-900">Job seekers</span> who send us a profile or résumé, or
              whom we contact about a role.
            </>,
            <>
              <span className="font-semibold text-gray-900">Employer contacts</span>: people at companies that hire
              through us or talk with us about a search.
            </>,
            <>
              <span className="font-semibold text-gray-900">Site visitors</span> to aiceless.com.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection id="collect" title="2. Information we collect">
        <LegalH3>From job seekers</LegalH3>
        <LegalList
          items={[
            'Your résumé or CV',
            'Contact details, such as name, email, phone number and city or region',
            'Work history, skills and certifications (for example, Salesforce certifications)',
            'The roles, location and work style you’re looking for',
            'Desired compensation (what you want to earn, not what you earn now)',
            'Work authorization: only whether you’re authorized to work in the country of the role and whether you need sponsorship',
            'Your LinkedIn profile URL, if you share it',
            'Notes from our conversations, and emails or messages we exchange',
            'The date you submitted your information',
          ]}
        />
        <LegalH3>From employer contacts</LegalH3>
        <LegalList
          items={[
            'Name, job title, company, work email and phone number',
            'Details of the roles you’re hiring for, and our communications and agreements',
          ]}
        />
        <LegalH3>From site visitors</LegalH3>
        <LegalList
          items={[
            'Basic technical data our hosting provider records when you load a page, such as IP address, browser type and the pages requested',
            'Anything you choose to send us through a form or by email',
          ]}
        />
      </LegalSection>

      <LegalSection id="not-collect" title="3. Information we don’t collect">
        <p>We don’t ask for, and you shouldn’t send us:</p>
        <LegalList
          items={[
            'Salary history (your current or past pay)',
            'Criminal history',
            'Social Security numbers',
            'Driver’s license, passport or other government ID numbers',
            'Bank account or payment card details',
          ]}
        />
        <p>
          If any of this appears in something you send us, we won’t use it to evaluate you and will remove it where we
          can.
        </p>
      </LegalSection>

      <LegalSection id="use" title="4. How we use information">
        <LegalList
          items={[
            'To match job seekers to roles that fit',
            'To contact job seekers about roles and next steps',
            'To submit job seekers to employers, only with the job seeker’s prior consent for each employer or role',
            'To work with employer clients on their searches',
            'To keep the records Massachusetts law requires of placement agencies',
            'To comply with the law and respond to lawful requests',
            'To keep the website working and secure',
          ]}
        />
        <p>We don’t sell personal information, and we don’t share it for advertising.</p>
      </LegalSection>

      <LegalSection id="share" title="5. Who we share it with">
        <LegalList
          items={[
            <>
              <span className="font-semibold text-gray-900">Employer clients</span>, only after you’ve agreed to be
              submitted to that employer or role.
            </>,
            <>
              <span className="font-semibold text-gray-900">Service providers</span> that help us run the business,
              such as website hosting, email and secure data storage. They may use the information only to provide
              services to us.
            </>,
            <>
              <span className="font-semibold text-gray-900">Regulators.</span> We may provide records to the
              Massachusetts Department of Labor Standards or other authorities when lawfully requested; DLS has
              authority to inspect agency records.
            </>,
            <>
              <span className="font-semibold text-gray-900">Legal process.</span> When required by law, court order
              or subpoena, or to protect our legal rights.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection id="retention" title="6. How long we keep it">
        <Notice>
          <p>
            Massachusetts rules require agencies to keep candidate files for at least three years from last activity.
            We keep records for this period, then securely delete them.
          </p>
        </Notice>
        <p>
          We may keep a record longer if it’s needed for a legal claim or proceeding. Employer contact records are
          kept for as long as we have a business relationship, and for the same three-year period after that.
        </p>
      </LegalSection>

      <LegalSection id="rights" title="7. Your choices and rights">
        <p>You can ask us to:</p>
        <LegalList
          items={[
            'Show you the information we hold about you',
            'Correct information that’s wrong or out of date',
            'Withdraw you from consideration for one role, or for all roles',
            'Stop contacting you',
            'Delete your information',
          ]}
        />
        <p>
          Deletion is subject to legal retention requirements. If the law requires us to keep your record, we’ll stop
          using it for recruiting, restrict access to it, and delete it when the retention period ends.
        </p>
        <p>
          To make a request, email <Mail to={EMAIL} />. We may need to confirm your identity first.
        </p>
      </LegalSection>

      <LegalSection id="security" title="8. Security">
        <p>We use reasonable safeguards to protect your information, including:</p>
        <LegalList
          items={[
            'Access controls, so only people who need the information can see it',
            'Encryption of data in transit, and at rest where our providers support it',
            'Limiting staff access to what’s needed for the work',
            'Choosing service providers that commit to protecting the data they handle for us',
            'Secure disposal of records we no longer need to keep',
          ]}
        />
        <p>No system is perfectly secure, and we can’t guarantee that information will never be accessed without permission.</p>
      </LegalSection>

      <LegalSection id="breach" title="9. Breach notification">
        <p>
          If a security breach affects your personal information, we will notify you and the appropriate authorities
          as required by law, including Massachusetts General Laws chapter 93H.
        </p>
      </LegalSection>

      <LegalSection id="automated" title="10. Automated tools and AI">
        <p>
          We may use automated tools to assist in matching candidates to roles. A human reviews all candidate
          submissions before they are sent to employers. You may request information about automated processing or
          ask for human review.
        </p>
        <p>
          Automated tools never make the decision to submit you to an employer. To ask about automated processing,
          email <Mail to={EMAIL} />.
        </p>
      </LegalSection>

      <LegalSection id="communications" title="11. Emails from us">
        <p>
          When you send us your profile, you agree that we can email you about roles and your search. Employer contacts
          may receive emails about their searches and our services.
        </p>
        <p>
          You can opt out at any time by replying to say so, using the unsubscribe link in a marketing email, or
          emailing <Mail to={EMAIL} />. We’ll still send messages needed to complete something you asked for.
        </p>
      </LegalSection>

      <LegalSection id="cookies" title="12. Cookies and analytics">
        <p>
          The recruiting pages of aiceless.com don’t use advertising or tracking cookies, and we don’t run third-party
          analytics on them. Our hosting provider keeps standard server logs to run and secure the site. If we add
          analytics, we’ll update this section first.
        </p>
      </LegalSection>

      <LegalSection id="children" title="13. Children">
        <p>
          Our services are for people 18 and older. We don’t knowingly collect information from anyone under 18. If you
          think we have, email us and we’ll delete it.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="14. Changes to this policy">
        <p>
          When we update this policy, we’ll change the effective date at the top of this page. If a change is
          significant, we’ll post a notice on the site and make reasonable efforts to email people whose information we
          hold.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="15. Contact us">
        <Placeholder note="CONFIRM: privacy-request email address and full street address" />
        <p>
          For privacy questions and requests, email <Mail to={EMAIL} />.
          <br />
          Aiceless, Boston, Massachusetts
        </p>
        <p>
          See our{' '}
          <Link href="/terms" className="font-semibold text-aiceless-blue underline underline-offset-2">
            Terms of Service
          </Link>{' '}
          for the terms that apply to job seekers and employers.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
