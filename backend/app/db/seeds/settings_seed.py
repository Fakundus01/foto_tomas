from app.core.extensions import db
from app.db.models.content import SiteSetting, SocialLink


def seed_settings() -> None:
  if db.session.query(SiteSetting).count() > 0:
    return

  db.session.add_all(
    [
      SiteSetting(
        key='hero',
        value={
          'title': 'Foto y video para eventos que quieren verse tan bien como se sienten.',
          'subtitle': 'Cobertura premium para XV, bodas y eventos sociales.',
        },
      ),
      SiteSetting(
        key='contact',
        value={
          'email': 'hola@fototomasvideo.com',
          'phone': '+54 9 11 0000 0000',
          'city': 'Buenos Aires',
        },
      ),
      SocialLink(platform='instagram', label='Instagram', url='https://instagram.com/fototomasvideo'),
      SocialLink(platform='whatsapp', label='WhatsApp', url='https://wa.me/5491100000000'),
    ]
  )
