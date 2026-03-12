import type { EventType } from '@/entities/service/types'

export type AvailabilityStatus = 'available' | 'pending' | 'booked'

export interface AvailabilitySlot {
  id: string
  date: string
  status: AvailabilityStatus
  eventType: EventType
  note: string
}

export interface BookingRequestPayload {
  full_name: string
  email: string
  phone: string
  event_type: EventType
  event_date: string
  venue: string
  guest_count: number
  pack_interest: string
  comments: string
  contact_consent: boolean
}

export interface QuoteRequestResponse {
  bookingId: string
  leadId: string
  status: string
  guestCheckoutToken: string
}
