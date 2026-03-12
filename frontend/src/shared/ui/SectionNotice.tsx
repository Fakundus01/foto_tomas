type SectionNoticeProps = {
  children: string
  tone?: 'error' | 'muted'
}

export function SectionNotice({ children, tone = 'muted' }: SectionNoticeProps) {
  const hideDemoAlerts = true

  if (hideDemoAlerts) {
    return null
  }

  const tones = {
    error: 'border-rose-200 bg-rose-50 text-rose-700',
    muted: 'border-[var(--color-border)] bg-white/65 text-[var(--color-muted)]',
  }

  return <p className={`rounded-[1.5rem] border px-4 py-3 text-sm ${tones[tone]}`}>{children}</p>
}
