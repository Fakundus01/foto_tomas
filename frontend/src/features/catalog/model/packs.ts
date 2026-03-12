import type { ServicePack } from '@/entities/service/types'

export const servicePacks: ServicePack[] = [
  {
    id: 'xv-signature',
    title: 'XV Signature',
    eventType: 'xv',
    priceFrom: '$ 1.850.000',
    summary: 'Cobertura premium para XV con enfoque editorial, teaser y album digital.',
    includes: ['2 fotografos', '1 filmmaker', 'teaser 48h', 'album digital', 'reel vertical'],
    badge: 'mas_vendido',
    turnaround: 'Entrega inicial en 7 dias',
  },
  {
    id: 'wedding-cinema',
    title: 'Wedding Cinema',
    eventType: 'boda',
    priceFrom: '$ 2.400.000',
    summary: 'Narrativa audiovisual para bodas con cobertura completa y highlights cinematicos.',
    includes: ['drone sujeto a clima', 'film largo', 'reel para redes', 'galeria privada'],
    badge: 'premium',
    turnaround: 'Entrega escalonada en 15 dias',
  },
  {
    id: 'social-essentials',
    title: 'Social Essentials',
    eventType: 'social',
    priceFrom: '$ 980.000',
    summary: 'Pack agil para eventos sociales con foco en recuerdos, familia y contenido rapido.',
    includes: ['1 fotografo', 'mini resumen', 'galeria compartible', 'asistencia previa'],
    badge: 'recomendado',
    turnaround: 'Entrega inicial en 5 dias',
  },
]
