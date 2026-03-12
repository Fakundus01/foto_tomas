from flask import Blueprint

from app.api.controllers.health_controller import HealthController

health_bp = Blueprint('health', __name__)


@health_bp.get('/health')
def healthcheck():
  return HealthController.get_status()
