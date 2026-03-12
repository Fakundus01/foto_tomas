from typing import Generic, TypeVar

from sqlalchemy import select

from app.core.extensions import db

ModelType = TypeVar('ModelType')


class BaseRepository(Generic[ModelType]):
  def __init__(self, model: type[ModelType]) -> None:
    self.model = model

  def add(self, entity: ModelType) -> ModelType:
    db.session.add(entity)
    return entity

  def list_all(self) -> list[ModelType]:
    return list(db.session.scalars(select(self.model)).all())
