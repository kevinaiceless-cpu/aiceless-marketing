export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Built by a Business Owner,<br />for Business Owners</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Aiceless started with a simple problem: it shouldn&apos;t take 20 minutes to tell your customers you&apos;re closing early.
          </p>
        </div>

        {/* The Origin Story */}
        <div className="mb-16">
          <div className="bg-aiceless-blue bg-opacity-5 border-l-4 border-aiceless-blue p-8 rounded-r-lg">
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              I was running a local business when I realized I was spending more time <em>telling people about changes</em> than actually running the place. Snow day? Log into Facebook. Update Instagram. Change the website banner. Text the regulars. By the time I finished, people were already pulling up to a locked door.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              I looked for a tool that could handle this. Something dead simple — type one message, hit send, and every platform gets updated at once. I couldn&apos;t find one that wasn&apos;t bloated, overpriced, or built for marketing teams with 10 people on staff. So I built Aiceless.
            </p>
            <p className="text-sm text-gray-500 mt-4 font-medium">— Kevin, Founder</p>
          </div>
        </div>

        {/* What Aiceless Actually Does */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Aiceless Does</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Aiceless is a single-screen alert tool for small businesses. You type a message — &quot;Closing at 3pm today&quot; or &quot;Back open after the holiday!&quot; — pick your channels, and it goes live everywhere in seconds. Facebook, Instagram, Google Business Profile, and your website. One message, every platform, instantly.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            There&apos;s an optional AI rewriter that can polish your message before it goes out, and you can schedule posts or set them to auto-expire. That&apos;s the whole product. No content calendars, no analytics dashboards, no 47-feature comparison chart. Just fast, reliable business alerts.
          </p>
        </div>

        {/* What We Believe - Horizontal Cards */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How We Think About This</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-aiceless-blue bg-opacity-10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-aiceless-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Speed over features</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                When your pipes burst and you need to close for the day, you need to tell customers <em>now</em> — not after configuring a 12-step workflow. Aiceless is built for moments that can&apos;t wait.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-aiceless-blue bg-opacity-10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-aiceless-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Priced for small business</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Enterprise tools charge enterprise prices. We charge what a local shop can actually afford — and we give you a free trial to make sure it works for you before you spend a dime.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-aiceless-blue bg-opacity-10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-aiceless-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Built for the rest of us</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                You don&apos;t have a social media manager. You don&apos;t have a marketing team. You have 30 seconds between customers to post an update. That&apos;s who we build for.
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
              <p className="text-gray-700"><strong>AI-powered:</strong> Optional AI text enhancement with multiple tones — keeps your message human, just polished</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-aiceless-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <p className="text-gray-700"><strong>Free trial:</strong> 7 days, no credit card required. Plans start at $20/month.</p>
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
              I read every email. If something&apos;s not working, if you have a feature idea, or if you just want to say hey — I&apos;m here.
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong>{' '}
              <a href="mailto:Kevin@Aiceless.com" className="text-aiceless-blue hover:underline font-medium">
                Kevin@Aiceless.com
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
            href="https://my-alert-app.vercel.app/signup" 
            className="inline-block px-8 py-4 bg-aiceless-blue text-white rounded-lg hover:bg-opacity-90 transition font-semibold shadow-lg"
          >
            Start Your Free Trial
          </a>
        </div>
      </div>
    </div>
  )
}
