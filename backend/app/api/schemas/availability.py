from marshmallow import Schema, fields, validate


class AvailabilityQuerySchema(Schema):
  event_type = fields.String(validate=validate.OneOf(['xv', 'boda', 'social']))


class AvailabilitySlotSchema(Schema):
  id = fields.UUID(required=True)
  event_type = fields.String(required=True)
  event_date = fields.Date(required=True)
  status = fields.String(required=True)
  note = fields.String(allow_none=True)


availability_query_schema = AvailabilityQuerySchema()
availability_slot_schema = AvailabilitySlotSchema(many=True)
