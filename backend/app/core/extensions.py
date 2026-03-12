from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy(session_options={'expire_on_commit': False})
migrate = Migrate()
cors = CORS()
jwt = JWTManager()


def init_extensions(app: Flask) -> None:
  db.init_app(app)
  migrate.init_app(app, db)
  cors.init_app(app, origins=app.config['CORS_ORIGINS'], supports_credentials=True)
  jwt.init_app(app)
