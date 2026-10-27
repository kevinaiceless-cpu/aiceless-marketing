'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FORMS_CONNECTED, Field, describedBy, inputCls, submitCls } from './fields'

const roles = [
  'Salesforce Admin',
  'Salesforce Developer',
  'Salesforce Architect',
  'Salesforce Consultant',
  'CRM Manager',
  'Other',
]

type Key = 'name' | 'email' | 'role' | 'location' | 'workStyle' | 'resume' | 'linkedin'
type Errors = Partial<Record<Key, string>>

const MAX_MB = 10

export default function CandidateForm() {
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'unavailable'>('idle')

  function validate(form: HTMLFormElement): Errors {
    const d = new FormData(form)
    const e: Errors = {}
    if (!String(d.get('name') || '').trim()) e.name = 'Enter your name.'
    const email = String(d.get('email') || '').trim()
    if (!email) e.email = 'Enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Enter an email address like name@example.com.'
    if (!d.get('role')) e.role = 'Choose the role you want.'
    if (!String(d.get('location') || '').trim()) e.location = 'Enter your city and state, or country.'
    if (!d.get('workStyle')) e.workStyle = 'Choose remote, hybrid or on-site.'
    const li = String(d.get('linkedin') || '').trim()
    if (li && !/^https?:\/\/.+/.test(li)) e.linkedin = 'Enter the full URL, starting with https://'
    const file = d.get('resume')
    if (!(file instanceof File) || !file.name) e.resume = 'Attach your resume as a PDF or Word file.'
    else if (!/\.(pdf|docx?)$/i.test(file.name)) e.resume = 'Use a PDF or Word file (.pdf, .doc or .docx).'
    else if (file.size > MAX_MB * 1024 * 1024) e.resume = `Use a file under ${MAX_MB} MB.`
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
    // TODO: upload to the chosen storage + notify Kevin, then setStatus('sent').
  }

  if (status === 'sent') {
    return (
      <p role="status" className="rounded-lg border border-gray-200 bg-white p-6 text-lg text-gray-900">
        Thanks. I’ve got your profile. I’ll reach out when a role fits.
      </p>
    )
  }

  const a = (k: Key, hint = false) => ({
    'aria-invalid': !!errors[k],
    'aria-describedby': describedBy(k, hint, errors[k]),
  })

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-6" aria-busy={status === 'sending'}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field id="name" label="Name" required error={errors.name}>
          <input id="name" name="name" type="text" autoComplete="name" required className={inputCls} {...a('name')} />
        </Field>
        <Field id="email" label="Email" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            className={inputCls}
            {...a('email')}
          />
        </Field>
      </div>

      <Field id="role" label="Role you want" required error={errors.role}>
        <select id="role" name="role" required defaultValue="" className={inputCls} {...a('role')}>
          <option value="" disabled>
            Choose one
          </option>
          {roles.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </Field>

      <Field id="location" label="Location" required error={errors.location}>
        <input
          id="location"
          name="location"
          type="text"
          autoComplete="address-level2"
          required
          className={inputCls}
          {...a('location')}
        />
      </Field>

      <fieldset aria-describedby={errors.workStyle ? 'workStyle-error' : undefined}>
        <legend className="font-semibold text-gray-900">
          Remote, hybrid or on-site? <span className="font-normal text-gray-600">(required)</span>
        </legend>
        <div className="mt-3 flex flex-col sm:flex-row gap-3">
          {['Remote', 'Hybrid', 'On-site'].map((w, i) => (
            <label
              key={w}
              className="flex min-h-[44px] items-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 has-[:checked]:border-aiceless-blue"
            >
              <input
                type="radio"
                name="workStyle"
                value={w}
                id={i === 0 ? 'workStyle' : undefined}
                aria-invalid={!!errors.workStyle}
                className="size-4 accent-aiceless-blue"
              />
              {w}
            </label>
          ))}
        </div>
        {errors.workStyle && (
          <p id="workStyle-error" className="mt-2 text-sm font-medium text-red-700">
            {errors.workStyle}
          </p>
        )}
      </fieldset>

      <Field id="certs" label="Salesforce certifications">
        <input id="certs" name="certs" type="text" className={inputCls} />
      </Field>

      <Field id="linkedin" label="LinkedIn URL" error={errors.linkedin}>
        <input
          id="linkedin"
          name="linkedin"
          type="url"
          inputMode="url"
          placeholder="https://www.linkedin.com/in/…"
          className={inputCls}
          {...a('linkedin')}
        />
      </Field>

      <Field id="resume" label="Resume" required hint="PDF or Word, up to 10 MB." error={errors.resume}>
        <input
          id="resume"
          name="resume"
          type="file"
          required
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className="mt-2 block w-full text-base text-gray-600 file:mr-4 file:min-h-[44px] file:rounded-lg file:border-0 file:bg-gray-100 file:px-4 file:py-2 file:font-semibold file:text-aiceless-blue hover:file:bg-gray-200"
          {...a('resume', true)}
        />
      </Field>

      <div>
        <button type="submit" className={submitCls} disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Submit your profile'}
        </button>
        <p className="mt-4 text-sm text-gray-600 max-w-prose">
          By submitting, you agree that Aiceless can store your information and contact you about Salesforce
          roles. I won’t share your resume with an employer without your permission. See our{' '}
          <Link href="/privacy" className="font-semibold text-aiceless-blue underline underline-offset-2">
            Privacy Policy
          </Link>
          .
        </p>
      </div>

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
