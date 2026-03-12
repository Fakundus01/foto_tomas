from app import create_app


def test_healthcheck_returns_ok():
  app = create_app('testing')
  client = app.test_client()

  response = client.get('/health')

  assert response.status_code == 200
  assert response.json['status'] == 'ok'
