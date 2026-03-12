from werkzeug.security import check_password_hash, generate_password_hash


class PasswordHasher:
  @staticmethod
  def hash(value: str) -> str:
    return generate_password_hash(value)

  @staticmethod
  def verify(value: str, hashed_value: str) -> bool:
    return check_password_hash(hashed_value, value)
