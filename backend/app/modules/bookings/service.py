from decimal import Decimal

from app.core.extensions import db
from app.db.models.enums import BookingStatusEnum, EventTypeEnum, LeadStatusEnum
from app.db.models.operations import Booking, Lead
from app.db.repositories.booking_repository import BookingRepository
from app.db.repositories.lead_repository import LeadRepository
from app.db.repositories.service_repository import ServiceRepository


class BookingService:
  def __init__(
    self,
    booking_repository: BookingRepository | None = None,
    lead_repository: LeadRepository | None = None,
    service_repository: ServiceRepository | None = None,
  ) -> None:
    self.booking_repository = booking_repository or BookingRepository()
    self.lead_repository = lead_repository or LeadRepository()
    self.service_repository = service_repository or ServiceRepository()

  def create_quote_request(self, payload: dict) -> dict:
    lead = Lead(
      full_name=payload['full_name'],
      email=payload['email'],
      phone=payload['phone'],
      event_type=EventTypeEnum(payload['event_type']),
      event_date=payload['event_date'],
      pack_interest=payload.get('pack_interest'),
      source='booking-form',
      message=payload.get('comments'),
      contact_consent=payload.get('contact_consent', False),
      status=LeadStatusEnum.NEW,
    )
    pack = self.service_repository.find_pack_by_name(payload.get('pack_interest', '')) if payload.get('pack_interest') else None

    booking = Booking(
      lead=lead,
      pack_id=pack.id if pack else None,
      event_date=payload['event_date'],
      venue=payload['venue'],
      guest_count=payload['guest_count'],
      status=BookingStatusEnum.PENDING,
      notes=payload.get('comments'),
      total_amount=pack.price_from if pack else None,
      deposit_amount=(pack.price_from * Decimal('0.30')) if pack else None,
    )

    self.lead_repository.add(lead)
    self.booking_repository.add(booking)
    db.session.commit()

    return {
      'booking_id': str(booking.id),
      'lead_id': str(lead.id),
      'status': booking.status.value,
      'guest_checkout_token': booking.guest_checkout_token,
    }
