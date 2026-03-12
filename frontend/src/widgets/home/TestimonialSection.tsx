import type { TestimonialItem } from '@/entities/content/types'
import { SectionNotice } from '@/shared/ui/SectionNotice'
import { SectionHeading } from '@/shared/ui/SectionHeading'

type TestimonialSectionProps = {
  error: string | null
  items: TestimonialItem[]
  loading: boolean
}

export function TestimonialSection({ error, items, loading }: TestimonialSectionProps) {
  return (
    <section className="page-shell py-12">
      <SectionHeading
        eyebrow="Testimonios"
        title="Prueba social con un tono mas editorial que promocional."
        description="El objetivo es sostener confianza y empujar al siguiente paso: consulta, cita o reserva."
      />
      {error ? <div className="mt-8"><SectionNotice tone="error">{error}</SectionNotice></div> : null}
      {loading && !items.length ? (
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="glass-panel h-56 animate-pulse rounded-[1.75rem]" />
          ))}
        </div>
      ) : (
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {items.map((testimonial) => (
            <article key={testimonial.id} className="glass-panel rounded-[1.75rem] p-6">
              <p className="text-lg leading-8 text-[var(--color-ink)]">"{testimonial.quote}"</p>
              <div className="mt-6">
                <p className="font-semibold">{testimonial.clientName}</p>
                <p className="text-sm text-[var(--color-muted)]">{testimonial.roleLabel}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
