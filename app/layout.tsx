import './globals.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata = {
  title: 'Aiceless',
  description:
    'Aiceless Alerts posts closures, sales and updates everywhere in one click. Aiceless also offers fractional Salesforce admin and Salesforce recruiting.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-gray-900">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:font-semibold focus:text-aiceless-blue focus:shadow-lg"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1} className="min-h-screen focus:outline-none">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  )
}
