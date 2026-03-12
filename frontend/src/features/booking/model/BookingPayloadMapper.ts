import type { BookingRequestPayload } from '@/entities/booking/types'
import type { BookingFormValues } from '@/features/booking/model/bookingSchema'

export class BookingPayloadMapper {
  static toApiPayload(values: BookingFormValues): BookingRequestPayload {
    return {
      full_name: `${values.firstName} ${values.lastName}`,
      email: values.email,
      phone: values.phone,
      event_type: values.eventType,
      event_date: values.eventDate,
      venue: values.venue,
      guest_count: values.guestCount,
      pack_interest: values.packInterest,
      comments: values.comments,
      contact_consent: values.consent,
    }
  }
}
