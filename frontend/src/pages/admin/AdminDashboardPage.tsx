import { AdminKpiCard } from '@/features/admin/components/AdminKpiCard'
import { adminKpis } from '@/shared/constants/siteContent'

const modules = [
  'Servicios',
  'Packs',
  'Agenda',
  'Clientes',
  'Leads',
  'Reservas',
  'Pagos',
  'Testimonios',
  'Galeria',
  'Redes',
]

export function AdminDashboardPage() {
  return (
    <section className="page-shell py-12">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-accent)]">Panel admin</p>
          <h1 className="mt-3 text-5xl font-semibold">Dashboard inicial listo para crecer por feature.</h1>
        </div>
        <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)]">
          La idea es separar cada modulo en su propia feature y evitar una pagina admin monstruosa.
        </p>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {adminKpis.map((item) => (
          <AdminKpiCard key={item.label} {...item} />
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {modules.map((module) => (
          <article key={module} className="glass-panel rounded-[1.5rem] p-5">
            <p className="text-lg font-semibold">{module}</p>
            <p className="mt-2 text-sm text-[var(--color-muted)]">Base lista para tabla, formulario y permisos por rol.</p>
          </article>
        ))}
      </div>
    </section>
  )
}
