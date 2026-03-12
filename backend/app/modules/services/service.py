from app.db.repositories.service_repository import ServiceRepository


class ServiceCatalogService:
  def __init__(self, repository: ServiceRepository | None = None) -> None:
    self.repository = repository or ServiceRepository()

  def list_catalog(self) -> list[dict]:
    services = self.repository.list_active_services()
    catalog: list[dict] = []

    for service in services:
      for pack in service.packs:
        catalog.append(
          {
            'id': pack.id,
            'title': pack.name,
            'event_type': service.event_type.value,
            'service_name': service.name,
            'price_from': pack.price_from,
            'summary': pack.summary,
            'includes': [item.label for item in sorted(pack.items, key=lambda current: current.sort_order)],
            'badge': pack.badge,
            'turnaround': pack.turnaround_label,
          }
        )

    return catalog
