export default function DataDeletionPage() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Data Deletion Instructions</h1>
        <p className="text-sm text-gray-600 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Data, Your Control</h2>
            <p className="text-gray-700">
              At Aiceless, we respect your right to control your personal data. You can request deletion of your 
              data at any time through the methods outlined below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Data We Store</h2>
            <p className="text-gray-700 mb-4">When you use Aiceless, we store:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Account Information:</strong> Email address, encrypted password, account creation date</li>
              <li><strong>Facebook Connection Data:</strong> Facebook Page ID, Page name, access tokens (encrypted)</li>
              <li><strong>Instagram Connection Data:</strong> Instagram Business Account ID, username, access tokens (encrypted)</li>
              <li><strong>Alert History:</strong> Messages you've created and posted, timestamps, platform information</li>
              <li><strong>Usage Data:</strong> Information about how you use our service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Request Data Deletion</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-[#1B5A8E] p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Method 1: Through Your Dashboard (Recommended)</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                  <li>Sign in to your Aiceless account</li>
                  <li>Click "Settings" or "Account Settings"</li>
                  <li>Click "Disconnect" to remove Facebook and Instagram connections</li>
                  <li>All associated data will be automatically deleted within 30 days</li>
                </ol>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Method 2: Via Email</h3>
                <p className="text-gray-700 mb-3">Send an email to:</p>
                <p className="text-lg font-semibold text-[#1B5A8E] mb-3">
                  <a href="mailto:Kevin.Aiceless@gmail.com" className="hover:underline">
                    Kevin.Aiceless@gmail.com
                  </a>
                </p>
                <p className="text-gray-700 mb-3">Include in your email:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Subject: "Data Deletion Request"</li>
                  <li>Your registered email address</li>
                  <li>Your Facebook Page name (if connected)</li>
                  <li>Confirmation that you want all data deleted</li>
                </ul>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Method 3: Through Facebook</h3>
                <p className="text-gray-700 mb-3">If you connected via Facebook:</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                  <li>Go to Facebook Settings → Apps and Websites</li>
                  <li>Find "Aiceless" in your app list</li>
                  <li>Click "Remove"</li>
                  <li>We will be notified and delete your data within 30 days</li>
                </ol>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Gets Deleted</h2>
            <p className="text-gray-700 mb-4">When you request data deletion, we remove:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Your account credentials and profile information</li>
              <li>All Facebook and Instagram access tokens</li>
              <li>Your complete alert history and posted content</li>
              <li>Any stored preferences or settings</li>
              <li>Usage analytics associated with your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Timeline</h2>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#1B5A8E] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong>Immediate:</strong> Your access to the service is revoked
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#1B5A8E] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong>Within 48 hours:</strong> Access tokens are deleted from our database
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#1B5A8E] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  <div>
                    <strong>Within 30 days:</strong> All remaining data is permanently deleted from our systems
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Notes</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <div>
                    <strong>Content Already Posted:</strong> Data deletion removes your data from Aiceless, but 
                    content already posted to Facebook/Instagram will remain on those platforms. You'll need to 
                    delete those posts directly from Facebook/Instagram.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <div>
                    <strong>Backups:</strong> Data in backups will be deleted during our regular backup rotation 
                    (maximum 30 days).
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <div>
                    <strong>Legal Requirements:</strong> We may retain certain data if required by law or for 
                    legitimate business purposes (e.g., dispute resolution, fraud prevention).
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Portability</h2>
            <p className="text-gray-700 mb-4">
              Before deleting your account, you can request a copy of your data:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
              <li>Email <a href="mailto:Kevin.Aiceless@gmail.com" className="text-[#1B5A8E] hover:underline font-medium">Kevin.Aiceless@gmail.com</a></li>
              <li>Request: "Data Export"</li>
              <li>We'll send you a JSON file with all your account data within 7 business days</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions or Concerns?</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about data deletion or our privacy practices:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong>{' '}
                <a href="mailto:Kevin.Aiceless@gmail.com" className="text-[#1B5A8E] hover:underline">
                  Kevin.Aiceless@gmail.com
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Privacy Policy:</strong>{' '}
                <a href="/privacy" className="text-[#1B5A8E] hover:underline">
                  aiceless.com/privacy
                </a>
              </p>
            </div>
          </section>

          <div className="bg-[#1B5A8E] bg-opacity-5 border-l-4 border-[#1B5A8E] p-6 rounded-r-lg mt-12">
            <p className="text-lg text-gray-900 font-medium mb-2">
              We Respect Your Privacy
            </p>
            <p className="text-gray-700">
              Your data belongs to you. We make it easy to delete your information completely and permanently. 
              If you have any questions or concerns about this process, we're here to help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
