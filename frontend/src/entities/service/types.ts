export type EventType = 'xv' | 'boda' | 'social'
export type PackBadge = 'premium' | 'recomendado' | 'mas_vendido'

export interface ServicePack {
  id: string
  title: string
  eventType: EventType
  priceFrom: string
  summary: string
  includes: string[]
  badge?: PackBadge
  turnaround: string
}
