import { useState } from 'react'
import type { EventType } from '@/entities/service/types'
import { EventTypeFilter } from '@/features/catalog/components/EventTypeFilter'
import { PackCard } from '@/features/catalog/components/PackCard'
import { PackComparisonTable } from '@/features/catalog/components/PackComparisonTable'
import { servicePacks } from '@/features/catalog/model/packs'
import { SectionHeading } from '@/shared/ui/SectionHeading'

type CatalogSectionProps = {
  compact?: boolean
}

export function CatalogSection({ compact = false }: CatalogSectionProps) {
  const [selectedType, setSelectedType] = useState<EventType | 'all'>('all')

  const visiblePacks =
    selectedType === 'all' ? servicePacks : servicePacks.filter((pack) => pack.eventType === selectedType)

  return (
    <section className="page-shell py-12">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Servicios y packs"
          title="Cards, comparativa y CTA listos para mostrar valor rapido."
          description="Este modulo puede crecer despues con detalle de pack, extras, filtros avanzados y datos reales desde API."
        />
        <EventTypeFilter selected={selectedType} onSelect={setSelectedType} />
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {(compact ? visiblePacks.slice(0, 3) : visiblePacks).map((pack) => (
          <PackCard key={pack.id} pack={pack} />
        ))}
      </div>

      {!compact ? (
        <div className="mt-8">
          <PackComparisonTable packs={visiblePacks} />
        </div>
      ) : null}
    </section>
  )
}
