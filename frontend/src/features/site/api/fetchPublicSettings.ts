import type { PublicSitePayload } from '@/entities/site/types'
import { httpClient } from '@/shared/api/httpClient'

type SiteSettingsApiResponse = {
  settings: PublicSitePayload['settings']
  social_links: PublicSitePayload['socialLinks']
}

export async function fetchPublicSettings(): Promise<PublicSitePayload> {
  const response = await httpClient.get<SiteSettingsApiResponse>('/settings/public')

  return {
    settings: response.data.settings,
    socialLinks: response.data.social_links,
  }
}
