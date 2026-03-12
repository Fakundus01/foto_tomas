from datetime import UTC, datetime

from flask import jsonify


class HealthController:
  @staticmethod
  def get_status():
    return (
      jsonify(
        {
          'status': 'ok',
          'service': 'foto-tomas-api',
          'timestamp': datetime.now(UTC).isoformat(),
        }
      ),
      200,
    )
