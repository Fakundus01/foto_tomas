type AdminKpiCardProps = {
  detail: string
  label: string
  value: string
}

export function AdminKpiCard({ detail, label, value }: AdminKpiCardProps) {
  return (
    <article className="glass-panel rounded-[1.75rem] p-5">
      <p className="text-sm text-[var(--color-muted)]">{label}</p>
      <p className="mt-3 text-4xl font-semibold">{value}</p>
      <p className="mt-3 text-sm text-[var(--color-accent-strong)]">{detail}</p>
    </article>
  )
}
