import { NavLink } from 'react-router-dom'
import { cn } from '@/shared/lib/cn'
import { navigationItems } from '@/shared/constants/navigation'
import { BrandLockup } from '@/shared/ui/BrandLockup'
import { Button } from '@/shared/ui/Button'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0f1115]/82 backdrop-blur-xl">
      <div className="page-shell flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <BrandLockup compact />
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <nav className="flex flex-wrap gap-3 text-sm font-semibold">
            {navigationItems.map((item) => (
              <NavLink
                key={item.href}
                className={({ isActive }) =>
                  cn(
                    'rounded-full px-3 py-2 text-white/76 transition hover:bg-white/8 hover:text-white',
                    isActive && 'bg-[var(--color-accent)] text-[#111111] shadow-sm',
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
