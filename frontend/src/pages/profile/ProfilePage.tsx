import type { UserProfile } from '@/entities/user/types'
import { Badge } from '@/shared/ui/Badge'

const mockProfile: UserProfile = {
  displayName: 'Invitado premium',
  email: 'guest@fototomasvideo.com',
  role: 'guest',
  activeBooking: 'Pre-reserva XV Signature para 18/04/2026',
  meetingStatus: 'Reunion virtual sugerida para el viernes 19:00',
}

export function ProfilePage() {
  return (
    <section className="page-shell py-12">
      <div className="glass-panel grid gap-8 rounded-[2rem] p-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-4">
          <Badge>{mockProfile.role}</Badge>
          <h1 className="text-5xl font-semibold">{mockProfile.displayName}</h1>
          <p className="text-sm text-[var(--color-muted)]">{mockProfile.email}</p>
        </div>
        <div className="grid gap-4">
          <article className="rounded-[1.75rem] bg-white/70 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">Reserva activa</p>
            <p className="mt-3 text-lg">{mockProfile.activeBooking}</p>
          </article>
          <article className="rounded-[1.75rem] bg-white/70 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">Cita</p>
            <p className="mt-3 text-lg">{mockProfile.meetingStatus}</p>
          </article>
        </div>
      </div>
    </section>
  )
}
