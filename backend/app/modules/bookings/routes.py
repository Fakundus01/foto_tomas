from flask import Blueprint

from app.modules.bookings.controller import BookingController

bookings_bp = Blueprint('bookings', __name__, url_prefix='/api/v1/bookings')


@bookings_bp.post('/quote-request')
def create_quote_request():
  return BookingController.create_quote_request()
