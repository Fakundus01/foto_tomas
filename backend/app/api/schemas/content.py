from marshmallow import Schema, fields


class FaqItemSchema(Schema):
  id = fields.UUID(required=True)
  question = fields.String(required=True)
  answer = fields.String(required=True)


class TestimonialItemSchema(Schema):
  id = fields.UUID(required=True)
  client_name = fields.String(required=True)
  role_label = fields.String(required=True)
  quote = fields.String(required=True)


class GalleryItemSchema(Schema):
  id = fields.UUID(required=True)
  title = fields.String(required=True)
  asset_url = fields.String(required=True)
  asset_type = fields.String(required=True)
  event_type = fields.String(required=True)


class PublicHomeContentSchema(Schema):
  faqs = fields.List(fields.Nested(FaqItemSchema), required=True)
  testimonials = fields.List(fields.Nested(TestimonialItemSchema), required=True)
  gallery_items = fields.List(fields.Nested(GalleryItemSchema), required=True)


public_home_content_schema = PublicHomeContentSchema()
