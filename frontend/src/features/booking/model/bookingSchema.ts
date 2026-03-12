import { z } from 'zod'

export const bookingFormSchema = z.object({
  firstName: z.string().min(2, 'Ingresa un nombre valido.'),
  lastName: z.string().min(2, 'Ingresa un apellido valido.'),
  email: z.email('Ingresa un email valido.'),
  phone: z.string().min(8, 'Ingresa un telefono valido.'),
  eventType: z.enum(['xv', 'boda', 'social']),
  eventDate: z.string().min(1, 'Selecciona una fecha.'),
  venue: z.string().min(3, 'Indica el lugar del evento.'),
  guestCount: z.coerce.number().int().min(20, 'La cantidad minima sugerida es 20.'),
  packInterest: z.string().min(2, 'Selecciona un pack de interes.'),
  comments: z.string().min(10, 'Agrega un poco mas de contexto.'),
  consent: z.boolean().refine((value) => value, 'Necesitamos tu consentimiento para contactarte.'),
})

export type BookingFormInput = z.input<typeof bookingFormSchema>
export type BookingFormValues = z.output<typeof bookingFormSchema>
