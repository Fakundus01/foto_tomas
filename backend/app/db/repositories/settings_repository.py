from sqlalchemy import select

from app.core.extensions import db
from app.db.models.content import SiteSetting, SocialLink


class SettingsRepository:
  def list_public_settings(self) -> list[SiteSetting]:
    statement = select(SiteSetting).where(SiteSetting.is_public.is_(True)).order_by(SiteSetting.key.asc())
    return list(db.session.scalars(statement).all())

  def list_active_social_links(self) -> list[SocialLink]:
    statement = select(SocialLink).where(SocialLink.is_active.is_(True)).order_by(SocialLink.platform.asc())
    return list(db.session.scalars(statement).all())
