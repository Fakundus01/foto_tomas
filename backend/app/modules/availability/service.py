from app.db.repositories.availability_repository import AvailabilityRepository


class AvailabilityService:
  def __init__(self, repository: AvailabilityRepository | None = None) -> None:
    self.repository = repository or AvailabilityRepository()

  def list_slots(self, event_type: str | None = None) -> list[dict]:
    slots = self.repository.list_slots(event_type)

    return [
      {
        'id': slot.id,
        'event_type': slot.event_type.value,
        'event_date': slot.event_date,
        'status': slot.status.value,
        'note': slot.note,
      }
      for slot in slots
    ]
