export const LOGIN_URL = 'https://app.aiceless.com/login'

export const servicesLinks = [
  { href: '/services/salesforce-admin', label: 'Fractional Salesforce admin' },
  { href: '/services/salesforce-recruiting', label: 'Salesforce recruiting' },
  { href: '/services', label: 'All services' },
]

/** The header CTA changes by section: one site, two funnels. */
export function ctaFor(pathname: string): { href: string; label: string } {
  if (pathname.startsWith('/services/salesforce-recruiting/candidates')) {
    return { href: '#profile-form', label: 'Submit your profile' }
  }
  if (pathname.startsWith('/services') || pathname.startsWith('/about')) {
    return { href: '/services/contact', label: 'Book a call' }
  }
  return { href: '/signup', label: 'Start free trial' }
}
