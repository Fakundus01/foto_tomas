from flask import Flask

from app.api.routes.health import health_bp
from app.modules.auth.routes import auth_bp
from app.modules.availability.routes import availability_bp
from app.modules.bookings.routes import bookings_bp
from app.modules.leads.routes import leads_bp
from app.modules.services.routes import services_bp
from app.modules.settings.routes import settings_bp


def register_routes(app: Flask) -> None:
  app.register_blueprint(health_bp)
  app.register_blueprint(auth_bp)
  app.register_blueprint(services_bp)
  app.register_blueprint(availability_bp)
  app.register_blueprint(leads_bp)
  app.register_blueprint(bookings_bp)
  app.register_blueprint(settings_bp)
