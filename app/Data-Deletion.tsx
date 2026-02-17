'use client';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using My Alert App ("Service"), you agree to be bound by these Terms of Service ("Terms"). 
              If you do not agree to these Terms, please do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Description of Service</h2>
            <p>
              My Alert App provides a platform for businesses to create and publish time-sensitive alerts and updates 
              to their social media accounts, including Facebook Pages and Instagram Business Accounts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. User Responsibilities</h2>
            <p className="mb-2">You agree to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide accurate and complete information when creating your account</li>
              <li>Maintain the security of your account credentials</li>
              <li>Only post content that you have the right to publish</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not use the Service for spam, harassment, or illegal activities</li>
              <li>Comply with Facebook's Platform Terms and Policies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Content Responsibility</h2>
            <p>
              You are solely responsible for all content you post through the Service. We do not review, edit, or 
              monitor content before it is posted. You agree that your content will not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
              <li>Violate any third-party rights, including intellectual property rights</li>
              <li>Contain false, misleading, or deceptive information</li>
              <li>Include hate speech, harassment, or discriminatory content</li>
              <li>Violate Facebook's Community Standards or any other platform's policies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Facebook Platform Compliance</h2>
            <p>
              When you connect your Facebook account, you authorize us to post content on your behalf only when you 
              explicitly click "Post Live" in our dashboard. You acknowledge that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
              <li>You must comply with Facebook's Platform Terms and Developer Policies</li>
              <li>Facebook may revoke our access at any time</li>
              <li>We are not responsible for changes to Facebook's API or policies</li>
              <li>You can revoke our access through Facebook Settings at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Service Availability</h2>
            <p>
              We strive to maintain high availability but do not guarantee uninterrupted service. We may suspend 
              or terminate the Service at any time for maintenance, updates, or other reasons. We are not liable 
              for any loss or damage resulting from service interruptions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages resulting from your use of the Service, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
              <li>Loss of business or revenue</li>
              <li>Content posted to your social media accounts</li>
              <li>Unauthorized access to your accounts</li>
              <li>Service interruptions or data loss</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Account Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account at any time for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
              <li>Violation of these Terms</li>
              <li>Abusive or fraudulent behavior</li>
              <li>Posting illegal or harmful content</li>
              <li>Violation of third-party rights</li>
            </ul>
            <p className="mt-2">
              You may terminate your account at any time by disconnecting your social media accounts and contacting us 
              to delete your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are owned by My Alert App and are 
              protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Third-Party Services</h2>
            <p>
              The Service integrates with third-party platforms including Facebook and Instagram. Your use of these 
              platforms is subject to their respective terms of service and privacy policies. We are not responsible 
              for the actions, content, or policies of these third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Privacy</h2>
            <p>
              Your use of the Service is also governed by our Privacy Policy, available at{' '}
              <a href="/privacy" className="text-blue-600 hover:underline">
                /privacy
              </a>
              . Please review our Privacy Policy to understand our practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">12. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of significant changes 
              by email or through a notice on the Service. Your continued use after changes constitutes acceptance 
              of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">13. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless My Alert App and its officers, directors, employees, and agents 
              from any claims, damages, losses, liabilities, and expenses (including attorney's fees) arising from:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
              <li>Your use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Content you post through the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">14. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of [Your State/Country], 
              without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">15. Contact Us</h2>
            <p className="mb-2">
              If you have any questions about these Terms, please contact us:
            </p>
            <ul className="list-none space-y-1 ml-4">
              <li><strong>Email:</strong> legal@yourdomain.com</li>
              <li><strong>Address:</strong> [Your Business Address]</li>
            </ul>
          </section>
        </div>

        <div className="mt-8 pt-6 border-t text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} My Alert App. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}