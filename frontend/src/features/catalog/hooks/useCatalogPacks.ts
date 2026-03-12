import { fetchCatalog } from '@/features/catalog/api/fetchCatalog'
import { useApiResource } from '@/shared/hooks/useApiResource'

export function useCatalogPacks() {
  return useApiResource(fetchCatalog, [])
}
