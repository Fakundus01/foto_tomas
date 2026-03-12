import { faqItems } from '@/shared/constants/siteContent'
import { SectionHeading } from '@/shared/ui/SectionHeading'

export function FaqSection() {
  return (
    <section className="page-shell py-12">
      <SectionHeading
        eyebrow="FAQ"
        title="Preguntas frecuentes para bajar friccion antes del contacto."
        description="Este contenido queda listo para convertirse en registros administrables desde el panel."
      />
      <div className="mt-8 space-y-4">
        {faqItems.map((item) => (
          <details key={item.question} className="glass-panel rounded-[1.75rem] p-5">
            <summary className="cursor-pointer text-lg font-semibold">{item.question}</summary>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
