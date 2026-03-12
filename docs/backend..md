# Backend real implementado

## Estructura

```txt
backend/
  app/
    api/
      routes/
      controllers/
      schemas/
    core/
      config/
      errors/
      security/
    modules/
      auth/
      availability/
      bookings/
      leads/
      services/
      settings/
    db/
      models/
      repositories/
      seeds/
    integrations/
      email/
      whatsapp/
      payments/
    tests/
  migrations/
  run.py
```

## Como esta pensado

- `api/routes`: publica endpoints versionados y healthcheck.
- `api/controllers`: recibe la request y arma la respuesta HTTP.
- `api/schemas`: valida payloads y serializa respuestas.
- `core/config`: concentra envs y configuracion por entorno.
- `core/errors`: maneja errores de negocio y validacion de forma centralizada.
- `core/security`: helpers de password y seguridad base.
- `modules/*`: servicio por dominio con patron controller/service.
- `db/models`: entidades y enums de SQLAlchemy.
- `db/repositories`: acceso a datos desacoplado de la capa HTTP.
- `db/seeds`: seeds separados por servicios, contenido, settings y disponibilidad.
- `integrations/*`: puntos de extension para email, WhatsApp y pagos.
- `tests`: base para pytest.

## Modulos funcionales que ya quedaron andando

- `auth`: endpoint base para estado de sesion guest-ready.
- `services`: catalogo de servicios y packs.
- `availability`: agenda de fechas.
- `leads`: alta de consultas.
- `bookings`: alta de pedido de reserva/presupuesto.
- `settings`: configuracion publica del sitio.

## Estado actual

- App factory lista.
- PostgreSQL conectado.
- Migracion inicial creada.
- Schema aplicado en `foto_tomas`.
- Seed inicial cargado.
