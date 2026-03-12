from flask import jsonify, request

from app.api.schemas.availability import availability_query_schema, availability_slot_schema
from app.modules.availability.service import AvailabilityService


class AvailabilityController:
  service = AvailabilityService()

  @classmethod
  def list_slots(cls):
    filters = availability_query_schema.load(request.args.to_dict())
    payload = cls.service.list_slots(filters.get('event_type'))
    return jsonify({'items': availability_slot_schema.dump(payload)}), 200
