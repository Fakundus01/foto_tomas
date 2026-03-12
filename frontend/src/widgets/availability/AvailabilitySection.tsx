import type { EventType } from '@/entities/service/types'
import { AvailabilityTimeline } from '@/features/availability/components/AvailabilityTimeline'
import { useAvailabilitySlots } from '@/features/availability/hooks/useAvailabilitySlots'
import { SectionHeading } from '@/shared/ui/SectionHeading'

type AvailabilitySectionProps = {
  eventType?: EventType
}

export function AvailabilitySection({ eventType }: AvailabilitySectionProps) {
  const { slots, loading } = useAvailabilitySlots(eventType)

  return (
    <section className="page-shell py-12">
      <SectionHeading
        eyebrow="Agenda"
        title="Estados visuales fuertes para fechas disponibles, pendientes y tomadas."
        description="La estructura ya soporta un hook desacoplado y la futura conexion con la API de disponibilidad."
      />
      <div className="mt-8">
        <AvailabilityTimeline loading={loading} slots={slots} />
      </div>
    </section>
  )
}
