export default function MissionPage() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Mission</h1>
          <p className="text-xl text-gray-600">
            Small business, for small business
          </p>
        </div>

        {/* Mission Statement */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-aiceless-blue bg-opacity-5 border-l-4 border-aiceless-blue p-8 rounded-r-lg mb-12">
            <p className="text-xl text-gray-900 leading-relaxed">
              Aiceless is a small business built to help other small businesses. We believe communicating 
              with your customers shouldn't require multiple logins, complicated dashboards, or wasted time.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Problem We're Solving</h2>
          <p className="text-gray-700 mb-6">
            Every day, small business owners face the same frustrating challenge: they need to tell their customers 
            something important—a closure, a sale, a menu change—and they have to log into Facebook, then Instagram, 
            then update their website. By the time they're done, precious minutes have been wasted, and customers 
            might have already shown up to a closed door or missed the flash sale.
          </p>

          <p className="text-gray-700 mb-6">
            We watched restaurants struggle to post about ingredient shortages. We saw retail shops scramble to 
            announce flash sales. We heard from service businesses trying to communicate emergency closures. 
            They all had the same complaint: <strong>"This should be easier."</strong>
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Solution</h2>
          <p className="text-gray-700 mb-6">
            With Aiceless, you write your message <em>once</em>. Choose which platforms. Click post. 
            Done. Your alert appears on Facebook, Instagram Stories, Instagram Feed, your website—wherever 
            your customers are looking—all at the same time.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">What this means for you:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Fewer logins:</strong> One dashboard instead of three or four different apps</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Better communication:</strong> Reach customers wherever they are, instantly</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>Better experiences:</strong> Happy customers who are always in the loop</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-aiceless-blue mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span><strong>More time:</strong> Get back to running your business instead of managing social media</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Built Different</h2>
          <p className="text-gray-700 mb-6">
            We're not a massive tech company trying to sell you a complicated enterprise solution. We're small business 
            owners who got frustrated with the same problems you face every day. We built Aiceless to solve our own 
            problem—and realized every small business has the same pain.
          </p>

          <p className="text-gray-700 mb-6">
            That's why Aiceless is simple. No bloated features you'll never use. No confusing analytics dashboards. 
            No "growth hacking" tools. Just a straightforward way to tell your customers what they need to know, 
            right when they need to know it.
          </p>

          <div className="bg-aiceless-blue bg-opacity-5 border-l-4 border-aiceless-teal p-8 rounded-r-lg mt-12">
            <p className="text-xl text-gray-900 font-medium mb-4">
              Our promise to you
            </p>
            <p className="text-gray-700">
              We'll keep Aiceless simple, affordable, and focused on what matters: helping you communicate with 
              your customers quickly and effectively. No gimmicks. No upsells to features you don't need. 
              Just honest software that does exactly what it says on the tin.
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
