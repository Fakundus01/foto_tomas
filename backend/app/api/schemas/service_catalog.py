from marshmallow import Schema, fields


class CatalogPackItemSchema(Schema):
  id = fields.UUID(required=True)
  title = fields.String(required=True)
  event_type = fields.String(required=True)
  service_name = fields.String(required=True)
  price_from = fields.Decimal(as_string=True, required=True)
  summary = fields.String(required=True)
  includes = fields.List(fields.String(), required=True)
  badge = fields.String(allow_none=True)
  turnaround = fields.String(required=True)


catalog_response_schema = CatalogPackItemSchema(many=True)
