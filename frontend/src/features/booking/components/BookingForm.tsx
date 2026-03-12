import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { servicePacks } from '@/features/catalog/model/packs'
import { BookingPayloadMapper } from '@/features/booking/model/BookingPayloadMapper'
import { TextField, TextareaField } from '@/features/booking/components/TextField'
import { bookingFormSchema, type BookingFormInput, type BookingFormValues } from '@/features/booking/model/bookingSchema'
import { Button } from '@/shared/ui/Button'

export function BookingForm() {
  const [submittedPayload, setSubmittedPayload] = useState<string>('')
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm<BookingFormInput, undefined, BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      eventType: 'xv',
    },
  })

  const onSubmit = async (values: BookingFormValues) => {
    const payload = BookingPayloadMapper.toApiPayload(values)

    await new Promise((resolve) => window.setTimeout(resolve, 300))
    setSubmittedPayload(JSON.stringify(payload, null, 2))
    reset({ eventType: values.eventType, consent: true })
  }

  return (
    <section className="glass-panel rounded-[2rem] p-6 sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-accent)]">Consulta guiada</p>
          <h2 className="mt-3 text-4xl font-semibold">Reserva o pedi una reunion</h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-[var(--color-muted)]">
          El formulario ya queda listo para mapearse al backend y soportar modo invitado.
        </p>
      </div>

      <form className="mt-8 grid gap-5 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
        <TextField error={errors.firstName?.message} label="Nombre" placeholder="Camila" {...register('firstName')} />
        <TextField error={errors.lastName?.message} label="Apellido" placeholder="Lopez" {...register('lastName')} />
        <TextField error={errors.email?.message} label="Email" placeholder="camila@email.com" type="email" {...register('email')} />
        <TextField error={errors.phone?.message} label="Telefono" placeholder="11 5555 5555" {...register('phone')} />

        <label className="block text-sm font-medium">
          Tipo de evento
          <select className="mt-2 w-full rounded-3xl border border-[var(--color-border)] bg-white/80 px-4 py-3 text-sm" {...register('eventType')}>
            <option value="xv">XV</option>
            <option value="boda">Boda</option>
            <option value="social">Social</option>
          </select>
          {errors.eventType?.message ? <span className="mt-2 block text-xs text-rose-600">{errors.eventType.message}</span> : null}
        </label>

        <TextField error={errors.eventDate?.message} label="Fecha del evento" type="date" {...register('eventDate')} />
        <TextField error={errors.venue?.message} label="Lugar" placeholder="Salon o ciudad" {...register('venue')} />
        <TextField error={errors.guestCount?.message} label="Invitados estimados" placeholder="150" type="number" {...register('guestCount')} />

        <label className="block text-sm font-medium md:col-span-2">
          Pack de interes
          <select className="mt-2 w-full rounded-3xl border border-[var(--color-border)] bg-white/80 px-4 py-3 text-sm" {...register('packInterest')}>
            <option value="">Elegi un pack</option>
            {servicePacks.map((pack) => (
              <option key={pack.id} value={pack.title}>
                {pack.title}
              </option>
            ))}
          </select>
          {errors.packInterest?.message ? <span className="mt-2 block text-xs text-rose-600">{errors.packInterest.message}</span> : null}
        </label>

        <div className="md:col-span-2">
          <TextareaField
            error={errors.comments?.message}
            label="Comentarios"
            placeholder="Contanos si queres teaser, drone, meeting virtual o cobertura extendida."
            {...register('comments')}
          />
        </div>

        <label className="md:col-span-2 flex items-start gap-3 rounded-3xl border border-[var(--color-border)] bg-white/70 p-4 text-sm">
          <input className="mt-1" type="checkbox" {...register('consent')} />
          <span>
            Acepto que Foto Tomas Video me contacte por email, telefono o WhatsApp para avanzar con la propuesta.
            {errors.consent?.message ? <span className="mt-2 block text-xs text-rose-600">{errors.consent.message}</span> : null}
          </span>
        </label>

        <div className="md:col-span-2 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm text-[var(--color-muted)]">Despues este flujo puede conectarse a leads, citas o reservas con seña.</p>
          <Button type="submit">{isSubmitting ? 'Enviando...' : 'Enviar consulta'}</Button>
        </div>
      </form>

      {submittedPayload ? (
        <div className="mt-6 rounded-[1.75rem] bg-[#1f1c1a] p-5 text-xs text-white">
          <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-white/70">Payload listo para backend</p>
          <pre className="overflow-x-auto">{submittedPayload}</pre>
        </div>
      ) : null}
    </section>
  )
}
