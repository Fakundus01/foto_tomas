from datetime import date

from app.core.extensions import db
from app.db.models.enums import AvailabilityStatusEnum, EventTypeEnum
from app.db.models.operations import AvailabilitySlot


def _upsert_slot(event_type: EventTypeEnum, event_date: date, status: AvailabilityStatusEnum, note: str) -> AvailabilitySlot:
  slot = AvailabilitySlot.query.filter_by(event_type=event_type, event_date=event_date).one_or_none()

  if slot is None:
    slot = AvailabilitySlot(event_type=event_type, event_date=event_date, status=status, note=note)
    db.session.add(slot)
  else:
    slot.status = status
    slot.note = note

  return slot


def seed_availability() -> None:
  slots = [
    (EventTypeEnum.XV, date(2026, 4, 18), AvailabilityStatusEnum.AVAILABLE, 'Sabado premium para XV Signature'),
    (EventTypeEnum.XV, date(2026, 4, 25), AvailabilityStatusEnum.PENDING, 'Fecha con consulta avanzada'),
    (EventTypeEnum.XV, date(2026, 5, 9), AvailabilityStatusEnum.AVAILABLE, 'Ideal para propuesta con social boost'),
    (EventTypeEnum.XV, date(2026, 5, 23), AvailabilityStatusEnum.BOOKED, 'Bloqueada por cierre confirmado'),
    (EventTypeEnum.BODA, date(2026, 5, 2), AvailabilityStatusEnum.BOOKED, 'Cierre confirmado'),
    (EventTypeEnum.BODA, date(2026, 5, 16), AvailabilityStatusEnum.AVAILABLE, 'Golden hour disponible'),
    (EventTypeEnum.BODA, date(2026, 6, 6), AvailabilityStatusEnum.PENDING, 'Pendiente de seña'),
    (EventTypeEnum.BODA, date(2026, 6, 20), AvailabilityStatusEnum.AVAILABLE, 'Fecha abierta para wedding cinema'),
    (EventTypeEnum.SOCIAL, date(2026, 5, 23), AvailabilityStatusEnum.AVAILABLE, 'Equipo completo libre'),
    (EventTypeEnum.SOCIAL, date(2026, 5, 30), AvailabilityStatusEnum.AVAILABLE, 'Ideal para social essentials'),
    (EventTypeEnum.SOCIAL, date(2026, 6, 13), AvailabilityStatusEnum.PENDING, 'Hold de marca por 48 horas'),
    (EventTypeEnum.SOCIAL, date(2026, 6, 27), AvailabilityStatusEnum.BOOKED, 'Cobertura corporativa confirmada'),
  ]

  for event_type, event_date, status, note in slots:
    _upsert_slot(event_type, event_date, status, note)
