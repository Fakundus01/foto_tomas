from __future__ import annotations

from sqlalchemy import Boolean, Enum, ForeignKey, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.extensions import db
from app.db.models.base import IdentifierMixin, TimestampMixin
from app.db.models.enums import EventTypeEnum, UserRoleEnum


class User(IdentifierMixin, TimestampMixin, db.Model):
  __tablename__ = 'users'

  email: Mapped[str] = mapped_column(String(255), unique=True, nullable=False, index=True)
  password_hash: Mapped[str | None] = mapped_column(String(255))
  full_name: Mapped[str] = mapped_column(String(160), nullable=False)
  role: Mapped[UserRoleEnum] = mapped_column(Enum(UserRoleEnum, name='user_role_enum'), nullable=False)
  is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
  is_guest: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)

  profile: Mapped[Profile | None] = relationship(back_populates='user', uselist=False)
  guest_sessions: Mapped[list[GuestSession]] = relationship(back_populates='converted_user')


class Profile(IdentifierMixin, TimestampMixin, db.Model):
  __tablename__ = 'profiles'

  user_id: Mapped[str] = mapped_column(ForeignKey('users.id', ondelete='CASCADE'), unique=True, nullable=False)
  phone: Mapped[str | None] = mapped_column(String(40))
  city: Mapped[str | None] = mapped_column(String(120))
  preferred_event_type: Mapped[EventTypeEnum | None] = mapped_column(Enum(EventTypeEnum, name='event_type_enum'))
  instagram_handle: Mapped[str | None] = mapped_column(String(120))
  notes: Mapped[str | None] = mapped_column(Text)

  user: Mapped[User] = relationship(back_populates='profile')


class GuestSession(IdentifierMixin, TimestampMixin, db.Model):
  __tablename__ = 'guest_sessions'

  session_token: Mapped[str] = mapped_column(String(255), unique=True, nullable=False, index=True)
  email: Mapped[str | None] = mapped_column(String(255), index=True)
  phone: Mapped[str | None] = mapped_column(String(40))
  converted_user_id: Mapped[str | None] = mapped_column(ForeignKey('users.id', ondelete='SET NULL'))

  converted_user: Mapped[User | None] = relationship(back_populates='guest_sessions')
