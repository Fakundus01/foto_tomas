import type { HomeContent } from '@/entities/content/types'
import { httpClient } from '@/shared/api/httpClient'

type HomeContentApiResponse = {
  faqs: Array<{
    id: string
    question: string
    answer: string
  }>
  testimonials: Array<{
    id: string
    client_name: string
    role_label: string
    quote: string
  }>
  gallery_items: Array<{
    id: string
    title: string
    asset_url: string
    asset_type: string
    event_type: string
  }>
}

export async function fetchHomeContent(): Promise<HomeContent> {
  const response = await httpClient.get<HomeContentApiResponse>('/content/home')

  return {
    faqs: response.data.faqs,
    testimonials: response.data.testimonials.map((item) => ({
      id: item.id,
      clientName: item.client_name,
      roleLabel: item.role_label,
      quote: item.quote,
    })),
    galleryItems: response.data.gallery_items.map((item) => ({
      id: item.id,
      title: item.title,
      assetUrl: item.asset_url,
      assetType: item.asset_type,
      eventType: item.event_type,
    })),
  }
}
