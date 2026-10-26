export const metadata = {
  title: 'Services - Aiceless Search & Recruitment',
  description:
    'Contingency search and recruitment for Software, Life Sciences, Healthcare and Consulting teams, led by a Salesforce Certified Advanced Administrator. You pay nothing unless the hire is still in the role after 90 days.',
}

const CONTACT_HREF =
  'mailto:contactus@Aiceless.com?subject=Aiceless%20Services%20Inquiry'

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-aiceless-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

const stats = [
  { value: '2 days', label: 'Business days to present a first candidate*' },
  { value: '3+ yrs', label: 'Average tenure of full-time placements' },
  { value: '85%', label: 'Of extended offers accepted' },
  { value: '$0', label: 'Unless your hire is still in the role after 90 days' },
]

const steps = [
  {
    title: 'Get set up',
    body: 'We sign an agreement and Aiceless becomes an approved vendor. No retainer, no upfront cost.',
  },
  {
    title: 'Meet your first candidate',
    body: 'Within two business days of being approved, you see the first candidate for the role.',
  },
  {
    title: 'Interview and hire',
    body: 'You run your process. I handle sourcing, screening and keeping candidates engaged through the offer.',
  },
  {
    title: 'Pay at day 90, only if they stay',
    body: 'The fee is invoiced at day 90, and only if your new hire is still employed.',
  },
]

const industries = ['Software', 'Life Sciences', 'Healthcare', 'Consulting']

const tools = [
  'Salesforce',
  'ZoomInfo',
  'Lusha',
  'FinancialForce / Certinia',
  'NetSuite / Oracle',
  'LinkedIn',
  'Clay',
]

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-white to-gray-50 pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-aiceless-teal mb-4">
              Aiceless Services
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Search &amp; Recruitment.
              <span className="block text-aiceless-blue mt-2">Built on Real CRM Experience.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contingency recruiting for Software, Life Sciences, Healthcare and Consulting teams &mdash;
              led by a Salesforce Certified Advanced Administrator with 10+ years of hands-on CRM work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={CONTACT_HREF}
                className="px-8 py-4 bg-aiceless-blue text-white rounded-lg hover:bg-opacity-90 transition font-semibold text-lg shadow-lg"
              >
                Start a Search
              </a>
              <a
                href="#how-it-works"
                className="px-8 py-4 bg-white text-aiceless-blue border-2 border-aiceless-blue rounded-lg hover:bg-gray-50 transition font-semibold text-lg"
              >
                How It Works
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Contingency only &bull; Pay nothing unless the hire is still in the role after 90 days
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm text-center">
                <p className="text-4xl font-bold text-aiceless-blue mb-2">{s.value}</p>
                <p className="text-sm text-gray-600 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center">
            *Once Aiceless is an approved vendor with an agreement in place.
          </p>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Aiceless offers</h2>
            <p className="text-xl text-gray-600">Focused search, from someone who knows the systems your teams run on.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="w-12 h-12 bg-aiceless-blue bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-aiceless-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Full-Time Search</h3>
              <p className="text-gray-600">
                Contingency recruiting for full-time roles. 5+ years of search experience, a first candidate in
                two business days, and placements that stay 3+ years on average.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="w-12 h-12 bg-aiceless-teal bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-aiceless-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">CRM &amp; Salesforce Talent</h3>
              <p className="text-gray-600">
                Hiring for CRM administration, architecture or development? You&apos;ll be working with a
                Salesforce Certified Advanced Administrator who has spent 10+ years doing that work hands-on.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="w-12 h-12 bg-aiceless-blue bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-aiceless-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Focus</h3>
              <p className="text-gray-600">
                Software, Life Sciences, Healthcare and Consulting &mdash; the industries I know and recruit for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How it works</h2>
          <ol className="space-y-6">
            {steps.map((step, i) => (
              <li key={step.title} className="flex items-start gap-5 bg-gray-50 rounded-2xl p-6">
                <span className="w-10 h-10 rounded-full bg-aiceless-blue text-white font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12 bg-aiceless-blue bg-opacity-5 border-l-4 border-aiceless-blue p-8 rounded-r-lg">
            <p className="text-lg text-gray-900 font-medium">
              Contingency only. You pay nothing unless your hire is still in the role after 90 days.
            </p>
          </div>
        </div>
      </section>

      {/* Industries & tools */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Industries &amp; tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Industries</h3>
              <ul className="space-y-3">
                {industries.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Tools I work in</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-aiceless-teal bg-opacity-10 text-aiceless-teal"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who you'll work with */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who you&apos;ll work with</h2>
          <div className="bg-gray-50 rounded-2xl p-8 space-y-4">
            <div className="flex items-start gap-3">
              <CheckIcon />
              <p className="text-gray-700"><strong>Certification:</strong> Salesforce Certified Advanced Administrator</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckIcon />
              <p className="text-gray-700"><strong>CRM:</strong> 10+ years of hands-on CRM administration, architecture and development</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckIcon />
              <p className="text-gray-700"><strong>Recruiting:</strong> 5+ years of search and recruitment experience</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckIcon />
              <p className="text-gray-700"><strong>Location:</strong> Based in Boston</p>
            </div>
            <p className="text-sm text-gray-500 pt-2 font-medium">&mdash; Kevin, Founder</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Have a role to fill?</h2>
          <p className="text-gray-500 mb-6">
            Tell me about it. I read every email &mdash;{' '}
            <a href={CONTACT_HREF} className="text-aiceless-blue hover:underline font-medium">
              contactus@Aiceless.com
            </a>
          </p>
          <a
            href={CONTACT_HREF}
            className="inline-block px-8 py-4 bg-aiceless-blue text-white rounded-lg hover:bg-opacity-90 transition font-semibold shadow-lg"
          >
            Start a Search
          </a>
        </div>
      </section>
    </div>
  )
}
