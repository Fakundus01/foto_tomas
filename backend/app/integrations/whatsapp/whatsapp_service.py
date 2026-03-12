class WhatsAppNotificationService:
  def build_link(self, phone: str, message: str) -> str:
    sanitized_phone = ''.join(character for character in phone if character.isdigit())
    encoded_message = message.replace(' ', '%20')
    return f'https://wa.me/{sanitized_phone}?text={encoded_message}'
