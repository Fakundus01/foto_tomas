import { TextField } from '@/features/booking/components/TextField'
import { Button } from '@/shared/ui/Button'

export function LoginPage() {
  return (
    <section className="page-shell py-12">
      <div className="glass-panel mx-auto max-w-xl rounded-[2rem] p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-accent)]">Auth base</p>
        <h1 className="mt-3 text-5xl font-semibold">Iniciar sesion</h1>
        <div className="mt-8 space-y-5">
          <TextField label="Email" placeholder="admin@fototomasvideo.com" type="email" />
          <TextField label="Password" placeholder="********" type="password" />
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Button>Entrar</Button>
            <Button href="/auth/registro" variant="ghost">
              Crear cuenta
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
