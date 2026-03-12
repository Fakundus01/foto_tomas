from app.db.models.operations import Lead


class LeadRepository:
  def add(self, lead: Lead) -> Lead:
    from app.core.extensions import db

    db.session.add(lead)
    return lead
