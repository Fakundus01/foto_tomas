from marshmallow import Schema, fields, validate


class BookingQuoteRequestSchema(Schema):
  full_name = fields.String(required=True, validate=validate.Length(min=2))
  email = fields.Email(required=True)
  phone = fields.String(required=True, validate=validate.Length(min=8))
  event_type = fields.String(required=True, validate=validate.OneOf(['xv', 'boda', 'social']))
  event_date = fields.Date(required=True)
  venue = fields.String(required=True, validate=validate.Length(min=3))
  guest_count = fields.Integer(required=True, validate=validate.Range(min=20))
  pack_interest = fields.String(required=False, allow_none=True)
  comments = fields.String(required=False, allow_none=True)
  contact_consent = fields.Boolean(load_default=False)


booking_quote_request_schema = BookingQuoteRequestSchema()
