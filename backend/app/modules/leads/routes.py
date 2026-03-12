from flask import Blueprint

from app.modules.leads.controller import LeadController

leads_bp = Blueprint('leads', __name__, url_prefix='/api/v1/leads')


@leads_bp.post('')
def create_lead():
  return LeadController.create()
