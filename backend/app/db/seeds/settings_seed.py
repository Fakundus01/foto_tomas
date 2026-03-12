from app.core.extensions import db
from app.db.models.content import SiteSetting, SocialLink


def _upsert_setting(key: str, value: dict) -> SiteSetting:
  setting = SiteSetting.query.filter_by(key=key).one_or_none()

  if setting is None:
    setting = SiteSetting(key=key, value=value, is_public=True)
    db.session.add(setting)
  else:
    setting.value = value
    setting.is_public = True

  return setting


def _upsert_social_link(platform: str, label: str, url: str) -> SocialLink:
  social_link = SocialLink.query.filter_by(platform=platform).one_or_none()

  if social_link is None:
    social_link = SocialLink(platform=platform, label=label, url=url, is_active=True)
    db.session.add(social_link)
  else:
    social_link.label = label
    social_link.url = url
    social_link.is_active = True

  return social_link


def seed_settings() -> None:
  _upsert_setting(
    'hero',
    {
      'title': 'Foto y video para eventos con presencia premium y ritmo cinematografico.',
      'subtitle': 'Packs claros, agenda visible, reserva guiada y una identidad visual lista para presentar.',
    },
  )
  _upsert_setting(
    'contact',
    {
      'email': 'hola@fototomasvideo.com',
      'phone': '+54 9 11 0000 0000',
      'city': 'Buenos Aires, Argentina',
    },
  )
  _upsert_social_link('instagram', 'Instagram', 'https://instagram.com/fototomasvideo')
  _upsert_social_link('whatsapp', 'WhatsApp', 'https://wa.me/5491100000000')
  _upsert_social_link('youtube', 'YouTube', 'https://youtube.com/@fototomasvideo')
