import { cn } from '@/shared/lib/cn'

type BrandLockupProps = {
  className?: string
  compact?: boolean
  dark?: boolean
}

export function BrandLockup({ className, compact = false, dark = false }: BrandLockupProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div
        className={cn(
          'brand-panel relative flex overflow-hidden rounded-[1.35rem]',
          compact ? 'h-12 w-12' : 'h-16 w-16',
        )}
      >
        <div className="metal-line absolute inset-x-1.5 top-1.5 h-px opacity-80" />
        <div className="absolute inset-2 rounded-[1rem] border border-white/10" />
        <div className="absolute -right-3 top-4 h-12 w-12 rounded-full bg-[var(--color-accent)]/16 blur-xl" />
        <div
          className={cn(
            'relative z-10 flex w-full items-center justify-center font-black italic tracking-[-0.14em]',
            compact ? 'text-[1.1rem]' : 'text-[1.4rem]',
          )}
        >
          <span className={dark ? 'text-[var(--color-ink)]' : 'text-white'}>F</span>
          <span className="translate-y-[1px] px-[1px] text-[var(--color-accent)]">7</span>
          <span className={dark ? 'text-[var(--color-ink)]' : 'text-white'}>V</span>
        </div>
      </div>

      <div>
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-[var(--color-accent)]">
          Foto Tomas Video
        </p>
        <p className={cn('mt-1 text-sm', dark ? 'text-[var(--color-muted)]' : 'text-white/72')}>
          Eventos con mirada cinematica
        </p>
      </div>
    </div>
  )
}
