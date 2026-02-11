import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              One Click.
              <span className="block text-aiceless-blue mt-2">Every Platform.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Post business alerts to Facebook, Instagram, and your website simultaneously. 
              No multiple logins. No wasted time. Just instant communication with your customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://my-alert-app.vercel.app/signup" 
                className="px-8 py-4 bg-aiceless-blue text-white rounded-lg hover:bg-opacity-90 transition font-semibold text-lg shadow-lg"
              >
                Start 7-Day Free Trial
              </a>
              <Link 
                href="/pricing" 
                className="px-8 py-4 bg-white text-aiceless-blue border-2 border-aiceless-blue rounded-lg hover:bg-gray-50 transition font-semibold text-lg"
              >
                View Pricing
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Running a small business is hard enough
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              You're juggling Facebook logins, Instagram apps, website updates—just to post a simple alert 
              that you're closing early or running a flash sale. There has to be a better way.
            </p>
            <div className="bg-aiceless-blue bg-opacity-5 border-l-4 border-aiceless-blue p-6 rounded-r-lg">
              <p className="text-lg text-gray-900 font-medium">
                "I spent 15 minutes trying to post the same message on Facebook and Instagram. 
                By the time I finished, half my lunch rush was over."
              </p>
              <p className="text-sm text-gray-600 mt-2">- Every small business owner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Post everywhere in seconds
            </h2>
            <p className="text-xl text-gray-600">
              One dashboard. All your platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="w-12 h-12 bg-aiceless-blue bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-aiceless-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Facebook & Instagram</h3>
              <p className="text-gray-600">
                Post to your Facebook Page, Instagram Stories, Feed, and even update your bio—all at once.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="w-12 h-12 bg-aiceless-teal bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-aiceless-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Website Alerts</h3>
              <p className="text-gray-600">
                Display custom banners on your website with one line of code. Match your brand colors perfectly.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
              <div className="w-12 h-12 bg-aiceless-blue bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-aiceless-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Powered Messages</h3>
              <p className="text-gray-600">
                Let AI optimize your message for engagement, or post your exact words. You're in control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple as 1-2-3
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-12">
            {/* Step 1 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-aiceless-blue text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Connect your accounts</h3>
                <p className="text-gray-600">
                  One-click connection to Facebook and Instagram. Add your website widget code once.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-aiceless-blue text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Write your alert</h3>
                <p className="text-gray-600">
                  Type your message. Choose which platforms. Customize colors and fonts if you want.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-aiceless-blue text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Post everywhere instantly</h3>
                <p className="text-gray-600">
                  Click "Post Live" and watch your alert appear on Facebook, Instagram, and your website simultaneously.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perfect for time-sensitive alerts
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-2xl mb-2">🌨️</div>
              <p className="font-semibold text-gray-900 mb-1">Weather closures</p>
              <p className="text-sm text-gray-600">"Closing early due to snow - stay safe!"</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-2xl mb-2">⚡</div>
              <p className="font-semibold text-gray-900 mb-1">Flash sales</p>
              <p className="text-sm text-gray-600">"50% off everything for the next 2 hours!"</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-2xl mb-2">🍕</div>
              <p className="font-semibold text-gray-900 mb-1">Menu updates</p>
              <p className="text-sm text-gray-600">"Out of pepperoni - trying our new vegan option instead!"</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-2xl mb-2">🚧</div>
              <p className="font-semibold text-gray-900 mb-1">Location changes</p>
              <p className="text-sm text-gray-600">"Road construction - please use our side entrance"</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-aiceless-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to simplify your business communication?
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8">
            Join small businesses who are already saving time and reaching more customers.
          </p>
          <a 
            href="https://my-alert-app.vercel.app/signup" 
            className="inline-block px-8 py-4 bg-white text-aiceless-blue rounded-lg hover:bg-gray-100 transition font-semibold text-lg shadow-lg"
          >
            Start Your Free 7-Day Trial
          </a>
          <p className="text-white text-opacity-75 mt-4">
            No credit card required • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  )
}
