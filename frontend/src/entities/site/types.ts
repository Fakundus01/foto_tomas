export interface SocialLink {
  platform: string
  label: string
  url: string
}

export interface HeroSetting {
  title?: string
  subtitle?: string
}

export interface ContactSetting {
  email?: string
  phone?: string
  city?: string
}

export interface SiteSettings {
  hero?: HeroSetting
  contact?: ContactSetting
  [key: string]: unknown
}

export interface PublicSitePayload {
  settings: SiteSettings
  socialLinks: SocialLink[]
}
