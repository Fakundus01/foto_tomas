import type { ServicePack } from '@/entities/service/types'

type PackComparisonTableProps = {
  packs: ServicePack[]
}

export function PackComparisonTable({ packs }: PackComparisonTableProps) {
  return (
    <div className="glass-panel overflow-hidden rounded-[2rem]">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-[var(--color-accent)] text-white">
            <tr>
              <th className="px-5 py-4 font-semibold">Pack</th>
              <th className="px-5 py-4 font-semibold">Tipo</th>
              <th className="px-5 py-4 font-semibold">Incluye</th>
              <th className="px-5 py-4 font-semibold">Entrega</th>
              <th className="px-5 py-4 font-semibold">Desde</th>
            </tr>
          </thead>
          <tbody>
            {packs.map((pack) => (
              <tr key={pack.id} className="border-t border-[var(--color-border)] bg-white/65">
                <td className="px-5 py-4 font-semibold text-[var(--color-ink)]">{pack.title}</td>
                <td className="px-5 py-4 uppercase text-[var(--color-muted)]">{pack.eventType}</td>
                <td className="px-5 py-4 text-[var(--color-muted)]">{pack.includes.join(' · ')}</td>
                <td className="px-5 py-4 text-[var(--color-muted)]">{pack.turnaround}</td>
                <td className="px-5 py-4 font-semibold text-[var(--color-accent-strong)]">{pack.priceFrom}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
