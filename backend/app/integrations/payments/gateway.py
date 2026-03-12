class PaymentGateway:
  def create_intent(self, amount: str, currency: str = 'ARS') -> dict:
    return {
      'provider': 'generic',
      'amount': amount,
      'currency': currency,
      'status': 'pending',
    }
