from app.core.extensions import db
from app.db.models.enums import EventTypeEnum, LeadStatusEnum
from app.db.models.operations import Lead
from app.db.repositories.lead_repository import LeadRepository


class LeadService:
  def __init__(self, repository: LeadRepository | None = None) -> None:
    self.repository = repository or LeadRepository()

  def create(self, payload: dict) -> dict:
    lead = Lead(
      full_name=payload['full_name'],
      email=payload['email'],
      phone=payload.get('phone'),
      event_type=EventTypeEnum(payload['event_type']),
      event_date=payload.get('event_date'),
      pack_interest=payload.get('pack_interest'),
      source=payload.get('source', 'website'),
      message=payload.get('message'),
      contact_consent=payload.get('contact_consent', False),
      status=LeadStatusEnum.NEW,
    )

    self.repository.add(lead)
    db.session.commit()

    return {
      'id': str(lead.id),
      'status': lead.status.value,
      'email': lead.email,
    }
