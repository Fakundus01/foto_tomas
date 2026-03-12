import { useState } from 'react'
import type { EventType } from '@/entities/service/types'
import { useCatalogPacks } from '@/features/catalog/hooks/useCatalogPacks'
import { EventTypeFilter } from '@/features/catalog/components/EventTypeFilter'
import { PackCard } from '@/features/catalog/components/PackCard'
import { PackComparisonTable } from '@/features/catalog/components/PackComparisonTable'
import { servicePacks } from '@/features/catalog/model/packs'
import { SectionNotice } from '@/shared/ui/SectionNotice'
import { SectionHeading } from '@/shared/ui/SectionHeading'

type CatalogSectionProps = {
  compact?: boolean
}

export function CatalogSection({ compact = false }: CatalogSectionProps) {
  const [selectedType, setSelectedType] = useState<EventType | 'all'>('all')
  const { data, error, loading } = useCatalogPacks()
  const sourcePacks = data?.length ? data : servicePacks

  const visiblePacks =
    selectedType === 'all' ? sourcePacks : sourcePacks.filter((pack) => pack.eventType === selectedType)

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

      {error ? <div className="mt-6"><SectionNotice tone="error">No pude cargar el catalogo real. Muestro la base local como respaldo.</SectionNotice></div> : null}

      {loading && !data ? (
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {Array.from({ length: compact ? 3 : 3 }).map((_, index) => (
            <div key={index} className="glass-panel h-72 animate-pulse rounded-[2rem]" />
          ))}
        </div>
      ) : (
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {(compact ? visiblePacks.slice(0, 3) : visiblePacks).map((pack) => (
            <PackCard key={pack.id} pack={pack} />
          ))}
        </div>
      )}

      {!compact ? (
        <div className="mt-8">
          <PackComparisonTable packs={visiblePacks} />
        </div>
      ) : null}
    </section>
  )
}
