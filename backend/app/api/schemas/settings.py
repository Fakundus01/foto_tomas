from marshmallow import Schema, fields


class SocialLinkSchema(Schema):
  platform = fields.String(required=True)
  label = fields.String(required=True)
  url = fields.String(required=True)


class PublicSettingsSchema(Schema):
  settings = fields.Dict(required=True)
  social_links = fields.List(fields.Nested(SocialLinkSchema), required=True)


public_settings_schema = PublicSettingsSchema()
