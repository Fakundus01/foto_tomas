import { TextField } from '@/features/booking/components/TextField'
import { Button } from '@/shared/ui/Button'

export function RegisterPage() {
  return (
    <section className="page-shell py-12">
      <div className="glass-panel mx-auto max-w-xl rounded-[2rem] p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-accent)]">Registro</p>
        <h1 className="mt-3 text-5xl font-semibold">Crear cuenta</h1>
        <div className="mt-8 space-y-5">
          <TextField label="Nombre" placeholder="Camila" />
          <TextField label="Email" placeholder="camila@email.com" type="email" />
          <TextField label="Password" placeholder="********" type="password" />
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Button>Registrarme</Button>
            <Button href="/auth/login" variant="ghost">
              Ya tengo cuenta
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
