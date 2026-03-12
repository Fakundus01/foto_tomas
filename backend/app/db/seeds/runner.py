from app.core.extensions import db
from app.db.seeds.availability_seed import seed_availability
from app.db.seeds.content_seed import seed_content
from app.db.seeds.services_seed import seed_services
from app.db.seeds.settings_seed import seed_settings


def seed_all() -> None:
  seed_services()
  seed_content()
  seed_settings()
  seed_availability()
  db.session.commit()
