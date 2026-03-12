import type { ServicePack } from '@/entities/service/types'
import { httpClient } from '@/shared/api/httpClient'

type CatalogApiResponse = {
  items: Array<{
    id: string
    title: string
    service_name: string
    event_type: ServicePack['eventType']
    price_from: string
    summary: string
    includes: string[]
    badge?: ServicePack['badge']
    turnaround: string
  }>
}

export async function fetchCatalog(): Promise<ServicePack[]> {
  const response = await httpClient.get<CatalogApiResponse>('/services/catalog')

  return response.data.items.map((item) => ({
    id: item.id,
    title: item.title,
    serviceName: item.service_name,
    eventType: item.event_type,
    priceFrom: item.price_from,
    summary: item.summary,
    includes: item.includes,
    badge: item.badge,
    turnaround: item.turnaround,
  }))
}
