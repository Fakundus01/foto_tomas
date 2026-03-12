from flask import jsonify

from app.api.schemas.service_catalog import catalog_response_schema
from app.modules.services.service import ServiceCatalogService


class ServiceCatalogController:
  service = ServiceCatalogService()

  @classmethod
  def list_catalog(cls):
    payload = cls.service.list_catalog()
    return jsonify({'items': catalog_response_schema.dump(payload)}), 200
