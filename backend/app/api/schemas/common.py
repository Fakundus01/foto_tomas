from flask import Request, request


def get_json_payload(current_request: Request | None = None) -> dict:
  target_request = current_request or request
  return target_request.get_json(silent=True) or {}
