export default function TermsPage() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-sm text-gray-600 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing and using Aiceless, you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700">
              Aiceless provides a platform for posting business alerts across multiple social media platforms 
              (Facebook, Instagram) and websites. The service allows you to create and manage alerts from a 
              centralized dashboard.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
            <p className="text-gray-700 mb-4">You are responsible for:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use of your account</li>
              <li>Ensuring your use of the service complies with all applicable laws</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Acceptable Use</h2>
            <p className="text-gray-700 mb-4">You agree NOT to use Aiceless to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Post spam, misleading, or fraudulent content</li>
              <li>Violate any laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Post hate speech, harassment, or threatening content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use our service for any illegal purpose</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Content Ownership</h2>
            <p className="text-gray-700">
              You retain all rights to the content you post through Aiceless. By using our service, you grant us 
              permission to store and transmit your content to Facebook, Instagram, and your website as directed by you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Platforms</h2>
            <p className="text-gray-700">
              Aiceless integrates with third-party platforms (Facebook, Instagram). Your use of these platforms 
              is subject to their respective terms of service. We are not responsible for changes to third-party 
              platform APIs or policies that may affect our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Payment and Billing</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>All fees are in USD and charged monthly</li>
              <li>You can cancel your subscription at any time</li>
              <li>No refunds for partial months</li>
              <li>We reserve the right to change pricing with 30 days notice</li>
              <li>Free trial does not require payment information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Service Availability</h2>
            <p className="text-gray-700">
              While we strive for 99.9% uptime, we do not guarantee uninterrupted access to our service. 
              We may suspend service for maintenance, updates, or due to circumstances beyond our control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700">
              Aiceless is provided "as is" without warranties of any kind. We are not liable for any indirect, 
              incidental, special, consequential, or punitive damages resulting from your use of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
            <p className="text-gray-700 mb-4">We reserve the right to suspend or terminate your account if:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>You violate these terms of service</li>
              <li>Your account is used for illegal activities</li>
              <li>You fail to pay applicable fees</li>
              <li>Required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
            <p className="text-gray-700">
              We may modify these terms at any time. We will notify users of significant changes via email or 
              through our service. Continued use of Aiceless after changes constitutes acceptance of new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about these terms, please contact us:
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> <a href="mailto:Kevin@Aiceless.com" className="text-aiceless-blue hover:underline">Kevin@Aiceless.com</a>
            </p>
          </section>

          <div className="bg-gray-50 p-6 rounded-lg mt-12">
            <p className="text-sm text-gray-600">
              By using Aiceless, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
