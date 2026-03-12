import { NavLink } from 'react-router-dom'
import { cn } from '@/shared/lib/cn'
import { navigationItems } from '@/shared/constants/navigation'
import { Button } from '@/shared/ui/Button'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/40 bg-[#fff7ef]/80 backdrop-blur-xl">
      <div className="page-shell flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[var(--color-accent)]">Foto Tomas Video</p>
          <p className="mt-1 text-sm text-[var(--color-muted)]">Eventos sociales con foco en XV, bodas y experiencias premium.</p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <nav className="flex flex-wrap gap-3 text-sm font-semibold">
            {navigationItems.map((item) => (
              <NavLink
                key={item.href}
                className={({ isActive }) =>
                  cn(
                    'rounded-full px-3 py-2 transition hover:bg-white/60',
                    isActive && 'bg-white text-[var(--color-accent-strong)] shadow-sm',
                  )
                }
                to={item.href}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Button href="/reservas">Pedir propuesta</Button>
        </div>
      </div>
    </header>
  )
}
