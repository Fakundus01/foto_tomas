from app.db.repositories.content_repository import ContentRepository


class PublicContentService:
  def __init__(self, repository: ContentRepository | None = None) -> None:
    self.repository = repository or ContentRepository()

  def get_home_content(self) -> dict:
    return {
      'faqs': [
        {
          'id': item.id,
          'question': item.question,
          'answer': item.answer,
        }
        for item in self.repository.list_published_faqs()
      ],
      'testimonials': [
        {
          'id': item.id,
          'client_name': item.client_name,
          'role_label': item.role_label,
          'quote': item.quote,
        }
        for item in self.repository.list_featured_testimonials()
      ],
      'gallery_items': [
        {
          'id': item.id,
          'title': item.title,
          'asset_url': item.asset_url,
          'asset_type': item.asset_type,
          'event_type': item.event_type,
        }
        for item in self.repository.list_published_gallery_items()
      ],
    }
