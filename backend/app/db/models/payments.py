from __future__ import annotations

from decimal import Decimal

from sqlalchemy import Enum, ForeignKey, JSON, Numeric, String
from sqlalchemy.orm import Mapped, mapped_column

from app.core.extensions import db
from app.db.models.base import IdentifierMixin, TimestampMixin
from app.db.models.enums import PaymentStatusEnum


class Payment(IdentifierMixin, TimestampMixin, db.Model):
  __tablename__ = 'payments'

  booking_id: Mapped[str] = mapped_column(ForeignKey('bookings.id', ondelete='CASCADE'), nullable=False, index=True)
  provider: Mapped[str] = mapped_column(String(80), nullable=False)
  provider_reference: Mapped[str | None] = mapped_column(String(180))
  amount: Mapped[Decimal] = mapped_column(Numeric(12, 2), nullable=False)
  currency: Mapped[str] = mapped_column(String(3), default='ARS', nullable=False)
  status: Mapped[PaymentStatusEnum] = mapped_column(Enum(PaymentStatusEnum, name='payment_status_enum'), nullable=False)


class PaymentTransaction(IdentifierMixin, TimestampMixin, db.Model):
  __tablename__ = 'payment_transactions'

  payment_id: Mapped[str] = mapped_column(ForeignKey('payments.id', ondelete='CASCADE'), nullable=False, index=True)
  status: Mapped[PaymentStatusEnum] = mapped_column(
    Enum(PaymentStatusEnum, name='payment_transaction_status_enum'),
    nullable=False,
  )
  provider_event: Mapped[str] = mapped_column(String(120), nullable=False)
  amount: Mapped[Decimal] = mapped_column(Numeric(12, 2), nullable=False)
  raw_payload: Mapped[dict | None] = mapped_column(JSON)
