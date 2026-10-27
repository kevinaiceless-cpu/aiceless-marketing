import Link from 'next/link'
import Image from 'next/image'
import Container from './Container'
import { Placeholder } from './ui'
import { LOGIN_URL } from './navConfig'

const linkCls = 'text-gray-600 hover:text-aiceless-blue transition-colors inline-block py-1'

type FooterLink = { href: string; label: string }

function Column({ title, links, children }: { title: string; links: FooterLink[]; children?: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-semibold text-gray-900 mb-3">{title}</h2>
      <ul className="space-y-1">
        {links.map((l) => (
          <li key={l.label}>
            {l.href.startsWith('http') || l.href.startsWith('mailto:') || l.href === '/signup' ? (
              <a href={l.href} className={linkCls}>
                {l.label}
              </a>
            ) : (
              <Link href={l.href} className={linkCls}>
                {l.label}
              </Link>
            )}
          </li>
        ))}
        {children}
      </ul>
    </div>
  )
}

export default function SiteFooter() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image src="/logo.png" alt="" width={32} height={32} className="w-8 h-8" />
              <span className="font-bold text-aiceless-blue">Aiceless</span>
            </Link>
            <p className="mt-3 text-gray-600 text-sm">Based in Boston.</p>
          </div>

          <Column
            title="Alerts app"
            links={[
              { href: '/alerts', label: 'Features' },
              { href: '/pricing', label: 'Pricing' },
              { href: '/signup', label: 'Sign up' },
              { href: LOGIN_URL, label: 'Log in' },
              // Interim support link (the existing support address) until a support URL is supplied.
              { href: 'mailto:Support@Aiceless.com', label: 'Support' },
            ]}
          >
            <Placeholder note="PLACEHOLDER: support URL (using Support@Aiceless.com until supplied)" />
          </Column>

          <Column
            title="Salesforce services"
            links={[
              { href: '/services/salesforce-admin', label: 'Fractional admin' },
              { href: '/services/salesforce-recruiting', label: 'Recruiting' },
              { href: '/services/salesforce-recruiting/candidates', label: 'Submit your resume' },
              { href: '/services/contact', label: 'Book a call' },
            ]}
          />

          <Column
            title="Aiceless"
            links={[
              { href: '/about', label: 'About' },
              { href: '/privacy', label: 'Privacy' },
              { href: '/terms', label: 'Terms' },
            ]}
          />
        </div>

        <div className="border-t border-gray-200 mt-10 pt-8 text-sm text-gray-600 space-y-2">
          <p>
            Salesforce is a trademark of Salesforce, Inc. Aiceless is not affiliated with or endorsed by
            Salesforce, Inc.
          </p>
          <p>© {new Date().getFullYear()} Aiceless</p>
        </div>
      </Container>
    </footer>
  )
}
