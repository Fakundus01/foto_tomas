from flask import Blueprint, jsonify

auth_bp = Blueprint('auth', __name__, url_prefix='/api/v1/auth')


@auth_bp.get('/session')
def get_session_state():
  return jsonify({'mode': 'guest-ready', 'roles': ['guest', 'user', 'admin']}), 200
