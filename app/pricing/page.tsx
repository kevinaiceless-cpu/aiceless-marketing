export default function PricingPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 mb-4">
            Start with a 7-day free trial.
          </p>
          <p className="text-lg text-gray-500">
            No hidden fees. Simple plans that grow with your business.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Essential Tier */}
          <div className="bg-white rounded-2xl shadow-sm border-2 border-gray-200 p-8 hover:shadow-md transition">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Essential</h3>
              <p className="text-gray-600 mb-4">Perfect for getting started</p>
              <div className="flex items-baseline">
                <span className="text-5xl font-bold text-gray-900">$19</span>
                <span className="text-gray-600 ml-2">/month</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700"><strong>Facebook Pages</strong> posting</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700"><strong>Website alerts</strong> with custom colors</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Up to <strong>50 alerts per month</strong></span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700"><strong>Email support</strong></span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Custom fonts & colors</span>
              </li>
            </ul>

            <a 
              href="https://my-alert-app.vercel.app/signup?plan=essential" 
              className="block w-full py-3 px-4 bg-gray-100 text-gray-900 text-center rounded-lg hover:bg-gray-200 transition font-semibold"
            >
              Start Free Trial
            </a>
          </div>

          {/* Professional Tier - Highlighted */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-aiceless-blue p-8 relative transform md:scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-aiceless-blue text-white px-4 py-1 rounded-full text-sm font-semibold">
              MOST POPULAR
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
              <p className="text-gray-600 mb-4">Everything you need to grow</p>
              <div className="flex items-baseline">
                <span className="text-5xl font-bold text-aiceless-blue">$39</span>
                <span className="text-gray-600 ml-2">/month</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700"><strong>Everything in Essential</strong></span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700"><strong>Instagram Stories</strong> & Feed Posts</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700"><strong>Instagram Bio</strong> management</span>
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
                <span className="text-gray-700"><strong>AI-powered</strong> message optimization</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700"><strong>Priority support</strong></span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Per-platform customization</span>
              </li>
            </ul>

            <a 
              href="https://my-alert-app.vercel.app/signup?plan=professional" 
              className="block w-full py-3 px-4 bg-aiceless-blue text-white text-center rounded-lg hover:bg-opacity-90 transition font-semibold shadow-lg"
            >
              Start Free Trial
            </a>
          </div>

          {/* Enterprise Tier */}
          <div className="bg-white rounded-2xl shadow-sm border-2 border-gray-200 p-8 hover:shadow-md transition">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-4">For growing businesses</p>
              <div className="flex items-baseline">
                <span className="text-5xl font-bold text-gray-900">Custom</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700"><strong>Everything in Professional</strong></span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700"><strong>Multiple locations</strong></span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700"><strong>White-label</strong> options</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700"><strong>API access</strong></span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700"><strong>Dedicated account manager</strong></span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Custom integrations</span>
              </li>
            </ul>

            <a 
              href="mailto:Kevin.Aiceless@gmail.com?subject=Enterprise%20Inquiry" 
              className="block w-full py-3 px-4 bg-gray-100 text-gray-900 text-center rounded-lg hover:bg-gray-200 transition font-semibold"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">What happens after my free trial?</h3>
              <p className="text-gray-600">
                After your 7-day free trial, you'll be asked to choose a plan. If you don't select one, 
                your account will simply pause—no charges, no hassle.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Can I cancel anytime?</h3>
              <p className="text-gray-600">
                Yes. You can cancel your subscription at any time from your account settings. 
                Your access continues through the end of your current billing period.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">How does the free trial work?</h3>
              <p className="text-gray-600">
                Sign up and get full access to Aiceless for 7 days. At the end of your trial, 
                choose a plan to continue. If you don't select one, your account will simply pause—no charges, no hassle.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Can I upgrade or downgrade my plan?</h3>
              <p className="text-gray-600">
                Yes! Change your plan anytime from your dashboard. Upgrades are instant. Downgrades take 
                effect at your next billing cycle.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">What if I need more than 50 alerts on Essential?</h3>
              <p className="text-gray-600">
                Upgrade to Professional for unlimited alerts, or contact us if you need a custom solution.
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
            Email us at <a href="mailto:Kevin.Aiceless@gmail.com" className="text-aiceless-blue hover:underline">Kevin.Aiceless@gmail.com</a>
          </p>
          <a 
            href="https://my-alert-app.vercel.app/signup" 
            className="inline-block px-8 py-4 bg-aiceless-blue text-white rounded-lg hover:bg-opacity-90 transition font-semibold shadow-lg"
          >
            Start Your Free 7-Day Trial
          </a>
        </div>
      </div>
    </div>
  )
}
