from __future__ import annotations

from sqlalchemy import Boolean, JSON, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.core.extensions import db
from app.db.models.base import IdentifierMixin, TimestampMixin


class Faq(IdentifierMixin, TimestampMixin, db.Model):
  __tablename__ = 'faqs'

  question: Mapped[str] = mapped_column(String(255), nullable=False)
  answer: Mapped[str] = mapped_column(Text, nullable=False)
  sort_order: Mapped[int] = mapped_column(Integer, default=0, nullable=False)
  is_published: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)


class Testimonial(IdentifierMixin, TimestampMixin, db.Model):
  __tablename__ = 'testimonials'

  client_name: Mapped[str] = mapped_column(String(160), nullable=False)
  role_label: Mapped[str] = mapped_column(String(120), nullable=False)
  quote: Mapped[str] = mapped_column(Text, nullable=False)
  is_featured: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
  sort_order: Mapped[int] = mapped_column(Integer, default=0, nullable=False)


class GalleryItem(IdentifierMixin, TimestampMixin, db.Model):
  __tablename__ = 'gallery_items'

  title: Mapped[str] = mapped_column(String(180), nullable=False)
  asset_url: Mapped[str] = mapped_column(String(500), nullable=False)
  asset_type: Mapped[str] = mapped_column(String(60), nullable=False)
  event_type: Mapped[str] = mapped_column(String(40), nullable=False)
  is_published: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
  sort_order: Mapped[int] = mapped_column(Integer, default=0, nullable=False)


class SiteSetting(IdentifierMixin, TimestampMixin, db.Model):
  __tablename__ = 'site_settings'

  key: Mapped[str] = mapped_column(String(120), unique=True, nullable=False)
  value: Mapped[dict] = mapped_column(JSON, nullable=False)
  is_public: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)


class SocialLink(IdentifierMixin, TimestampMixin, db.Model):
  __tablename__ = 'social_links'

  platform: Mapped[str] = mapped_column(String(60), unique=True, nullable=False)
  label: Mapped[str] = mapped_column(String(120), nullable=False)
  url: Mapped[str] = mapped_column(String(255), nullable=False)
  is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
