import { motion } from 'framer-motion'
import type { ServicePack } from '@/entities/service/types'
import { Badge } from '@/shared/ui/Badge'
import { Button } from '@/shared/ui/Button'

type PackCardProps = {
  pack: ServicePack
}

const badgeLabels = {
  premium: 'Premium',
  recomendado: 'Recomendado',
  mas_vendido: 'Mas vendido',
}

export function PackCard({ pack }: PackCardProps) {
  return (
    <motion.article
      className="glass-panel rounded-[2rem] p-6"
      initial={{ opacity: 0, y: 24 }}
      viewport={{ once: true, amount: 0.2 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          {pack.badge ? <Badge>{badgeLabels[pack.badge]}</Badge> : null}
          <h3 className="text-3xl font-semibold">{pack.title}</h3>
          <p className="text-sm leading-7 text-[var(--color-muted)]">{pack.summary}</p>
        </div>
        <div className="rounded-3xl bg-[var(--color-accent)]/8 px-4 py-3 text-right">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">Desde</p>
          <p className="mt-2 text-2xl font-extrabold text-[var(--color-accent-strong)]">{pack.priceFrom}</p>
        </div>
      </div>
      <ul className="mt-6 space-y-3 text-sm text-[var(--color-muted)]">
        {pack.includes.map((item) => (
          <li key={item} className="rounded-2xl border border-[var(--color-border)] bg-white/55 px-4 py-3">
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-sm font-medium text-[var(--color-muted)]">{pack.turnaround}</p>
        <Button href="/reservas">Consultar pack</Button>
      </div>
    </motion.article>
  )
}
