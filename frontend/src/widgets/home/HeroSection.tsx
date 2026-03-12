import { motion } from 'framer-motion'
import { Badge } from '@/shared/ui/Badge'
import { BrandLockup } from '@/shared/ui/BrandLockup'
import { Button } from '@/shared/ui/Button'

export function HeroSection() {
  return (
    <section className="page-shell py-12 sm:py-16 lg:py-20">
      <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Badge>Plataforma comercial + reservas</Badge>
          <h1 className="max-w-4xl text-5xl font-semibold leading-none text-balance sm:text-6xl lg:text-7xl">
            Una identidad mas cinematica, sobria y dorada para Foto Tomas Video.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
            Tome la referencia del logo para llevar la web a un lenguaje visual mas grafito, metalico y premium, sin
            perder claridad comercial ni legibilidad.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/reservas">Reservar una cita</Button>
            <Button href="/servicios" variant="secondary">
              Ver packs y servicios
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="glass-panel rounded-[1.75rem] p-4">
              <p className="text-3xl font-semibold">+120</p>
              <p className="text-sm text-[var(--color-muted)]">Eventos cubiertos con enfoque editorial.</p>
            </div>
            <div className="glass-panel rounded-[1.75rem] p-4">
              <p className="text-3xl font-semibold">48h</p>
              <p className="text-sm text-[var(--color-muted)]">Primer teaser para mantener la emocion activa.</p>
            </div>
            <div className="glass-panel rounded-[1.75rem] p-4">
              <p className="text-3xl font-semibold">1 sola base</p>
              <p className="text-sm text-[var(--color-muted)]">Contenido, agenda y operacion listos para crecer.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="brand-panel relative overflow-hidden rounded-[2.5rem] p-6 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="absolute inset-x-6 top-6 h-px metal-line opacity-70" />
          <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-[var(--color-accent)]/15 blur-3xl" />
          <div className="absolute -left-16 bottom-8 h-32 w-32 rounded-full bg-white/8 blur-3xl" />
          <div className="aspect-[4/5] rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))] p-6">
            <div className="flex h-full flex-col justify-between rounded-[1.75rem] border border-white/10 bg-black/18 p-6">
              <div className="flex items-center justify-between text-sm">
                <BrandLockup />
                <span className="rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-3 py-1 text-[0.7rem] uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  Disponibilidad limitada
                </span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">Sello visual</p>
                <h2 className="mt-3 text-4xl font-semibold text-white">Grafito, contraste y un acento dorado que ordena la marca.</h2>
              </div>
              <div className="grid gap-3 text-sm text-white/72">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Direccion de arte inspirada en el logo real</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Monograma F7V reutilizable en header y footer</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Base lista para reemplazar por el PNG o SVG final</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
