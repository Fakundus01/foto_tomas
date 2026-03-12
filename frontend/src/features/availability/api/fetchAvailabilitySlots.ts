import type { AvailabilitySlot } from '@/entities/booking/types'
import type { EventType } from '@/entities/service/types'
import { httpClient } from '@/shared/api/httpClient'

type AvailabilityApiResponse = {
  items: Array<{
    id: string
    event_type: EventType
    event_date: string
    status: AvailabilitySlot['status']
    note: string
  }>
}

export async function fetchAvailabilitySlots(eventType?: EventType): Promise<AvailabilitySlot[]> {
  const response = await httpClient.get<AvailabilityApiResponse>('/availability/slots', {
    params: eventType ? { event_type: eventType } : undefined,
  })

  return response.data.items.map((item) => ({
    id: item.id,
    eventType: item.event_type,
    date: item.event_date,
    status: item.status,
    note: item.note,
  }))
}
