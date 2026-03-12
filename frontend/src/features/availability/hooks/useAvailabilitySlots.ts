import { useEffect, useState } from 'react'
import type { AvailabilitySlot } from '@/entities/booking/types'
import type { EventType } from '@/entities/service/types'

const mockSlots: AvailabilitySlot[] = [
  { id: '1', date: '2026-04-18', status: 'available', eventType: 'xv', note: 'Sabado prime' },
  { id: '2', date: '2026-04-25', status: 'pending', eventType: 'xv', note: 'En revision comercial' },
  { id: '3', date: '2026-05-02', status: 'booked', eventType: 'boda', note: 'Cierre confirmado' },
  { id: '4', date: '2026-05-16', status: 'available', eventType: 'boda', note: 'Ideal para golden hour' },
  { id: '5', date: '2026-05-23', status: 'available', eventType: 'social', note: 'Equipo completo libre' },
]

type UseAvailabilitySlotsResult = {
  slots: AvailabilitySlot[]
  loading: boolean
  error: string | null
}

export function useAvailabilitySlots(eventType?: EventType): UseAvailabilitySlotsResult {
  const [state, setState] = useState<UseAvailabilitySlotsResult>({
    slots: [],
    loading: true,
    error: null,
  })

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const filtered = eventType ? mockSlots.filter((slot) => slot.eventType === eventType) : mockSlots

      setState({
        slots: filtered,
        loading: false,
        error: null,
      })
    }, 300)

    return () => window.clearTimeout(timer)
  }, [eventType])

  return state
}
