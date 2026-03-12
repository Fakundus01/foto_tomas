import { usePublicSettings } from '@/features/site/hooks/usePublicSettings'
import { BrandLockup } from '@/shared/ui/BrandLockup'
import { BrandLogoImage } from '@/shared/ui/BrandLogoImage'
import { SectionNotice } from '@/shared/ui/SectionNotice'

export function SiteFooter() {
  const { data, error } = usePublicSettings()
  const contact = data?.settings.contact

  return (
    <footer className="mt-24 border-t border-white/10 bg-[#0c0e12]/92 text-white">
      <div className="page-shell grid gap-8 py-12 md:grid-cols-3">
        <div>
          <BrandLockup />
          <BrandLogoImage className="mt-4 h-24 max-w-[14rem]" />
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/68">
            Plataforma pensada para ordenar agenda, packs, reservas y seguimiento comercial.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--color-accent)]">Contacto</p>
          {error ? <div className="mt-4"><SectionNotice tone="error">No pude cargar el contacto publico.</SectionNotice></div> : null}
          <ul className="mt-4 space-y-2 text-sm text-white/68">
            <li>{contact?.city ?? 'Buenos Aires, Argentina'}</li>
            <li>{contact?.email ?? 'hola@fototomasvideo.com'}</li>
            <li>{contact?.phone ?? '+54 9 11 0000 0000'}</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--color-accent)]">Cobertura</p>
          <ul className="mt-4 space-y-2 text-sm text-white/68">
            <li>XV y celebraciones premium</li>
            <li>Bodas con narrativa audiovisual</li>
            <li>Eventos sociales y corporativos boutique</li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            {data?.socialLinks.map((item) => (
              <a key={item.platform} className="text-white/72 transition hover:text-[var(--color-accent)]" href={item.url} rel="noreferrer" target="_blank">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
