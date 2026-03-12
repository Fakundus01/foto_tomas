from marshmallow import Schema, fields, validate


class LeadCreateSchema(Schema):
  full_name = fields.String(required=True, validate=validate.Length(min=2))
  email = fields.Email(required=True)
  phone = fields.String(required=True, validate=validate.Length(min=8))
  event_type = fields.String(required=True, validate=validate.OneOf(['xv', 'boda', 'social']))
  event_date = fields.Date(required=False, allow_none=True)
  pack_interest = fields.String(required=False, allow_none=True)
  message = fields.String(required=False, allow_none=True)
  source = fields.String(load_default='website')
  contact_consent = fields.Boolean(load_default=False)


lead_create_schema = LeadCreateSchema()
