from flask import Blueprint

from app.modules.settings.controller import SettingsController

settings_bp = Blueprint('settings', __name__, url_prefix='/api/v1/settings')


@settings_bp.get('/public')
def get_public_settings():
  return SettingsController.get_public_settings()
