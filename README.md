# foto_tomas

Base completa para una plataforma web de Foto Tomas Video orientada a eventos sociales, con frontend en React/Vite/TypeScript/Tailwind y backend en Flask/PostgreSQL.

## Que ya deje listo

- Frontend responsive con router, home premium, catalogo de servicios, agenda visual, formulario de reserva, auth base, perfil y admin.
- Backend Flask modular con app factory, blueprints, SQLAlchemy, Flask-Migrate, seeds y manejo global de errores.
- Base de datos PostgreSQL `foto_tomas` creada localmente.
- Migracion inicial ejecutada y seed cargado.
- Guia simple de arranque para que no tengas que adivinar nada.

## Estructura

```txt
frontend/
  src/
    app/
    pages/
    widgets/
    features/
    entities/
    shared/

backend/
  app/
    api/
    core/
    modules/
    db/
      models/
      repositories/
      seeds/
    integrations/
    tests/
  migrations/
  run.py
```

## Arquitectura

### Frontend
- `app`: providers y router.
- `pages`: pantallas por ruta.
- `widgets`: bloques grandes de UI.
- `features`: logica puntual como booking, catalogo y chat guiado.
- `entities`: tipos de dominio.
- `shared`: UI reutilizable, utilidades, constantes y cliente HTTP.

### Backend
- `api`: rutas, controllers y schemas.
- `core`: config, extensiones, seguridad y errores.
- `modules`: casos de uso por dominio.
- `db/models`: entidades SQLAlchemy.
- `db/repositories`: acceso a datos desacoplado.
- `db/seeds`: carga inicial separada por dominio.
- `integrations`: email, WhatsApp y pagos preparados para crecer.

## Dependencias principales

### Frontend
- React 19
- React Router
- Tailwind CSS
- Framer Motion
- React Hook Form
- Zod
- Axios

### Backend
- Flask
- Flask-SQLAlchemy
- Flask-Migrate
- Flask-Cors
- Flask-JWT-Extended
- Marshmallow
- Psycopg

## Guia super simple para arrancar todo

### 1. Abrir dos terminales
- Terminal 1: para el backend.
- Terminal 2: para el frontend.

### 2. Prender el backend

Parate en la carpeta del proyecto:

```powershell
cd C:\Users\Facundo\Estudio_Trabajo\foto_tomas
```

Entrar al backend:

```powershell
cd backend
```

Activar el entorno virtual:

```powershell
.\.venv\Scripts\Activate.ps1
```

Levantar el servidor:

```powershell
python run.py
```

Si todo va bien, el backend queda en:

```txt
http://127.0.0.1:5000
```

Proba salud:

```txt
http://127.0.0.1:5000/health
```

### 3. Prender el frontend

Abrir la otra terminal y volver a la carpeta del proyecto:

```powershell
cd C:\Users\Facundo\Estudio_Trabajo\foto_tomas\frontend
```

Instalar dependencias si algun dia hace falta:

```powershell
npm install
```

Levantar el frontend:

```powershell
npm run dev
```

Abrir en el navegador:

```txt
http://localhost:5173
```

### 4. Si un dia queres recrear la base de datos

La app del backend usa PostgreSQL local y ya deje `backend/.env` apuntando a:

```txt
postgresql+psycopg://postgres:TU_PASSWORD@localhost:5432/foto_tomas
```

Comandos utiles:

```powershell
cd C:\Users\Facundo\Estudio_Trabajo\foto_tomas\backend
.\.venv\Scripts\Activate.ps1
python -m flask --app run.py db upgrade
python -m flask --app run.py seed
```

## Endpoints base

- `GET /health`
- `GET /api/v1/auth/session`
- `GET /api/v1/services/catalog`
- `GET /api/v1/availability/slots`
- `POST /api/v1/leads`
- `POST /api/v1/bookings/quote-request`
- `GET /api/v1/settings/public`

## Orden recomendado para seguir

1. Conectar el frontend a los endpoints reales.
2. Implementar auth con cookies seguras y flujo guest -> user.
3. Agregar CRUD admin por modulo.
4. Integrar emails, WhatsApp y pagos reales.
5. Sumar testing, CI/CD y deploy.
