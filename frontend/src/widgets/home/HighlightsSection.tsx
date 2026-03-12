import { SectionHeading } from '@/shared/ui/SectionHeading'

const highlightItems = [
  {
    title: 'Servicios destacados',
    text: 'Packs listos para XV, bodas y eventos sociales con badges y comparativa.',
  },
  {
    title: 'Disponibilidad visible',
    text: 'Estados fuertes para fechas disponibles, pendientes y ocupadas.',
  },
  {
    title: 'Consulta guiada',
    text: 'Formulario modular con validacion fuerte y payload listo para backend.',
  },
  {
    title: 'Chat lateral',
    text: 'Widget persistente con arbol de conversacion y salida a WhatsApp.',
  },
]

export function HighlightsSection() {
  return (
    <section className="page-shell py-12">
      <SectionHeading
        eyebrow="Lo esencial del MVP"
        title="Una home preparada para conversion y para evolucionar sin rehacer todo."
        description="Cada bloque de la landing ya corresponde a un modulo real del producto para que el frontend no sea solo una maqueta."
      />
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {highlightItems.map((item) => (
          <article key={item.title} className="glass-panel rounded-[1.75rem] p-5">
            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
