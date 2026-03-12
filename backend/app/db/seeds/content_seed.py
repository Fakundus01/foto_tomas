from app.core.extensions import db
from app.db.models.content import Faq, GalleryItem, Testimonial


def _upsert_faq(question: str, answer: str, sort_order: int) -> Faq:
  faq = Faq.query.filter_by(question=question).one_or_none()

  if faq is None:
    faq = Faq(question=question, answer=answer, sort_order=sort_order, is_published=True)
    db.session.add(faq)
  else:
    faq.answer = answer
    faq.sort_order = sort_order
    faq.is_published = True

  return faq


def _upsert_testimonial(client_name: str, role_label: str, quote: str, sort_order: int) -> Testimonial:
  testimonial = Testimonial.query.filter_by(client_name=client_name, role_label=role_label).one_or_none()

  if testimonial is None:
    testimonial = Testimonial(
      client_name=client_name,
      role_label=role_label,
      quote=quote,
      sort_order=sort_order,
      is_featured=True,
    )
    db.session.add(testimonial)
  else:
    testimonial.quote = quote
    testimonial.sort_order = sort_order
    testimonial.is_featured = True

  return testimonial


def _upsert_gallery_item(title: str, asset_url: str, asset_type: str, event_type: str, sort_order: int) -> GalleryItem:
  gallery_item = GalleryItem.query.filter_by(title=title).one_or_none()

  if gallery_item is None:
    gallery_item = GalleryItem(
      title=title,
      asset_url=asset_url,
      asset_type=asset_type,
      event_type=event_type,
      sort_order=sort_order,
      is_published=True,
    )
    db.session.add(gallery_item)
  else:
    gallery_item.asset_url = asset_url
    gallery_item.asset_type = asset_type
    gallery_item.event_type = event_type
    gallery_item.sort_order = sort_order
    gallery_item.is_published = True

  return gallery_item


def seed_content() -> None:
  faqs = [
    ('Cuanto tiempo antes recomiendan reservar?', 'Lo ideal es cerrar XV y bodas entre 6 y 10 meses antes para tener mejor agenda y equipo.', 1),
    ('Trabajan con packs a medida?', 'Si. Partimos de un pack base y armamos una propuesta a medida segun cobertura, horarios y extras.', 2),
    ('Se puede reservar sin cuenta?', 'Si. El flujo inicial funciona como invitado y despues se puede pasar a usuario registrado.', 3),
    ('Viajan fuera de Buenos Aires?', 'Si. Cubrimos eventos en AMBA, interior y destino, ajustando logistica y viaticos en la propuesta.', 4),
    ('Hacen reuniones previas?', 'Si. Podemos coordinar reunion virtual o presencial antes del cierre para definir estilo, tiempos y entregables.', 5),
  ]

  testimonials = [
    ('Camila y Tomas', 'XV premium', 'Nos guiaron desde la primera reunion y el resultado final fue elegante, emotivo y super ordenado.', 1),
    ('Micaela R.', 'Boda boutique', 'El equipo entendio perfecto el estilo del evento. La cobertura fue impecable y la entrega, rapidisima.', 2),
    ('Familia Nuñez', 'Evento social', 'Nos gusto que todo estuviera claro: packs, agenda, cita y seguimiento. Se siente muy profesional.', 3),
    ('Agustin y Lara', 'Wedding Story Deluxe', 'Tuvimos una experiencia muy cuidada. Todo el proceso fue simple y el material final quedo increible.', 4),
    ('Julieta S.', 'XV Signature', 'La mezcla entre foto editorial y contenido para redes fue justo lo que queriamos para presentar el evento.', 5),
  ]

  gallery_items = [
    ('XV editorial backstage', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80', 'image', 'xv', 1),
    ('Boda golden hour', 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80', 'image', 'boda', 2),
    ('Fiesta social con flash', 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80', 'image', 'social', 3),
    ('Ceremonia intima', 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80', 'image', 'boda', 4),
    ('Sesion previa XV', 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80', 'image', 'xv', 5),
    ('Cobertura corporativa premium', 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=900&q=80', 'image', 'social', 6),
  ]

  for question, answer, sort_order in faqs:
    _upsert_faq(question, answer, sort_order)

  for client_name, role_label, quote, sort_order in testimonials:
    _upsert_testimonial(client_name, role_label, quote, sort_order)

  for title, asset_url, asset_type, event_type, sort_order in gallery_items:
    _upsert_gallery_item(title, asset_url, asset_type, event_type, sort_order)
