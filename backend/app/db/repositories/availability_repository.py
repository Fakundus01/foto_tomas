from sqlalchemy import select

from app.core.extensions import db
from app.db.models.enums import EventTypeEnum
from app.db.models.operations import AvailabilitySlot


class AvailabilityRepository:
  def list_slots(self, event_type: str | None = None) -> list[AvailabilitySlot]:
    statement = select(AvailabilitySlot).order_by(AvailabilitySlot.event_date.asc())

    if event_type:
      statement = statement.where(AvailabilitySlot.event_type == EventTypeEnum(event_type))

    return list(db.session.scalars(statement).all())
