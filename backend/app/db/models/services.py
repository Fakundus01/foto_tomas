from __future__ import annotations

from decimal import Decimal

from sqlalchemy import Boolean, Enum, ForeignKey, Integer, Numeric, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.extensions import db
from app.db.models.base import IdentifierMixin, TimestampMixin
from app.db.models.enums import EventTypeEnum


class Service(IdentifierMixin, TimestampMixin, db.Model):
  __tablename__ = 'services'

  name: Mapped[str] = mapped_column(String(160), nullable=False)
  slug: Mapped[str] = mapped_column(String(160), unique=True, nullable=False, index=True)
  event_type: Mapped[EventTypeEnum] = mapped_column(Enum(EventTypeEnum, name='service_event_type_enum'), nullable=False)
  short_description: Mapped[str] = mapped_column(Text, nullable=False)
  base_price: Mapped[Decimal] = mapped_column(Numeric(12, 2), nullable=False)
  is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
  sort_order: Mapped[int] = mapped_column(Integer, default=0, nullable=False)

  packs: Mapped[list[ServicePack]] = relationship(back_populates='service', cascade='all, delete-orphan')


class ServicePack(IdentifierMixin, TimestampMixin, db.Model):
  __tablename__ = 'service_packs'

  service_id: Mapped[str] = mapped_column(ForeignKey('services.id', ondelete='CASCADE'), nullable=False, index=True)
  name: Mapped[str] = mapped_column(String(160), nullable=False)
  slug: Mapped[str] = mapped_column(String(160), unique=True, nullable=False, index=True)
  price_from: Mapped[Decimal] = mapped_column(Numeric(12, 2), nullable=False)
  summary: Mapped[str] = mapped_column(Text, nullable=False)
  badge: Mapped[str | None] = mapped_column(String(60))
  turnaround_label: Mapped[str] = mapped_column(String(120), nullable=False)
  is_featured: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)

  service: Mapped[Service] = relationship(back_populates='packs')
  items: Mapped[list[PackItem]] = relationship(back_populates='pack', cascade='all, delete-orphan')


class PackItem(IdentifierMixin, TimestampMixin, db.Model):
  __tablename__ = 'pack_items'

  pack_id: Mapped[str] = mapped_column(ForeignKey('service_packs.id', ondelete='CASCADE'), nullable=False, index=True)
  label: Mapped[str] = mapped_column(String(200), nullable=False)
  description: Mapped[str | None] = mapped_column(Text)
  sort_order: Mapped[int] = mapped_column(Integer, default=0, nullable=False)

  pack: Mapped[ServicePack] = relationship(back_populates='items')
