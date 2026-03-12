import { BrandLockup } from '@/shared/ui/BrandLockup'

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-[#0c0e12]/92 text-white">
      <div className="page-shell grid gap-8 py-12 md:grid-cols-3">
        <div>
          <BrandLockup />
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/68">
            Plataforma pensada para ordenar agenda, packs, reservas y seguimiento comercial.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--color-accent)]">Contacto</p>
          <ul className="mt-4 space-y-2 text-sm text-white/68">
            <li>Buenos Aires, Argentina</li>
            <li>hola@fototomasvideo.com</li>
            <li>+54 9 11 0000 0000</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--color-accent)]">Cobertura</p>
          <ul className="mt-4 space-y-2 text-sm text-white/68">
            <li>XV y celebraciones premium</li>
            <li>Bodas con narrativa audiovisual</li>
            <li>Eventos sociales y corporativos boutique</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
