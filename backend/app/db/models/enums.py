import enum


class UserRoleEnum(str, enum.Enum):
  GUEST = 'guest'
  USER = 'user'
  ADMIN = 'admin'


class EventTypeEnum(str, enum.Enum):
  XV = 'xv'
  BODA = 'boda'
  SOCIAL = 'social'


class AvailabilityStatusEnum(str, enum.Enum):
  AVAILABLE = 'available'
  PENDING = 'pending'
  BOOKED = 'booked'


class LeadStatusEnum(str, enum.Enum):
  NEW = 'new'
  CONTACTED = 'contacted'
  QUALIFIED = 'qualified'
  WON = 'won'
  LOST = 'lost'


class BookingStatusEnum(str, enum.Enum):
  DRAFT = 'draft'
  PENDING = 'pending'
  CONFIRMED = 'confirmed'
  CANCELLED = 'cancelled'


class AppointmentTypeEnum(str, enum.Enum):
  VIRTUAL = 'virtual'
  PRESENTIAL = 'presential'


class AppointmentStatusEnum(str, enum.Enum):
  PENDING = 'pending'
  CONFIRMED = 'confirmed'
  CANCELLED = 'cancelled'


class PaymentStatusEnum(str, enum.Enum):
  PENDING = 'pending'
  APPROVED = 'approved'
  REJECTED = 'rejected'
  REFUNDED = 'refunded'


class ChatSenderTypeEnum(str, enum.Enum):
  USER = 'user'
  ADMIN = 'admin'
  SYSTEM = 'system'


class NotificationChannelEnum(str, enum.Enum):
  EMAIL = 'email'
  WHATSAPP = 'whatsapp'
  INTERNAL = 'internal'
