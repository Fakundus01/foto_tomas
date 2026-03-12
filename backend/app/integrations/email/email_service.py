class EmailNotificationService:
  def send(self, recipient: str, subject: str, body: str) -> dict:
    return {
      'channel': 'email',
      'recipient': recipient,
      'subject': subject,
      'body': body,
      'status': 'queued',
    }
