from flask import jsonify

from app.api.schemas.settings import public_settings_schema
from app.modules.settings.service import SettingsService


class SettingsController:
  service = SettingsService()

  @classmethod
  def get_public_settings(cls):
    payload = cls.service.get_public_settings()
    return jsonify(public_settings_schema.dump(payload)), 200
