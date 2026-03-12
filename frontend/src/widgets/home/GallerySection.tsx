import type { GalleryItem } from '@/entities/content/types'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import { SectionNotice } from '@/shared/ui/SectionNotice'

type GallerySectionProps = {
  error: string | null
  items: GalleryItem[]
  loading: boolean
}

export function GallerySection({ error, items, loading }: GallerySectionProps) {
  return (
    <section className="page-shell py-12">
      <SectionHeading
        eyebrow="Galeria"
        title="Prueba visual del trabajo real con espacio para crecer a portfolio administrable."
        description="Esta seccion ya queda lista para consumir assets desde backend y despues migrar a Cloudinary o S3."
      />

      {error ? <div className="mt-8"><SectionNotice tone="error">{error}</SectionNotice></div> : null}

      {loading && !items.length ? (
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="glass-panel aspect-[4/5] animate-pulse rounded-[1.75rem]" />
          ))}
        </div>
      ) : (
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <article key={item.id} className="glass-panel overflow-hidden rounded-[1.75rem]">
              <div className="aspect-[4/5] overflow-hidden">
                <img alt={item.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" src={item.assetUrl} />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">{item.eventType}</p>
                <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
