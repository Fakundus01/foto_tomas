import type { EventType } from '@/entities/service/types'
import { fetchAvailabilitySlots } from '@/features/availability/api/fetchAvailabilitySlots'
import { useApiResource } from '@/shared/hooks/useApiResource'

export function useAvailabilitySlots(eventType?: EventType) {
  const state = useApiResource(() => fetchAvailabilitySlots(eventType), [eventType])

  return {
    slots: state.data ?? [],
    loading: state.loading,
    error: state.error,
  }
}
