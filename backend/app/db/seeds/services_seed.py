from decimal import Decimal

from app.core.extensions import db
from app.db.models.enums import EventTypeEnum
from app.db.models.services import PackItem, Service, ServicePack


def seed_services() -> None:
  if db.session.query(Service).count() > 0:
    return

  services = [
    Service(
      name='Cobertura XV',
      slug='cobertura-xv',
      event_type=EventTypeEnum.XV,
      short_description='Cobertura premium para XV con foco editorial.',
      base_price=Decimal('1850000'),
      sort_order=1,
    ),
    Service(
      name='Cobertura Bodas',
      slug='cobertura-bodas',
      event_type=EventTypeEnum.BODA,
      short_description='Narrativa audiovisual para bodas y celebraciones intimas.',
      base_price=Decimal('2400000'),
      sort_order=2,
    ),
    Service(
      name='Eventos Sociales',
      slug='eventos-sociales',
      event_type=EventTypeEnum.SOCIAL,
      short_description='Cobertura agil para eventos sociales y corporativos boutique.',
      base_price=Decimal('980000'),
      sort_order=3,
    ),
  ]

  db.session.add_all(services)
  db.session.flush()

  packs = [
    (
      services[0],
      ServicePack(
        name='XV Signature',
        slug='xv-signature',
        price_from=Decimal('1850000'),
        summary='Pack premium para noche completa, teaser y album digital.',
        badge='mas_vendido',
        turnaround_label='Entrega inicial en 7 dias',
        is_featured=True,
      ),
      ['2 fotografos', '1 filmmaker', 'teaser 48h', 'album digital'],
    ),
    (
      services[1],
      ServicePack(
        name='Wedding Cinema',
        slug='wedding-cinema',
        price_from=Decimal('2400000'),
        summary='Cobertura cinematica con resumen corto y largo.',
        badge='premium',
        turnaround_label='Entrega escalonada en 15 dias',
        is_featured=True,
      ),
      ['drone sujeto a clima', 'film largo', 'reel vertical', 'galeria privada'],
    ),
    (
      services[2],
      ServicePack(
        name='Social Essentials',
        slug='social-essentials',
        price_from=Decimal('980000'),
        summary='Pack agil para eventos sociales con contenido rapido.',
        badge='recomendado',
        turnaround_label='Entrega inicial en 5 dias',
        is_featured=True,
      ),
      ['1 fotografo', 'mini resumen', 'galeria compartible', 'asistencia previa'],
    ),
  ]

  for service, pack, items in packs:
    pack.service = service
    db.session.add(pack)
    db.session.flush()

    for index, item in enumerate(items, start=1):
      db.session.add(PackItem(pack=pack, label=item, sort_order=index))
