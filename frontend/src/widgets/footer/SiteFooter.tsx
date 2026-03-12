export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[var(--color-border)] bg-white/40">
      <div className="page-shell grid gap-8 py-12 md:grid-cols-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[var(--color-accent)]">Estudio</p>
          <h2 className="mt-3 text-3xl font-semibold">Foto Tomas Video</h2>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--color-muted)]">
            Plataforma pensada para ordenar agenda, packs, reservas y seguimiento comercial.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Contacto</p>
          <ul className="mt-4 space-y-2 text-sm text-[var(--color-muted)]">
            <li>Buenos Aires, Argentina</li>
            <li>hola@fototomasvideo.com</li>
            <li>+54 9 11 0000 0000</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Cobertura</p>
          <ul className="mt-4 space-y-2 text-sm text-[var(--color-muted)]">
            <li>XV y celebraciones premium</li>
            <li>Bodas con narrativa audiovisual</li>
            <li>Eventos sociales y corporativos boutique</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
