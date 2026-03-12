from __future__ import annotations

from sqlalchemy import Boolean, DateTime, Enum, ForeignKey, JSON, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.core.extensions import db
from app.db.models.base import IdentifierMixin, TimestampMixin
from app.db.models.enums import ChatSenderTypeEnum, NotificationChannelEnum


class ChatThread(IdentifierMixin, TimestampMixin, db.Model):
  __tablename__ = 'chats'

  user_id: Mapped[str | None] = mapped_column(ForeignKey('users.id', ondelete='SET NULL'), index=True)
  lead_id: Mapped[str | None] = mapped_column(ForeignKey('leads.id', ondelete='SET NULL'), index=True)
  subject: Mapped[str] = mapped_column(String(180), nullable=False)
  status: Mapped[str] = mapped_column(String(40), default='open', nullable=False)


class ChatMessage(IdentifierMixin, TimestampMixin, db.Model):
  __tablename__ = 'chat_messages'

  thread_id: Mapped[str] = mapped_column(ForeignKey('chats.id', ondelete='CASCADE'), nullable=False, index=True)
  sender_type: Mapped[ChatSenderTypeEnum] = mapped_column(Enum(ChatSenderTypeEnum, name='chat_sender_type_enum'), nullable=False)
  body: Mapped[str] = mapped_column(Text, nullable=False)
  is_read: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)


class Notification(IdentifierMixin, TimestampMixin, db.Model):
  __tablename__ = 'notifications'

  user_id: Mapped[str | None] = mapped_column(ForeignKey('users.id', ondelete='SET NULL'), index=True)
  channel: Mapped[NotificationChannelEnum] = mapped_column(
    Enum(NotificationChannelEnum, name='notification_channel_enum'),
    nullable=False,
  )
  title: Mapped[str] = mapped_column(String(180), nullable=False)
  body: Mapped[str] = mapped_column(Text, nullable=False)
  status: Mapped[str] = mapped_column(String(40), default='pending', nullable=False)
  sent_at: Mapped[str | None] = mapped_column(DateTime(timezone=True))


class AuditLog(IdentifierMixin, TimestampMixin, db.Model):
  __tablename__ = 'audit_logs'

  actor_user_id: Mapped[str | None] = mapped_column(ForeignKey('users.id', ondelete='SET NULL'), index=True)
  entity_name: Mapped[str] = mapped_column(String(120), nullable=False)
  entity_id: Mapped[str] = mapped_column(String(120), nullable=False)
  action: Mapped[str] = mapped_column(String(120), nullable=False)
  payload: Mapped[dict | None] = mapped_column(JSON)
