import type { FaqItem } from '@/entities/content/types'
import { SectionNotice } from '@/shared/ui/SectionNotice'
import { SectionHeading } from '@/shared/ui/SectionHeading'

type FaqSectionProps = {
  error: string | null
  items: FaqItem[]
  loading: boolean
}

export function FaqSection({ error, items, loading }: FaqSectionProps) {
  return (
    <section className="page-shell py-12">
      <SectionHeading
        eyebrow="FAQ"
        title="Preguntas frecuentes para bajar friccion antes del contacto."
        description="Este contenido queda listo para convertirse en registros administrables desde el panel."
      />
      {error ? <div className="mt-8"><SectionNotice tone="error">{error}</SectionNotice></div> : null}
      {loading && !items.length ? (
        <div className="mt-8 space-y-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="glass-panel h-24 animate-pulse rounded-[1.75rem]" />
          ))}
        </div>
      ) : (
        <div className="mt-8 space-y-4">
          {items.map((item) => (
            <details key={item.id} className="glass-panel rounded-[1.75rem] p-5">
              <summary className="cursor-pointer text-lg font-semibold">{item.question}</summary>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{item.answer}</p>
            </details>
          ))}
        </div>
      )}
    </section>
  )
}
