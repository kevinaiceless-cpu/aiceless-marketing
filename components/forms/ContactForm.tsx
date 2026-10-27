'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FORMS_CONNECTED, Field, describedBy, inputCls, submitCls } from './fields'

export type Need = 'admin' | 'health-check' | 'hire' | 'candidate' | ''

const needs: { value: Need; label: string }[] = [
  { value: 'health-check', label: 'A free Salesforce health check' },
  { value: 'admin', label: 'A fractional Salesforce admin' },
  { value: 'hire', label: 'Help hiring for a Salesforce role' },
  { value: 'candidate', label: 'I’m looking for a Salesforce job' },
]

type Errors = Partial<Record<'name' | 'email' | 'need', string>>

export default function ContactForm({ defaultNeed = '' }: { defaultNeed?: Need }) {
  const [need, setNeed] = useState<Need>(defaultNeed)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'unavailable'>('idle')

  function validate(form: HTMLFormElement): Errors {
    const data = new FormData(form)
    const e: Errors = {}
    if (!String(data.get('name') || '').trim()) e.name = 'Enter your name.'
    const email = String(data.get('email') || '').trim()
    if (!email) e.email = 'Enter your work email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Enter an email address like name@company.com.'
    if (!data.get('need')) e.need = 'Choose what you need.'
    return e
  }

  async function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault()
    const form = ev.currentTarget
    const e = validate(form)
    setErrors(e)
    if (Object.keys(e).length) {
      form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus()
      return
    }
    if (!FORMS_CONNECTED) {
      setStatus('unavailable')
      return
    }
    setStatus('sending')
    // TODO: post to the chosen form backend, then setStatus('sent').
  }

  if (status === 'sent') {
    return (
      <p role="status" className="rounded-lg border border-gray-200 bg-white p-6 text-lg text-gray-900">
        Thanks. I’ve got your message and I’ll get back to you.
      </p>
    )
  }

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-6" aria-busy={status === 'sending'}>
      <Field id="need" label="What do you need?" required error={errors.need}>
        <select
          id="need"
          name="need"
          required
          value={need}
          onChange={(e) => setNeed(e.target.value as Need)}
          aria-invalid={!!errors.need}
          aria-describedby={describedBy('need', false, errors.need)}
          className={inputCls}
        >
          <option value="" disabled>
            Choose one
          </option>
          {needs.map((n) => (
            <option key={n.value} value={n.value}>
              {n.label}
            </option>
          ))}
        </select>
      </Field>

      {need === 'candidate' ? (
        <div className="rounded-lg border border-gray-200 bg-white p-6 text-lg text-gray-600">
          <p>
            Job seekers have their own form, with a resume upload.{' '}
            <Link
              href="/services/salesforce-recruiting/candidates#profile-form"
              className="font-semibold text-aiceless-blue underline underline-offset-4"
            >
              Submit your profile
            </Link>
          </p>
        </div>
      ) : (
        <>
          <Field id="name" label="Name" required error={errors.name}>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              aria-invalid={!!errors.name}
              aria-describedby={describedBy('name', false, errors.name)}
              className={inputCls}
            />
          </Field>
          <Field id="email" label="Work email" required error={errors.email}>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              required
              aria-invalid={!!errors.email}
              aria-describedby={describedBy('email', false, errors.email)}
              className={inputCls}
            />
          </Field>
          <Field id="company" label="Company">
            <input id="company" name="company" type="text" autoComplete="organization" className={inputCls} />
          </Field>
          <Field id="message" label="Message" hint="What’s going on in your org, or what role you’re trying to fill.">
            <textarea
              id="message"
              name="message"
              rows={5}
              aria-describedby="message-hint"
              className={inputCls}
            />
          </Field>
          <div>
            <button type="submit" className={submitCls} disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send'}
            </button>
          </div>
        </>
      )}

      <div aria-live="polite">
        {status === 'unavailable' && (
          <p className="rounded-lg border border-amber-700 bg-white p-4 text-amber-700 font-medium">
            This form isn’t connected yet. Please email{' '}
            <a href="mailto:Support@Aiceless.com" className="underline">
              Support@Aiceless.com
            </a>{' '}
            for now.
          </p>
        )}
      </div>
    </form>
  )
}
