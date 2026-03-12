import { fetchPublicSettings } from '@/features/site/api/fetchPublicSettings'
import { useApiResource } from '@/shared/hooks/useApiResource'

export function usePublicSettings() {
  return useApiResource(fetchPublicSettings, [])
}
