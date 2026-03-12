import { SectionHeading } from '@/shared/ui/SectionHeading'

export function AboutSection() {
  return (
    <section className="page-shell py-12">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Sobre el estudio"
          title="Una experiencia comercial ordenada desde la primera consulta."
          description="La propuesta combina presencia premium, claridad comercial y una base tecnica lista para packs, agenda, chat, pagos y panel admin."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <article className="glass-panel rounded-[2rem] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">Proceso</p>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              Consulta, recomendacion de pack, agenda, cita, reserva y seguimiento del cliente desde un solo sistema.
            </p>
          </article>
          <article className="glass-panel rounded-[2rem] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">Escala</p>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              Arquitectura por dominios y componentes chicos para sumar auth, pagos, emails y contenido editable.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
