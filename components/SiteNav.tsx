'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useId, useRef, useState } from 'react'
import { LOGIN_URL, ctaFor, servicesLinks } from './navConfig'

const navLink =
  'text-gray-600 hover:text-aiceless-blue transition-colors inline-flex items-center min-h-[44px] px-1'

function isActive(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/')
}

function CtaButton({ pathname, className = '' }: { pathname: string; className?: string }) {
  const cta = ctaFor(pathname)
  const cls = `inline-flex items-center justify-center whitespace-nowrap min-h-[44px] px-4 py-2 bg-aiceless-blue text-white rounded-lg hover:bg-opacity-90 transition-colors font-semibold ${className}`
  // Same-page anchors and the /signup redirect use plain <a>.
  if (cta.href.startsWith('#') || cta.href === '/signup') {
    return (
      <a href={cta.href} className={cls}>
        {cta.label}
      </a>
    )
  }
  return (
    <Link href={cta.href} className={cls}>
      {cta.label}
    </Link>
  )
}

function ServicesMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const wrapRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    function onClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false)
    }
    function onFocus(e: FocusEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    document.addEventListener('focusin', onFocus)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('focusin', onFocus)
    }
  }, [open])

  const active = isActive(pathname, '/services')

  return (
    <div className="relative" ref={wrapRef}>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((o) => !o)}
        className={`${navLink} gap-1 ${active ? 'text-aiceless-blue' : ''}`}
      >
        Salesforce services
        <svg
          aria-hidden="true"
          className={`size-4 transition-transform ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <ul
        id={menuId}
        hidden={!open}
        className="absolute left-0 top-full mt-2 w-64 rounded-lg border border-gray-200 bg-white py-2 shadow-sm"
      >
        {servicesLinks.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              aria-current={pathname === l.href ? 'page' : undefined}
              className="block px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-aiceless-blue aria-[current=page]:text-aiceless-blue aria-[current=page]:font-semibold"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function MobileMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    panelRef.current?.querySelector<HTMLElement>('a')?.focus()
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const linkCls =
    'block rounded-lg px-3 py-3 text-lg text-gray-700 hover:bg-gray-50 hover:text-aiceless-blue aria-[current=page]:text-aiceless-blue aria-[current=page]:font-semibold'

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex size-11 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100"
      >
        <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      <div
        id={panelId}
        ref={panelRef}
        hidden={!open}
        className="absolute inset-x-0 top-16 border-b border-gray-200 bg-white shadow-sm max-h-[calc(100vh-4rem)] overflow-y-auto"
      >
        <nav aria-label="Mobile" className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <ul className="space-y-1">
            <li>
              <Link href="/alerts" aria-current={isActive(pathname, '/alerts') ? 'page' : undefined} className={linkCls}>
                Alerts app
              </Link>
            </li>
            <li>
              <p className="px-3 pt-3 pb-1 text-sm font-semibold text-gray-500">Salesforce services</p>
              <ul className="space-y-1">
                {servicesLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      aria-current={pathname === l.href ? 'page' : undefined}
                      className={`${linkCls} pl-6`}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link href="/about" aria-current={isActive(pathname, '/about') ? 'page' : undefined} className={linkCls}>
                About
              </Link>
            </li>
            <li className="border-t border-gray-200 mt-2 pt-2">
              <a href={LOGIN_URL} className={linkCls}>
                Log in
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default function SiteNav() {
  const pathname = usePathname() || '/'
  return (
    <>
      {/* Desktop */}
      <nav aria-label="Main" className="hidden md:flex items-center gap-6 lg:gap-8">
        <Link
          href="/alerts"
          aria-current={isActive(pathname, '/alerts') ? 'page' : undefined}
          className={`${navLink} aria-[current=page]:text-aiceless-blue`}
        >
          Alerts app
        </Link>
        <ServicesMenu pathname={pathname} />
        <Link
          href="/about"
          aria-current={isActive(pathname, '/about') ? 'page' : undefined}
          className={`${navLink} aria-[current=page]:text-aiceless-blue`}
        >
          About
        </Link>
        <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
        <a href={LOGIN_URL} className={`${navLink} text-sm font-medium`}>
          Log in
        </a>
        <CtaButton pathname={pathname} />
      </nav>

      {/* Mobile: CTA stays visible, the rest goes in the menu */}
      <div className="flex md:hidden items-center gap-2">
        <CtaButton pathname={pathname} className="text-sm px-3" />
        <MobileMenu pathname={pathname} />
      </div>
    </>
  )
}
