export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Aiceless</h1>
          <p className="text-xl text-gray-600">
            Small business helping small businesses
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-aiceless-blue bg-opacity-5 border-l-4 border-aiceless-blue p-8 rounded-r-lg mb-12">
            <p className="text-xl text-gray-900 leading-relaxed">
              We're a small team that understands the daily challenges of running a small business. 
              We built Aiceless because we were tired of juggling multiple platforms just to tell our 
              customers something simple.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-700 mb-6">
            Aiceless was born from frustration. We were running a local business and found ourselves 
            logging into Facebook, then Instagram, then updating our website—all to post the same 
            message: "Closing early today due to weather."
          </p>

          <p className="text-gray-700 mb-6">
            By the time we finished posting everywhere, customers were already showing up to a closed door. 
            We thought, "There has to be a better way."
          </p>

          <p className="text-gray-700 mb-6">
            So we built Aiceless. A simple tool that does one thing really well: helps you communicate 
            with your customers across all platforms, instantly.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">What We Believe</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-aiceless-blue rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Simple is better</h3>
                <p className="text-gray-700">
                  We don't believe in overwhelming you with features you'll never use. Aiceless does what 
                  it says it does, and nothing more.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-aiceless-blue rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Small business matters</h3>
                <p className="text-gray-700">
                  We're not building enterprise software. We're building for the restaurant down the street, 
                  the boutique in the shopping center, the salon around the corner.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-aiceless-blue rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Your time is valuable</h3>
                <p className="text-gray-700">
                  Every minute you spend managing social media is a minute you're not serving customers or 
                  growing your business. We're here to give you that time back.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-4">
              Have questions? Want to share your story? We'd love to hear from you.
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> <a href="mailto:Kevin@Aiceless.com" className="text-aiceless-blue hover:underline">Kevin@Aiceless.com</a>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to simplify your business alerts?
          </h2>
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
