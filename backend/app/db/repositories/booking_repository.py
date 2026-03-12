from app.core.extensions import db
from app.db.models.operations import Booking


class BookingRepository:
  def add(self, booking: Booking) -> Booking:
    db.session.add(booking)
    return booking
