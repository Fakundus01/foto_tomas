from datetime import date

from app.core.extensions import db
from app.db.models.enums import AvailabilityStatusEnum, EventTypeEnum
from app.db.models.operations import AvailabilitySlot


def seed_availability() -> None:
  if db.session.query(AvailabilitySlot).count() > 0:
    return

  db.session.add_all(
    [
      AvailabilitySlot(
        event_type=EventTypeEnum.XV,
        event_date=date(2026, 4, 18),
        status=AvailabilityStatusEnum.AVAILABLE,
        note='Sabado premium',
      ),
      AvailabilitySlot(
        event_type=EventTypeEnum.XV,
        event_date=date(2026, 4, 25),
        status=AvailabilityStatusEnum.PENDING,
        note='Fecha en revision comercial',
      ),
      AvailabilitySlot(
        event_type=EventTypeEnum.BODA,
        event_date=date(2026, 5, 2),
        status=AvailabilityStatusEnum.BOOKED,
        note='Cierre confirmado',
      ),
      AvailabilitySlot(
        event_type=EventTypeEnum.SOCIAL,
        event_date=date(2026, 5, 23),
        status=AvailabilityStatusEnum.AVAILABLE,
        note='Equipo completo libre',
      ),
    ]
  )
