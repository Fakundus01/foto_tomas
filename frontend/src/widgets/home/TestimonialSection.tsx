import { testimonials } from '@/shared/constants/siteContent'
import { SectionHeading } from '@/shared/ui/SectionHeading'

export function TestimonialSection() {
  return (
    <section className="page-shell py-12">
      <SectionHeading
        eyebrow="Testimonios"
        title="Prueba social con un tono mas editorial que promocional."
        description="El objetivo es sostener confianza y empujar al siguiente paso: consulta, cita o reserva."
      />
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article key={testimonial.id} className="glass-panel rounded-[1.75rem] p-6">
            <p className="text-lg leading-8 text-[var(--color-ink)]">"{testimonial.quote}"</p>
            <div className="mt-6">
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-[var(--color-muted)]">{testimonial.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
