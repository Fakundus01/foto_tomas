from flask import Blueprint

from app.modules.availability.controller import AvailabilityController

availability_bp = Blueprint('availability', __name__, url_prefix='/api/v1/availability')


@availability_bp.get('/slots')
def list_slots():
  return AvailabilityController.list_slots()
