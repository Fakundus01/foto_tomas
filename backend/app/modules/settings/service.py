from app.db.repositories.settings_repository import SettingsRepository


class SettingsService:
  def __init__(self, repository: SettingsRepository | None = None) -> None:
    self.repository = repository or SettingsRepository()

  def get_public_settings(self) -> dict:
    settings = {item.key: item.value for item in self.repository.list_public_settings()}
    social_links = [
      {
        'platform': item.platform,
        'label': item.label,
        'url': item.url,
      }
      for item in self.repository.list_active_social_links()
    ]

    return {'settings': settings, 'social_links': social_links}
