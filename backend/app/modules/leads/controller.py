from flask import jsonify

from app.api.schemas.common import get_json_payload
from app.api.schemas.lead import lead_create_schema
from app.modules.leads.service import LeadService


class LeadController:
  service = LeadService()

  @classmethod
  def create(cls):
    payload = lead_create_schema.load(get_json_payload())
    response = cls.service.create(payload)
    return jsonify(response), 201
