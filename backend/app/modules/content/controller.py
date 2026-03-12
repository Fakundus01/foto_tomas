from flask import jsonify

from app.api.schemas.content import public_home_content_schema
from app.modules.content.service import PublicContentService


class PublicContentController:
  service = PublicContentService()

  @classmethod
  def get_home_content(cls):
    payload = cls.service.get_home_content()
    return jsonify(public_home_content_schema.dump(payload)), 200
