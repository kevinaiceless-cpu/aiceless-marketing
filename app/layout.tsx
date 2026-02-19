import './globals.css'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Aiceless - Business Alerts Made Simple',
  description: 'Post business alerts everywhere instantly. One click. Every platform.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Navigation */}
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3">
                <Image 
                  src="/logo.png" 
                  alt="Aiceless" 
                  width={40} 
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-xl font-bold text-aiceless-blue">Aiceless</span>
              </Link>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/mission" className="text-gray-600 hover:text-aiceless-blue transition">
                  Mission
                </Link>
                <Link href="/pricing" className="text-gray-600 hover:text-aiceless-blue transition">
                  Pricing
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-aiceless-blue transition">
                  About
                </Link>
                <a 
                  href="https://my-alert-app.vercel.app/login" 
                  className="text-gray-600 hover:text-aiceless-blue transition font-medium"
                >
                  Log In
                </a>
                <a 
                  href="https://my-alert-app.vercel.app/signup" 
                  className="px-4 py-2 bg-aiceless-blue text-white rounded-lg hover:bg-opacity-90 transition font-medium"
                >
                  Get Started Free
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center gap-3">
                <a 
                  href="https://my-alert-app.vercel.app/login" 
                  className="text-sm text-gray-600 hover:text-aiceless-blue font-medium"
                >
                  Log In
                </a>
                <a 
                  href="https://my-alert-app.vercel.app/signup" 
                  className="px-4 py-2 bg-aiceless-blue text-white rounded-lg text-sm font-medium"
                >
                  Start Free
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-50 border-t border-gray-200 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="col-span-1">
                <div className="flex items-center space-x-2 mb-4">
                  <Image 
                    src="/logo.png" 
                    alt="Aiceless" 
                    width={32} 
                    height={32}
                    className="w-8 h-8"
                  />
                  <span className="font-bold text-aiceless-blue">Aiceless</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Business alerts made simple.
                </p>
              </div>

              {/* Product */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Product</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/pricing" className="text-gray-600 hover:text-aiceless-blue">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <a href="https://my-alert-app.vercel.app/signup" className="text-gray-600 hover:text-aiceless-blue">
                      Sign Up
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/mission" className="text-gray-600 hover:text-aiceless-blue">
                      Mission
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-600 hover:text-aiceless-blue">
                      About
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/privacy" className="text-gray-600 hover:text-aiceless-blue">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-gray-600 hover:text-aiceless-blue">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
              <p>© {new Date().getFullYear()} Aiceless. All rights reserved.</p>
              <p className="mt-2">
                <a href="mailto:Kevin.Aiceless@gmail.com" className="text-aiceless-blue hover:underline">
                  Kevin.Aiceless@gmail.com
                </a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
