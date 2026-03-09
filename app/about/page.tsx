export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">A Sales Guy Who<br />Built the Tool He Wished Existed</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Aiceless wasn&apos;t born in a garage or a Silicon Valley incubator. It started with a simple observation that kept nagging me.
          </p>
        </div>

        {/* The Origin Story */}
        <div className="mb-16">
          <div className="bg-aiceless-blue bg-opacity-5 border-l-4 border-aiceless-blue p-8 rounded-r-lg">
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              I&apos;ve spent 15+ years in sales and operations, and I&apos;ve always been obsessed with the tech stack &mdash; the tools that make teams faster, the automations that eliminate busywork, the systems that let people focus on what actually matters.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              But here&apos;s what I noticed: every tool I worked with was built for companies with marketing departments and dedicated social media managers. Nobody was building for the restaurant owner who needs to post &quot;closed early today&quot; while simultaneously dealing with a burst pipe. Nobody was building for the salon owner who just had a cancellation and wants to fill the slot in the next hour.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              I grew up watching my mother run an LLC flipping houses during the &apos;08 crash. I saw firsthand what it looks like when a small business owner is doing everything themselves &mdash; every decision, every phone call, every fire drill. That stuck with me. When I finally decided to build something of my own, I knew exactly who I was building for.
            </p>
            <p className="text-sm text-gray-500 mt-4 font-medium">&mdash; Kevin, Founder</p>
          </div>
        </div>

        {/* What Aiceless Actually Does */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Aiceless Does</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Aiceless is a single-screen alert tool for small businesses. You type a message &mdash; &quot;Closing at 3pm today&quot; or &quot;Back open after the holiday!&quot; &mdash; pick your channels, and it goes live everywhere in seconds. Facebook, Instagram, Google Business Profile, and your website. One message, every platform, instantly.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            There&apos;s an optional AI rewriter that can polish your message before it goes out, and you can schedule posts or set them to auto-expire. That&apos;s the whole product. No content calendars, no analytics dashboards, no 47-feature comparison chart. Just fast, reliable business alerts.
          </p>
        </div>

        {/* Why This, Why Now */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why I Built This</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-aiceless-blue bg-opacity-10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-aiceless-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">The tools aren&apos;t built for you</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every social media management platform I evaluated was designed for marketing teams with content calendars and monthly planning sessions. Small business owners don&apos;t work that way. They need to communicate <em>right now</em>.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-aiceless-blue bg-opacity-10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-aiceless-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">The price isn&apos;t right</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Why should a coffee shop pay $50-100/month for a tool built for agencies? Aiceless starts at $15/month because that&apos;s what makes sense for the businesses I&apos;m building for.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-aiceless-blue bg-opacity-10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-aiceless-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">I wanted to build something</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                After 15 years helping other companies sell their products, I wanted to build my own. I had zero coding experience when I started Aiceless. Every line of this product exists because I refused to let that stop me.
              </p>
            </div>
          </div>
        </div>

        {/* The Specifics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Details</h2>
          <div className="bg-gray-50 rounded-2xl p-8 space-y-4">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-aiceless-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <p className="text-gray-700"><strong>Founded:</strong> 2025, built in Massachusetts</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-aiceless-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <p className="text-gray-700"><strong>Platforms supported:</strong> Facebook Pages, Instagram (Stories + Feed), Google Business Profile, and website banner widgets</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-aiceless-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <p className="text-gray-700"><strong>AI-powered:</strong> Optional AI text enhancement with multiple tones &mdash; keeps your message human, just polished</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-aiceless-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <p className="text-gray-700"><strong>Free trial:</strong> 7 days, no credit card required. Plans start at $15/month.</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-aiceless-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <p className="text-gray-700"><strong>Privacy:</strong> We never access your data for advertising. Your connections are used solely to post on your behalf.</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="mb-16">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Questions? Just ask.</h2>
            <p className="text-gray-600 mb-4">
              I read every email. If something&apos;s not working, if you have a feature idea, or if you just want to say hey &mdash; I&apos;m here.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Ready to try it?
          </h2>
          <p className="text-gray-500 mb-6">7-day free trial. No credit card. Cancel anytime.</p>
          <a 
            href="https://app.aiceless.com/signup" 
            className="inline-block px-8 py-4 bg-aiceless-blue text-white rounded-lg hover:bg-opacity-90 transition font-semibold shadow-lg"
          >
            Start Your Free Trial
          </a>
        </div>
      </div>
    </div>
  )
}
//