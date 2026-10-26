'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/services', label: 'Services' },
  { href: '/product', label: 'Product' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
]

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close the menu after navigating to a new page
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <div className="md:hidden flex items-center gap-2">
      <a
        href="https://app.aiceless.com/signup"
        className="px-4 py-2 bg-aiceless-blue text-white rounded-lg text-sm font-medium"
      >
        Start Free
      </a>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="p-2 rounded-lg text-gray-600 hover:text-aiceless-blue hover:bg-gray-50 transition"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute left-0 right-0 top-16 bg-white border-b border-gray-200 shadow-lg"
        >
          <div className="px-4 py-4 space-y-1">
            {links.map((l) => {
              const active = pathname === l.href
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={
                    'block px-3 py-3 rounded-lg text-base font-medium transition ' +
                    (active
                      ? 'text-aiceless-blue bg-aiceless-blue bg-opacity-5'
                      : 'text-gray-700 hover:text-aiceless-blue hover:bg-gray-50')
                  }
                >
                  {l.label}
                </Link>
              )
            })}
            <div className="border-t border-gray-200 mt-3 pt-3 grid grid-cols-2 gap-3">
              <a
                href="https://app.aiceless.com/login"
                className="text-center px-4 py-3 border-2 border-aiceless-blue text-aiceless-blue rounded-lg font-medium hover:bg-gray-50 transition"
              >
                Log In
              </a>
              <a
                href="https://app.aiceless.com/signup"
                className="text-center px-4 py-3 bg-aiceless-blue text-white rounded-lg font-medium hover:bg-opacity-90 transition"
              >
                Get Started Free
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
