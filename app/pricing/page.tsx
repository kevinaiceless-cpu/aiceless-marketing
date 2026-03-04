export default function PricingPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 mb-2">
            Start with a 7-day free trial. No credit card required.
          </p>
          <p className="text-lg text-gray-500">
            Pick the plan that fits your business. Upgrade or cancel anytime.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Tier */}
          <div className="bg-white rounded-2xl shadow-sm border-2 border-gray-200 p-8 hover:shadow-md transition flex flex-col">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
              <p className="text-gray-600 mb-4">Get your alerts up and running</p>
              <div className="flex items-baseline">
                <span className="text-5xl font-bold text-gray-900">$15</span>
                <span className="text-gray-600 ml-2">/month</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700"><strong>Facebook Page</strong> posting</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700"><strong>Website banner</strong> widget</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Up to <strong>30 alerts</strong> per month</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Schedule alerts for later</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Alert history</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Custom banner colors &amp; fonts</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Email support</span>
              </li>
            </ul>

            <a 
              href="https://app.aiceless.com/signup?plan=starter" 
              className="block w-full py-3 px-4 bg-gray-100 text-gray-900 text-center rounded-lg hover:bg-gray-200 transition font-semibold"
            >
              Start Free Trial
            </a>
          </div>

          {/* Professional Tier - Highlighted */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-aiceless-blue p-8 relative transform md:scale-105 flex flex-col">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-aiceless-blue text-white px-4 py-1 rounded-full text-sm font-semibold">
              MOST POPULAR
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
              <p className="text-gray-600 mb-4">The full Aiceless experience</p>
              <div className="flex items-baseline">
                <span className="text-5xl font-bold text-aiceless-blue">$29</span>
                <span className="text-gray-600 ml-2">/month</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700"><strong>Everything in Starter</strong>, plus:</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700"><strong>Instagram</strong> Stories &amp; Feed Posts</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700"><strong>Google Business Profile</strong> posting</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700"><strong>Unlimited alerts</strong></span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700"><strong>AI text enhancement</strong> with multiple tones</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700"><strong>Instagram Story designer</strong> — custom colors, fonts &amp; images</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700"><strong>Google hours override</strong> — update hours with your alert</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Photo uploads &amp; auto-expire</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Priority support</span>
              </li>
            </ul>

            <a 
              href="https://app.aiceless.com/signup?plan=professional" 
              className="block w-full py-3 px-4 bg-aiceless-blue text-white text-center rounded-lg hover:bg-opacity-90 transition font-semibold shadow-lg"
            >
              Start Free Trial
            </a>
          </div>

          {/* Business Tier - Coming Soon */}
          <div className="bg-white rounded-2xl shadow-sm border-2 border-gray-200 p-8 hover:shadow-md transition relative flex flex-col opacity-80">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-700 text-white px-4 py-1 rounded-full text-sm font-semibold">
              COMING SOON
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Business</h3>
              <p className="text-gray-600 mb-4">For growing teams &amp; multi-location</p>
              <div className="flex items-baseline">
                <span className="text-5xl font-bold text-gray-900">$49</span>
                <span className="text-gray-600 ml-2">/month</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700"><strong>Everything in Professional</strong>, plus:</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-500"><strong>Multiple business locations</strong></span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-500"><strong>Team access</strong> — multiple users per account</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-500"><strong>Custom branding</strong> on website widget</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-500">Phone &amp; chat support</span>
              </li>
            </ul>

            <button 
              disabled
              className="block w-full py-3 px-4 bg-gray-200 text-gray-500 text-center rounded-lg font-semibold cursor-not-allowed"
            >
              Notify Me When Available
            </button>
          </div>
        </div>

        {/* Comparison Callout */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-aiceless-blue bg-opacity-5 border border-aiceless-blue border-opacity-20 rounded-2xl p-6 text-center">
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>How does this compare?</strong> Most social media management tools start at $30–$100/month and focus on scheduling content calendars. Aiceless is built specifically for <em>real-time business alerts</em> — not content marketing. It&apos;s faster, simpler, and priced for the small businesses that need it most.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">What happens after my free trial?</h3>
              <p className="text-gray-600">
                After your 7-day free trial, you&apos;ll be asked to choose a plan. If you don&apos;t select one, 
                your account will simply pause — no charges, no hassle.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Can I cancel anytime?</h3>
              <p className="text-gray-600">
                Yes. Cancel from your account settings whenever you want. 
                Your access continues through the end of your current billing period.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">What&apos;s the difference between Starter and Professional?</h3>
              <p className="text-gray-600">
                Starter gives you Facebook and website posting — great for getting started. Professional unlocks 
                Instagram, Google Business Profile, AI text enhancement, the Instagram Story designer, and unlimited alerts. 
                If you post to more than just Facebook, Professional is the way to go.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Can I upgrade or downgrade my plan?</h3>
              <p className="text-gray-600">
                Absolutely. Change your plan anytime from your dashboard. Upgrades are instant. Downgrades take 
                effect at your next billing cycle.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">What counts as an &quot;alert&quot;?</h3>
              <p className="text-gray-600">
                Each time you hit send, that&apos;s one alert — regardless of how many platforms you post to. 
                So if you send one message to Facebook, Instagram, Google, and your website, that&apos;s 1 alert, not 4.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Do I need a credit card to start the free trial?</h3>
              <p className="text-gray-600">
                No. Sign up with just your email and start posting immediately. We&apos;ll only ask for payment info 
                when you choose a plan after the trial.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-20 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Email us at <a href="mailto:contactus@Aiceless.com" className="text-aiceless-blue hover:underline">contactus@Aiceless.com</a>
          </p>
          <a 
            href="https://app.aiceless.com/signup" 
            className="inline-block px-8 py-4 bg-aiceless-blue text-white rounded-lg hover:bg-opacity-90 transition font-semibold shadow-lg"
          >
            Start Your Free 7-Day Trial
          </a>
        </div>
      </div>
    </div>
  )
}
