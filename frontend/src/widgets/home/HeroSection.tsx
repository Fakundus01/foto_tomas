import { motion } from 'framer-motion'
import { Badge } from '@/shared/ui/Badge'
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
            Foto y video para eventos que quieren verse tan bien como se sienten.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
            Una base moderna para mostrar packs, agenda, testimonios, consultas y futuras reservas online sin perder la
            calidez del trato humano.
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
          className="glass-panel relative overflow-hidden rounded-[2.5rem] p-6"
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="aspect-[4/5] rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_rgba(145,100,70,0.35))] p-6">
            <div className="flex h-full flex-col justify-between rounded-[1.75rem] border border-white/50 bg-white/35 p-6">
              <div className="flex items-center justify-between text-sm">
                <span>XV Signature</span>
                <span>Disponibilidad limitada</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">Propuesta destacada</p>
                <h2 className="mt-3 text-4xl font-semibold">Narrativa premium con foco en emocion real.</h2>
              </div>
              <div className="grid gap-3 text-sm text-[var(--color-muted)]">
                <div className="rounded-2xl bg-white/70 px-4 py-3">Cobertura foto + video + reel vertical</div>
                <div className="rounded-2xl bg-white/70 px-4 py-3">Agenda visible y cierre con cita previa</div>
                <div className="rounded-2xl bg-white/70 px-4 py-3">Reserva guiada para invitado o usuario</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
