from sqlalchemy import select

from app.core.extensions import db
from app.db.models.content import Faq, GalleryItem, Testimonial


class ContentRepository:
  def list_published_faqs(self) -> list[Faq]:
    statement = select(Faq).where(Faq.is_published.is_(True)).order_by(Faq.sort_order.asc(), Faq.question.asc())
    return list(db.session.scalars(statement).all())

  def list_featured_testimonials(self) -> list[Testimonial]:
    statement = (
      select(Testimonial)
      .where(Testimonial.is_featured.is_(True))
      .order_by(Testimonial.sort_order.asc(), Testimonial.client_name.asc())
    )
    return list(db.session.scalars(statement).all())

  def list_published_gallery_items(self) -> list[GalleryItem]:
    statement = (
      select(GalleryItem)
      .where(GalleryItem.is_published.is_(True))
      .order_by(GalleryItem.sort_order.asc(), GalleryItem.title.asc())
    )
    return list(db.session.scalars(statement).all())
