from flask import jsonify

from app.api.schemas.booking import booking_quote_request_schema
from app.api.schemas.common import get_json_payload
from app.modules.bookings.service import BookingService


class BookingController:
  service = BookingService()

  @classmethod
  def create_quote_request(cls):
    payload = booking_quote_request_schema.load(get_json_payload())
    response = cls.service.create_quote_request(payload)
    return jsonify(response), 201
