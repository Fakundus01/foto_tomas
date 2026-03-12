from typing import Any

import click
from flask import Flask

from app.api.routes.api import register_routes
from app.core.config.settings import get_config
from app.core.errors.handlers import register_error_handlers
from app.core.extensions import init_extensions


def create_app(config_name: str | None = None) -> Flask:
  app = Flask(__name__)
  app.config.from_object(get_config(config_name))

  from app.db import models  # noqa: F401

  init_extensions(app)
  register_routes(app)
  register_error_handlers(app)
  register_cli_commands(app)

  return app


def register_cli_commands(app: Flask) -> None:
  @app.cli.command('seed')
  def seed_command() -> None:
    from app.db.seeds.runner import seed_all

    seed_all()
    click.echo('Seed completado.')


def shell_context() -> dict[str, Any]:
  from app.core.extensions import db

  return {'db': db}
