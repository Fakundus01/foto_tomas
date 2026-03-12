from __future__ import annotations

import uuid
from decimal import Decimal

from sqlalchemy import Boolean, Date, DateTime, Enum, ForeignKey, Integer, Numeric, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.extensions import db
from app.db.models.base import IdentifierMixin, TimestampMixin
from app.db.models.enums import (
  AppointmentStatusEnum,
  AppointmentTypeEnum,
  AvailabilityStatusEnum,
  BookingStatusEnum,
  EventTypeEnum,
  LeadStatusEnum,
)


class AvailabilitySlot(IdentifierMixin, TimestampMixin, db.Model):
  __tablename__ = 'availability_slots'

  event_type: Mapped[EventTypeEnum] = mapped_column(Enum(EventTypeEnum, name='availability_event_type_enum'), nullable=False)
  event_date: Mapped[str] = mapped_column(Date, nullable=False, index=True)
  status: Mapped[AvailabilityStatusEnum] = mapped_column(
    Enum(AvailabilityStatusEnum, name='availability_status_enum'),
    nullable=False,
  )
  note: Mapped[str | None] = mapped_column(String(255))


class Lead(IdentifierMixin, TimestampMixin, db.Model):
  __tablename__ = 'leads'

  full_name: Mapped[str] = mapped_column(String(160), nullable=False)
  email: Mapped[str] = mapped_column(String(255), nullable=False, index=True)
  phone: Mapped[str | None] = mapped_column(String(40))
  event_type: Mapped[EventTypeEnum] = mapped_column(Enum(EventTypeEnum, name='lead_event_type_enum'), nullable=False)
  event_date: Mapped[str | None] = mapped_column(Date)
  pack_interest: Mapped[str | None] = mapped_column(String(160))
  source: Mapped[str] = mapped_column(String(80), default='website', nullable=False)
  message: Mapped[str | None] = mapped_column(Text)
  contact_consent: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)
  status: Mapped[LeadStatusEnum] = mapped_column(Enum(LeadStatusEnum, name='lead_status_enum'), nullable=False)

  bookings: Mapped[list[Booking]] = relationship(back_populates='lead')
  appointments: Mapped[list[Appointment]] = relationship(back_populates='lead')


class Booking(IdentifierMixin, TimestampMixin, db.Model):
  __tablename__ = 'bookings'

  user_id: Mapped[str | None] = mapped_column(ForeignKey('users.id', ondelete='SET NULL'), index=True)
  lead_id: Mapped[str | None] = mapped_column(ForeignKey('leads.id', ondelete='SET NULL'), index=True)
  pack_id: Mapped[str | None] = mapped_column(ForeignKey('service_packs.id', ondelete='SET NULL'), index=True)
  event_date: Mapped[str] = mapped_column(Date, nullable=False, index=True)
  venue: Mapped[str] = mapped_column(String(160), nullable=False)
  guest_count: Mapped[int] = mapped_column(Integer, nullable=False)
  status: Mapped[BookingStatusEnum] = mapped_column(Enum(BookingStatusEnum, name='booking_status_enum'), nullable=False)
  total_amount: Mapped[Decimal | None] = mapped_column(Numeric(12, 2))
  deposit_amount: Mapped[Decimal | None] = mapped_column(Numeric(12, 2))
  notes: Mapped[str | None] = mapped_column(Text)
  guest_checkout_token: Mapped[str] = mapped_column(String(255), default=lambda: uuid.uuid4().hex, nullable=False)

  lead: Mapped[Lead | None] = relationship(back_populates='bookings')
  appointments: Mapped[list[Appointment]] = relationship(back_populates='booking')


class Appointment(IdentifierMixin, TimestampMixin, db.Model):
  __tablename__ = 'appointments'

  lead_id: Mapped[str | None] = mapped_column(ForeignKey('leads.id', ondelete='SET NULL'), index=True)
  booking_id: Mapped[str | None] = mapped_column(ForeignKey('bookings.id', ondelete='SET NULL'), index=True)
  scheduled_for: Mapped[str] = mapped_column(DateTime(timezone=True), nullable=False, index=True)
  meeting_type: Mapped[AppointmentTypeEnum] = mapped_column(
    Enum(AppointmentTypeEnum, name='appointment_type_enum'),
    nullable=False,
  )
  status: Mapped[AppointmentStatusEnum] = mapped_column(
    Enum(AppointmentStatusEnum, name='appointment_status_enum'),
    nullable=False,
  )
  notes: Mapped[str | None] = mapped_column(Text)

  lead: Mapped[Lead | None] = relationship(back_populates='appointments')
  booking: Mapped[Booking | None] = relationship(back_populates='appointments')
