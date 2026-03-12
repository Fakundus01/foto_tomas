import type { BookingRequestPayload, QuoteRequestResponse } from '@/entities/booking/types'
import { httpClient } from '@/shared/api/httpClient'

type QuoteRequestApiResponse = {
  booking_id: string
  lead_id: string
  status: string
  guest_checkout_token: string
}

export async function createQuoteRequest(payload: BookingRequestPayload): Promise<QuoteRequestResponse> {
  const response = await httpClient.post<QuoteRequestApiResponse>('/bookings/quote-request', payload)

  return {
    bookingId: response.data.booking_id,
    leadId: response.data.lead_id,
    status: response.data.status,
    guestCheckoutToken: response.data.guest_checkout_token,
  }
}
