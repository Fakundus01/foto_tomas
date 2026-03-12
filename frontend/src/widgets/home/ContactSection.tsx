import type { ContactSetting, SocialLink } from '@/entities/site/types'
import { Button } from '@/shared/ui/Button'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import { SectionNotice } from '@/shared/ui/SectionNotice'

type ContactSectionProps = {
  contact: ContactSetting | undefined
  error: string | null
  loading: boolean
  socialLinks: SocialLink[]
}

export function ContactSection({ contact, error, loading, socialLinks }: ContactSectionProps) {
  return (
    <section className="page-shell py-12">
      <div className="glass-panel grid gap-8 rounded-[2rem] p-6 sm:p-8 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <SectionHeading
            eyebrow="Contacto"
            title="Deja una consulta o pasemos directo a una reunion."
            description="El sitio ya toma email, telefono, ciudad y redes desde configuracion publica para que despues lo administres sin tocar codigo."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/reservas">Pedir propuesta</Button>
            <Button href={socialLinks.find((item) => item.platform === 'whatsapp')?.url ?? '/reservas'} variant="secondary">
              Abrir WhatsApp
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          {error ? <SectionNotice tone="error">{error}</SectionNotice> : null}
          <article className="rounded-[1.5rem] border border-[var(--color-border)] bg-white/65 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">Canales</p>
            {loading && !contact ? (
              <div className="mt-4 space-y-3">
                <div className="h-5 w-2/3 animate-pulse rounded bg-black/10" />
                <div className="h-5 w-1/2 animate-pulse rounded bg-black/10" />
                <div className="h-5 w-1/3 animate-pulse rounded bg-black/10" />
              </div>
            ) : (
              <ul className="mt-4 space-y-3 text-sm text-[var(--color-muted)]">
                <li>{contact?.email ?? 'hola@fototomasvideo.com'}</li>
                <li>{contact?.phone ?? '+54 9 11 0000 0000'}</li>
                <li>{contact?.city ?? 'Buenos Aires, Argentina'}</li>
              </ul>
            )}
          </article>
          <article className="rounded-[1.5rem] border border-[var(--color-border)] bg-white/65 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">Redes</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.platform}
                  className="rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-semibold transition hover:border-[var(--color-accent)]"
                  href={item.url}
                  rel="noreferrer"
                  target="_blank"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
