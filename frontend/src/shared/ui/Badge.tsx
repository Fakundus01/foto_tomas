import { cn } from '@/shared/lib/cn'

type BadgeProps = {
  children: string
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex rounded-full border border-[var(--color-border)] bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent-strong)]',
        className,
      )}
    >
      {children}
    </span>
  )
}
