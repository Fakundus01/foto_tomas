from app import create_app
from app.core.extensions import db
from app.db.seeds.content_seed import seed_content
from app.db.seeds.services_seed import seed_services
from app.db.seeds.settings_seed import seed_settings


def create_seeded_app():
  app = create_app('testing')

  with app.app_context():
    db.create_all()
    seed_services()
    seed_content()
    seed_settings()
    db.session.commit()

  return app


def test_public_content_route_returns_seeded_content():
  app = create_seeded_app()
  client = app.test_client()

  response = client.get('/api/v1/content/home')

  assert response.status_code == 200
  assert len(response.json['faqs']) >= 1
  assert len(response.json['testimonials']) >= 1
  assert len(response.json['gallery_items']) >= 1


def test_settings_route_returns_public_contact_info():
  app = create_seeded_app()
  client = app.test_client()

  response = client.get('/api/v1/settings/public')

  assert response.status_code == 200
  assert response.json['settings']['contact']['email'] == 'hola@fototomasvideo.com'


def test_booking_quote_request_creates_booking_and_lead():
  app = create_seeded_app()
  client = app.test_client()

  response = client.post(
    '/api/v1/bookings/quote-request',
    json={
      'full_name': 'Camila Lopez',
      'email': 'camila@email.com',
      'phone': '1155555555',
      'event_type': 'xv',
      'event_date': '2026-04-18',
      'venue': 'Salon dorado',
      'guest_count': 140,
      'pack_interest': 'XV Signature',
      'comments': 'Quiero reunion virtual',
      'contact_consent': True,
    },
  )

  assert response.status_code == 201
  assert response.json['status'] == 'pending'
  assert response.json['booking_id']
  assert response.json['lead_id']
