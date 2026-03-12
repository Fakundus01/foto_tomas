from decimal import Decimal

from app.core.extensions import db
from app.db.models.enums import EventTypeEnum
from app.db.models.services import PackItem, Service, ServicePack


def _upsert_service(*, slug: str, **values) -> Service:
  service = Service.query.filter_by(slug=slug).one_or_none()

  if service is None:
    service = Service(slug=slug, **values)
    db.session.add(service)
  else:
    for field, value in values.items():
      setattr(service, field, value)

  return service


def _upsert_pack(service: Service, *, slug: str, items: list[str], **values) -> ServicePack:
  pack = ServicePack.query.filter_by(slug=slug).one_or_none()

  if pack is None:
    pack = ServicePack(slug=slug, service=service, **values)
    db.session.add(pack)
  else:
    pack.service = service
    for field, value in values.items():
      setattr(pack, field, value)

  existing_items = {item.label: item for item in pack.items}

  for stale_item in list(pack.items):
    if stale_item.label not in items:
      pack.items.remove(stale_item)

  for index, label in enumerate(items, start=1):
    current_item = existing_items.get(label)

    if current_item is None:
      current_item = PackItem(pack=pack, label=label)
      db.session.add(current_item)

    current_item.sort_order = index

  return pack


def seed_services() -> None:
  catalog = [
    {
      'service': {
        'name': 'Cobertura XV',
        'slug': 'cobertura-xv',
        'event_type': EventTypeEnum.XV,
        'short_description': 'Direccion editorial, cobertura completa y contenido social para XV.',
        'base_price': Decimal('1450000'),
        'sort_order': 1,
        'is_active': True,
      },
      'packs': [
        {
          'name': 'XV Signature',
          'slug': 'xv-signature',
          'price_from': Decimal('1850000'),
          'summary': 'Cobertura premium con teaser 48h, album digital y reel vertical.',
          'badge': 'mas_vendido',
          'turnaround_label': 'Entrega inicial en 7 dias',
          'is_featured': True,
          'items': ['2 fotografos', '1 filmmaker', 'teaser 48h', 'album digital', 'reel vertical'],
        },
        {
          'name': 'XV Aftermovie Elite',
          'slug': 'xv-aftermovie-elite',
          'price_from': Decimal('2450000'),
          'summary': 'Version cinematica con aftermovie largo, backstage y dron sujeto a clima.',
          'badge': 'premium',
          'turnaround_label': 'Entrega escalonada en 15 dias',
          'is_featured': True,
          'items': ['aftermovie cinematico', 'backstage lookbook', 'dron sujeto a clima', 'galeria privada', 'asesoria creativa'],
        },
        {
          'name': 'XV Social Boost',
          'slug': 'xv-social-boost',
          'price_from': Decimal('1280000'),
          'summary': 'Pack enfocado en contenido rapido para redes y momentos clave del evento.',
          'badge': 'recomendado',
          'turnaround_label': 'Entrega inicial en 72 horas',
          'is_featured': True,
          'items': ['1 fotografo', '1 content creator', 'reels verticales', 'mini resumen', 'drive compartido'],
        },
      ],
    },
    {
      'service': {
        'name': 'Cobertura Bodas',
        'slug': 'cobertura-bodas',
        'event_type': EventTypeEnum.BODA,
        'short_description': 'Cobertura emocional y cinematica para bodas, civil e intimos premium.',
        'base_price': Decimal('1980000'),
        'sort_order': 2,
        'is_active': True,
      },
      'packs': [
        {
          'name': 'Wedding Cinema',
          'slug': 'wedding-cinema',
          'price_from': Decimal('2400000'),
          'summary': 'Cobertura cinematica con film largo, resumen corto y piezas para redes.',
          'badge': 'premium',
          'turnaround_label': 'Entrega escalonada en 15 dias',
          'is_featured': True,
          'items': ['film largo', 'reel para redes', 'drone sujeto a clima', 'galeria privada', 'meeting previo'],
        },
        {
          'name': 'Wedding Story Deluxe',
          'slug': 'wedding-story-deluxe',
          'price_from': Decimal('1760000'),
          'summary': 'Narrativa elegante para bodas medianas con foto, video y cobertura de ceremonia.',
          'badge': 'mas_vendido',
          'turnaround_label': 'Entrega inicial en 10 dias',
          'is_featured': True,
          'items': ['2 fotografos', 'video highlights', 'ceremonia completa', 'album digital', 'sesion couple'],
        },
        {
          'name': 'Civil & Intimo',
          'slug': 'civil-intimo',
          'price_from': Decimal('980000'),
          'summary': 'Pack agil para civil, brunch o boda boutique con foco documental.',
          'badge': 'recomendado',
          'turnaround_label': 'Entrega inicial en 5 dias',
          'is_featured': False,
          'items': ['1 fotografo', 'mini clip', 'galeria curada', 'cobertura ceremonia', 'retratos familiares'],
        },
      ],
    },
    {
      'service': {
        'name': 'Eventos Sociales',
        'slug': 'eventos-sociales',
        'event_type': EventTypeEnum.SOCIAL,
        'short_description': 'Cobertura agil para eventos sociales, marcas y experiencias boutique.',
        'base_price': Decimal('920000'),
        'sort_order': 3,
        'is_active': True,
      },
      'packs': [
        {
          'name': 'Social Essentials',
          'slug': 'social-essentials',
          'price_from': Decimal('980000'),
          'summary': 'Pack agil para eventos sociales con mini resumen y galeria compartible.',
          'badge': 'recomendado',
          'turnaround_label': 'Entrega inicial en 5 dias',
          'is_featured': True,
          'items': ['1 fotografo', 'mini resumen', 'galeria compartible', 'asistencia previa', 'seleccion curada'],
        },
        {
          'name': 'Night Content Studio',
          'slug': 'night-content-studio',
          'price_from': Decimal('1350000'),
          'summary': 'Cobertura pensada para fiestas, lanzamientos y contenido social rapido.',
          'badge': 'mas_vendido',
          'turnaround_label': 'Entrega inicial en 48 horas',
          'is_featured': True,
          'items': ['fotografia flash premium', 'contenido vertical', 'cobertura highlights', 'entrega express', 'drive para prensa'],
        },
        {
          'name': 'Corporate Motion',
          'slug': 'corporate-motion',
          'price_from': Decimal('1680000'),
          'summary': 'Pack orientado a marcas, eventos corporativos y activaciones con aftermovie.',
          'badge': 'premium',
          'turnaround_label': 'Entrega escalonada en 7 dias',
          'is_featured': False,
          'items': ['2 camarografos', 'fotografia institucional', 'aftermovie', 'entrevistas cortas', 'cobertura backstage'],
        },
      ],
    },
  ]

  for service_data in catalog:
    service = _upsert_service(**service_data['service'])

    for pack_data in service_data['packs']:
      items = pack_data.pop('items')
      _upsert_pack(service, items=items, **pack_data)
