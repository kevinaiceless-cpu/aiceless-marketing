'use client'

export const inputCls =
  'mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 shadow-sm placeholder:text-gray-500 focus:border-aiceless-blue focus-visible:outline-2 focus-visible:outline-aiceless-blue aria-[invalid=true]:border-red-700'

export function Field({
  id,
  label,
  required,
  hint,
  error,
  children,
}: {
  id: string
  label: string
  required?: boolean
  hint?: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="block font-semibold text-gray-900">
        {label}
        {required ? (
          <span className="font-normal text-gray-600"> (required)</span>
        ) : (
          <span className="font-normal text-gray-600"> (optional)</span>
        )}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="mt-1 text-sm text-gray-600">
          {hint}
        </p>
      )}
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm font-medium text-red-700">
          {error}
        </p>
      )}
    </div>
  )
}

export function describedBy(id: string, hint?: boolean, error?: string) {
  const ids = [hint ? `${id}-hint` : '', error ? `${id}-error` : ''].filter(Boolean)
  return ids.length ? ids.join(' ') : undefined
}

export const submitCls =
  'inline-flex min-h-[44px] items-center justify-center rounded-lg bg-aiceless-blue px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-opacity-90 disabled:cursor-not-allowed disabled:opacity-50'

/**
 * Forms are not connected to a backend yet (no email/storage service chosen).
 * Flip this to true once submitForm() posts somewhere real.
 */
export const FORMS_CONNECTED = false
