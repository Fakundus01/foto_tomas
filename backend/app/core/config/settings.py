import os

from dotenv import load_dotenv

load_dotenv()


class BaseConfig:
  SECRET_KEY = os.getenv('SECRET_KEY', 'dev-secret-key')
  JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY', SECRET_KEY)
  SQLALCHEMY_DATABASE_URI = os.getenv(
    'DATABASE_URL',
    'postgresql+psycopg://postgres:postgres@localhost:5432/foto_tomas',
  )
  SQLALCHEMY_TRACK_MODIFICATIONS = False
  SQLALCHEMY_ENGINE_OPTIONS = {
    'pool_pre_ping': True,
  }
  JWT_TOKEN_LOCATION = ['cookies']
  JWT_COOKIE_SECURE = os.getenv('JWT_COOKIE_SECURE', 'false').lower() == 'true'
  JWT_COOKIE_SAMESITE = os.getenv('JWT_COOKIE_SAMESITE', 'Lax')
  CORS_ORIGINS = [origin.strip() for origin in os.getenv('CORS_ORIGINS', 'http://localhost:5173').split(',')]
  JSON_SORT_KEYS = False


class DevelopmentConfig(BaseConfig):
  DEBUG = True


class TestingConfig(BaseConfig):
  TESTING = True
  SQLALCHEMY_DATABASE_URI = os.getenv('TEST_DATABASE_URL', 'sqlite+pysqlite:///:memory:')


class ProductionConfig(BaseConfig):
  DEBUG = False


def get_config(config_name: str | None = None) -> type[BaseConfig]:
  config_map = {
    'development': DevelopmentConfig,
    'testing': TestingConfig,
    'production': ProductionConfig,
  }
  environment = config_name or os.getenv('FLASK_ENV', 'development')

  return config_map.get(environment, DevelopmentConfig)
