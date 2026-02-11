export default function PrivacyPage() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700">
              Welcome to Aiceless. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy explains how we collect, use, and protect your information when you use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 mb-4">When you use Aiceless, we collect:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Account Information:</strong> Email address, password (encrypted), account creation date</li>
              <li><strong>Facebook Connection Data:</strong> Facebook Page ID, Page name, access tokens</li>
              <li><strong>Instagram Connection Data:</strong> Instagram Business Account ID, username, access tokens</li>
              <li><strong>Alert Content:</strong> Messages and images you create to post</li>
              <li><strong>Usage Data:</strong> Information about how you use our service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use your information to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Display your connected Facebook Pages and Instagram accounts</li>
              <li>Post alerts when you explicitly click "Post Live"</li>
              <li>Store your alert history</li>
              <li>Maintain and improve our service</li>
              <li>Communicate with you about service updates</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Storage and Security</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>All access tokens are encrypted and stored securely</li>
              <li>We use industry-standard security measures</li>
              <li>Data is stored on secure servers (Supabase)</li>
              <li>We retain your data until you disconnect your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Sharing</h2>
            <p className="text-gray-700 mb-4"><strong>We do NOT:</strong></p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Sell your data to third parties</li>
              <li>Share your access tokens with anyone</li>
              <li>Post to your accounts without your explicit action</li>
              <li>Share your personal information except as required by law</li>
            </ul>
            <p className="text-gray-700 mt-4">
              <strong>We DO share data with:</strong> Facebook/Meta (only when you post alerts through our platform)
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Access your personal data anytime through the dashboard</li>
              <li>Disconnect your Facebook and Instagram accounts</li>
              <li>Request deletion of your data</li>
              <li>Update your account information</li>
              <li>Export your alert history</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Facebook & Instagram Platform Compliance</h2>
            <p className="text-gray-700">
              We comply with Facebook's Platform Terms and Developer Policies. When you connect your accounts, 
              you grant us permission to post on your behalf only when you explicitly click "Post Live". 
              We never auto-post without your direct action.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Deletion</h2>
            <p className="text-gray-700 mb-4">To delete your data:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Disconnect your accounts from the dashboard</li>
              <li>Email us to delete your account entirely</li>
              <li>When you remove our app from Facebook, we automatically delete your data within 30 days</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Cookies and Tracking</h2>
            <p className="text-gray-700">
              We use essential cookies to maintain your login session. We do not use tracking cookies or 
              third-party analytics beyond what's necessary for the service to function.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this privacy policy from time to time. We will notify users of significant changes 
              by email or through a notice on our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this privacy policy or our data practices:
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> <a href="mailto:Kevin.Aiceless@gmail.com" className="text-aiceless-blue hover:underline">Kevin.Aiceless@gmail.com</a>
            </p>
          </section>

          <div className="bg-aiceless-blue bg-opacity-5 border-l-4 border-aiceless-blue p-6 rounded-r-lg mt-12">
            <h3 className="font-bold text-gray-900 mb-3">For Facebook & Instagram Users</h3>
            <p className="text-gray-700 mb-3">When you connect your accounts to Aiceless, you grant us these permissions:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li><strong>pages_show_list:</strong> To display which Facebook Pages you manage</li>
              <li><strong>pages_manage_posts:</strong> To post alerts when you click "Post Live"</li>
              <li><strong>instagram_basic:</strong> To access Instagram Business Account info</li>
              <li><strong>instagram_content_publish:</strong> To post Stories, Feed Posts, and update Bio</li>
            </ul>
            <p className="text-gray-700 mt-3">
              You can revoke these permissions anytime through Facebook Settings → Apps and Websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
