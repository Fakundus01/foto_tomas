from flask import Blueprint

from app.modules.services.controller import ServiceCatalogController

services_bp = Blueprint('services', __name__, url_prefix='/api/v1/services')


@services_bp.get('/catalog')
def list_catalog():
  return ServiceCatalogController.list_catalog()
