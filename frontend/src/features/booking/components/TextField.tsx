import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

type BaseFieldProps = {
  error?: string
  label: string
}

type TextFieldProps = BaseFieldProps & InputHTMLAttributes<HTMLInputElement>
type TextareaFieldProps = BaseFieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>

export function TextField({ error, label, ...props }: TextFieldProps) {
  const classes =
    'mt-2 w-full rounded-3xl border border-[var(--color-border)] bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/15'

  return (
    <label className="block text-sm font-medium text-[var(--color-ink)]">
      {label}
      <input className={classes} {...props} />
      {error ? <span className="mt-2 block text-xs text-rose-600">{error}</span> : null}
    </label>
  )
}

export function TextareaField({ error, label, ...props }: TextareaFieldProps) {
  const classes =
    'mt-2 w-full rounded-3xl border border-[var(--color-border)] bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/15'

  return (
    <label className="block text-sm font-medium text-[var(--color-ink)]">
      {label}
      <textarea className={classes} rows={props.rows ?? 5} {...props} />
      {error ? <span className="mt-2 block text-xs text-rose-600">{error}</span> : null}
    </label>
  )
}
