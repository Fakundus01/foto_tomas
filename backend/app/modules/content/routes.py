from flask import Blueprint

from app.modules.content.controller import PublicContentController

content_bp = Blueprint('content', __name__, url_prefix='/api/v1/content')


@content_bp.get('/home')
def get_home_content():
  return PublicContentController.get_home_content()
