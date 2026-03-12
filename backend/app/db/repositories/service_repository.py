from sqlalchemy import select
from sqlalchemy.orm import selectinload

from app.core.extensions import db
from app.db.models.services import Service, ServicePack


class ServiceRepository:
  def list_active_services(self) -> list[Service]:
    statement = (
      select(Service)
      .where(Service.is_active.is_(True))
      .options(selectinload(Service.packs).selectinload(ServicePack.items))
      .order_by(Service.sort_order.asc(), Service.name.asc())
    )

    return list(db.session.scalars(statement).all())

  def find_pack_by_name(self, pack_name: str) -> ServicePack | None:
    statement = select(ServicePack).where(ServicePack.name == pack_name)
    return db.session.scalar(statement)
