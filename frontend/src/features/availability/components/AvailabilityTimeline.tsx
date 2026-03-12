import type { AvailabilityStatus, AvailabilitySlot } from '@/entities/booking/types'
import { cn } from '@/shared/lib/cn'

type AvailabilityTimelineProps = {
  slots: AvailabilitySlot[]
  loading: boolean
  emptyLabel?: string
}

const statusStyles: Record<AvailabilityStatus, string> = {
  available: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  pending: 'border-amber-200 bg-amber-50 text-amber-700',
  booked: 'border-rose-200 bg-rose-50 text-rose-700',
}

const statusLabel: Record<AvailabilityStatus, string> = {
  available: 'Disponible',
  pending: 'Pendiente',
  booked: 'Ocupada',
}

export function AvailabilityTimeline({
  slots,
  loading,
  emptyLabel = 'No hay fechas para este filtro todavia.',
}: AvailabilityTimelineProps) {
  if (loading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="glass-panel h-36 animate-pulse rounded-[1.75rem]" />
        ))}
      </div>
    )
  }

  if (!slots.length) {
    return <p className="rounded-[1.75rem] border border-dashed border-[var(--color-border)] p-6 text-sm">{emptyLabel}</p>
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {slots.map((slot) => (
        <article key={slot.id} className="glass-panel rounded-[1.75rem] p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">{slot.eventType}</p>
              <h3 className="mt-2 text-2xl font-semibold">{new Date(slot.date).toLocaleDateString('es-AR')}</h3>
            </div>
            <span className={cn('rounded-full border px-3 py-1 text-xs font-semibold', statusStyles[slot.status])}>
              {statusLabel[slot.status]}
            </span>
          </div>
          <p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">{slot.note}</p>
        </article>
      ))}
    </div>
  )
}
