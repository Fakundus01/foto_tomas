from app.core.extensions import db
from app.db.models.content import Faq, GalleryItem, Testimonial


def seed_content() -> None:
  if db.session.query(Faq).count() > 0:
    return

  db.session.add_all(
    [
      Faq(
        question='Cuanto tiempo antes recomiendan reservar?',
        answer='Lo ideal es cerrar XV y bodas entre 6 y 10 meses antes.',
        sort_order=1,
      ),
      Faq(
        question='Trabajan con packs a medida?',
        answer='Si. Tomamos un pack base y lo ajustamos segun cobertura, horarios y extras.',
        sort_order=2,
      ),
      Testimonial(
        client_name='Camila y Tomas',
        role_label='XV premium',
        quote='Nos guiaron desde la primera reunion y el resultado final fue impecable.',
        sort_order=1,
      ),
      Testimonial(
        client_name='Micaela R.',
        role_label='Boda boutique',
        quote='El equipo entendio el estilo del evento y ordeno todo muy bien.',
        sort_order=2,
      ),
      GalleryItem(
        title='XV editorial',
        asset_url='https://images.unsplash.com/photo-1519741497674-611481863552',
        asset_type='image',
        event_type='xv',
        sort_order=1,
      ),
      GalleryItem(
        title='Boda golden hour',
        asset_url='https://images.unsplash.com/photo-1522673607200-164d1b6ce486',
        asset_type='image',
        event_type='boda',
        sort_order=2,
      ),
    ]
  )
