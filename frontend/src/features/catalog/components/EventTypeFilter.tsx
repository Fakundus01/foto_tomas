import type { EventType } from '@/entities/service/types'
import { cn } from '@/shared/lib/cn'

type EventTypeFilterProps = {
  selected: EventType | 'all'
  onSelect: (value: EventType | 'all') => void
}

const options: Array<{ label: string; value: EventType | 'all' }> = [
  { label: 'Todos', value: 'all' },
  { label: 'XV', value: 'xv' },
  { label: 'Bodas', value: 'boda' },
  { label: 'Sociales', value: 'social' },
]

export function EventTypeFilter({ selected, onSelect }: EventTypeFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => (
        <button
          key={option.value}
          className={cn(
            'rounded-full border px-4 py-2 text-sm font-semibold transition',
            selected === option.value
              ? 'border-[var(--color-accent)] bg-[var(--color-accent)] text-white'
              : 'border-[var(--color-border)] bg-white/60 text-[var(--color-muted)] hover:bg-white',
          )}
          onClick={() => onSelect(option.value)}
          type="button"
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
