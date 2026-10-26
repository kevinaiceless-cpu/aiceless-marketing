import Link from 'next/link'

export const metadata = {
  title: 'About - Aiceless',
  description:
    'Aiceless is a Boston company offering contingency recruiting for Software, Life Sciences, Healthcare and Consulting teams, plus an app that helps small businesses post updates in one step.',
}

const details = [
  { label: 'Based in', value: 'Boston' },
  { label: 'Industries', value: 'Software, Life Sciences, Healthcare, Consulting' },
  { label: 'Certification', value: 'Salesforce Certified Advanced Administrator' },
  {
    label: 'Experience',
    value: '10+ years in CRM administration, architecture and development; 5+ years in search and recruitment',
  },
  {
    label: 'Track record',
    value: 'Full-time placements stay 3+ years on average; 85% of extended offers accepted',
  },
  {
    label: 'Tools',
    value: 'Salesforce, ZoomInfo, Lusha, FinancialForce/Certinia, NetSuite/Oracle, LinkedIn, Clay',
  },
]

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Good hires.
            <span className="block text-aiceless-blue mt-2">Simple tools.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Aiceless is my Boston company: contingency recruiting for Software, Life Sciences, Healthcare and
            Consulting teams, plus an app that helps small businesses post updates in one step.
          </p>
        </div>

        {/* Story */}
        <div className="mb-16">
          <div className="bg-aiceless-blue bg-opacity-5 border-l-4 border-aiceless-blue p-8 rounded-r-lg">
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              I&apos;ve spent more than 10 years inside CRMs, doing the admin work, designing the setup and building on
              top of it. I&apos;m a Salesforce Certified Advanced Administrator. For the last 5+ years I&apos;ve also
              been recruiting. So when I search for someone, I already know the systems they&apos;ll be working in.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              Aiceless started in 2025 as software. I built an app for small businesses: you write one update, and it
              goes to Facebook, Instagram, your Google Business Profile and a banner on your website. That app is still
              part of Aiceless.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              Now Aiceless also does contingency search and recruitment. You pay nothing unless the hire is still in
              the role after 90 days.
            </p>
            <p className="text-sm text-gray-500 mt-4 font-medium">&mdash; Kevin, Founder</p>
          </div>
        </div>

        {/* What Aiceless Does */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Two sides of Aiceless</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            I recruit for Software, Life Sciences, Healthcare and Consulting companies, on contingency only. Once
            Aiceless is an approved vendor with an agreement in place, I&apos;ll present a first candidate within two
            business days. You pay nothing unless the hire is still in the role after 90 days.{' '}
            <Link href="/services" className="text-aiceless-blue hover:underline font-medium">
              See recruiting services
            </Link>
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            The Aiceless alerts app lets a small business post one message to Facebook, Instagram, Google Business
            Profile and a website banner at the same time. If you want help with the wording, there&apos;s an optional
            AI rewriter. Plans start at $15/month, and there&apos;s a 7-day free trial.{' '}
            <Link href="/product" className="text-aiceless-blue hover:underline font-medium">
              See how the app works
            </Link>
          </p>
        </div>

        {/* Cards */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-aiceless-blue bg-opacity-10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-aiceless-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">You pay only if they stay</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Contingency only. You pay nothing unless the hire is still in the role after 90 days. My full-time
                placements stay 3+ years on average.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-aiceless-teal bg-opacity-10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-aiceless-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">A Salesforce admin who recruits</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                I&apos;ve done 10+ years of hands-on CRM administration, architecture and development. I&apos;m a
                Salesforce Certified Advanced Administrator, and I also work in NetSuite/Oracle and
                FinancialForce/Certinia.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-aiceless-blue bg-opacity-10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-aiceless-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">One post, every channel</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Write one update, and the Aiceless app posts it to Facebook, Instagram, Google Business Profile and your
                website banner. There&apos;s an optional AI rewriter. From $15/month, with a 7-day free trial.
              </p>
            </div>
          </div>
        </div>

        {/* The Details */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Details</h2>
          <div className="bg-gray-50 rounded-2xl p-8 space-y-4">
            {details.map((d) => (
              <div key={d.label} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-aiceless-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <p className="text-gray-700"><strong>{d.label}:</strong> {d.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="mb-16">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Hiring, or have a question about the app?</h2>
            <p className="text-gray-600 mb-4">
              Tell me about the role you&apos;re trying to fill or what you need the app to do.
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong>{' '}
              <a href="mailto:contactus@Aiceless.com" className="text-aiceless-blue hover:underline font-medium">
                contactus@Aiceless.com
              </a>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Have a role to fill?</h2>
          <p className="text-gray-500 mb-6 max-w-2xl mx-auto">
            Contingency search for Software, Life Sciences, Healthcare and Consulting teams. You pay nothing unless the
            hire is still in the role after 90 days.
          </p>
          <Link
            href="/services"
            className="inline-block px-8 py-4 bg-aiceless-blue text-white rounded-lg hover:bg-opacity-90 transition font-semibold shadow-lg"
          >
            See recruiting services
          </Link>
        </div>
      </div>
    </div>
  )
}
