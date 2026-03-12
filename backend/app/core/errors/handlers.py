from flask import Flask, jsonify
from marshmallow import ValidationError

from app.core.errors.api_error import ApiError


def register_error_handlers(app: Flask) -> None:
  @app.errorhandler(ApiError)
  def handle_api_error(error: ApiError):
    return jsonify({'message': error.message, 'errors': error.payload}), error.status_code

  @app.errorhandler(ValidationError)
  def handle_validation_error(error: ValidationError):
    return jsonify({'message': 'Payload invalido.', 'errors': error.messages}), 422

  @app.errorhandler(404)
  def handle_not_found(_error):
    return jsonify({'message': 'Ruta no encontrada.'}), 404

  @app.errorhandler(Exception)
  def handle_unexpected_error(error: Exception):
    app.logger.exception('Unhandled exception: %s', error)
    return jsonify({'message': 'Error interno del servidor.'}), 500
