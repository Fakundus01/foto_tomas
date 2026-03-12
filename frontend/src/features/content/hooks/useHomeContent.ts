import { fetchHomeContent } from '@/features/content/api/fetchHomeContent'
import { useApiResource } from '@/shared/hooks/useApiResource'

export function useHomeContent() {
  return useApiResource(fetchHomeContent, [])
}
