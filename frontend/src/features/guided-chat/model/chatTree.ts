import type { GuidedChatNode } from '@/features/guided-chat/model/types'

export const chatTree: Record<string, GuidedChatNode> = {
  welcome: {
    id: 'welcome',
    title: 'Asistente',
    message: 'Hola. Te ayudo a encontrar un pack, revisar fechas o pasar a WhatsApp.',
    options: [
      { id: 'pack', label: 'Quiero ver packs', targetId: 'packs' },
      { id: 'dates', label: 'Necesito una fecha', targetId: 'dates' },
      { id: 'human', label: 'Hablar por WhatsApp', externalHref: 'https://wa.me/5490000000000' },
    ],
  },
  packs: {
    id: 'packs',
    title: 'Packs recomendados',
    message: 'Para XV suelen elegir Signature. Para bodas, Wedding Cinema. Si queres, te llevo al formulario.',
    options: [
      { id: 'reserve', label: 'Ir al formulario', externalHref: '/reservas' },
      { id: 'back', label: 'Volver', targetId: 'welcome' },
    ],
  },
  dates: {
    id: 'dates',
    title: 'Agenda',
    message: 'Las fechas premium se estan cerrando rapido. En reservas podes dejar tu fecha y prioridad.',
    options: [
      { id: 'availability', label: 'Ver agenda', externalHref: '/reservas' },
      { id: 'back-home', label: 'Volver al inicio', targetId: 'welcome' },
    ],
  },
}
