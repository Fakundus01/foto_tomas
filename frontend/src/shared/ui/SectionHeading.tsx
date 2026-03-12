type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-accent)]">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-semibold text-balance text-[var(--color-ink)] sm:text-5xl">{title}</h2>
      <p className="max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">{description}</p>
    </div>
  )
}
