# Roadmap — Plataforma web para eventos | Foto Tomas Video

## 1. Visión del producto

Construir una plataforma web moderna, responsive y escalable para una empresa de foto y video para eventos, enfocada principalmente en cumpleaños de XV, bodas y eventos sociales.

La plataforma debe permitir:

- Mostrar servicios y packs de forma clara y visual.
- Consultar disponibilidad de fechas.
- Reservar citas o reuniones con potenciales clientes.
- Guiar al usuario con un chat asistido.
- Capturar leads mediante formularios.
- Gestionar clientes, pagos, agenda y contenido desde un panel admin.
- Permitir navegación como invitado y también registro/login opcional.
- Facilitar contacto por mail, WhatsApp y, si luego se valida factibilidad, integración adicional con Instagram.
- Tener una arquitectura modular, mantenible y preparada para crecer.

---

## 2. Stack tecnológico

### Frontend
- React
- Vite
- TypeScript
- Tailwind CSS
- React Router
- React Hook Form
- Zod
- Zustand o Context API
- Framer Motion
- Axios

### Backend
- Python
- Flask
- Flask Blueprints
- SQLAlchemy
- Flask-JWT-Extended o auth con cookies seguras
- Marshmallow o Pydantic-style validation layer
- Celery/RQ (fase posterior, si hay jobs)
- Flask-Mail o integración SMTP/API para correos

### Base de datos
- PostgreSQL

### Infra opcional
- Cloudinary / S3 para imágenes
- Redis para sesiones, cache o cola
- Docker para desarrollo/despliegue
- Nginx para reverse proxy
- GitHub Actions para CI/CD

---

## 3. Objetivos del MVP

## MVP funcional
El MVP debe incluir:

1. Home comercial atractiva.
2. Catálogo de servicios / packs.
3. Agenda de disponibilidad visible.
4. Formulario de consulta / reserva.
5. Chat guiado lateral derecho.
6. Sistema de citas/reuniones.
7. Login opcional + modo invitado.
8. Perfil de usuario.
9. Panel admin inicial.
10. Gestión básica de pagos.
11. Emails automáticos.
12. Integración con WhatsApp.
13. Responsive completo.
14. Animaciones suaves y UI moderna.

---

## 4. Roles del sistema

### Invitado
- Navegar por la web.
- Ver servicios, packs, testimonios, portfolio, fechas disponibles.
- Usar chat guiado.
- Completar formularios.
- Solicitar una cita.
- Iniciar compra/reserva sin cuenta, si el flujo lo permite.

### Usuario registrado
- Todo lo del invitado.
- Ver y editar su perfil.
- Ver historial de consultas/reservas.
- Ver estado de pagos.
- Ver mensajes/notificaciones.
- Continuar conversaciones o citas.

### Admin
- CRUD de servicios y packs.
- CRUD de precios.
- Gestión de calendario y fechas bloqueadas/disponibles.
- Gestión de clientes y leads.
- Gestión de reservas/citas.
- Gestión de pagos e ingresos.
- Edición de redes sociales, links, mapas, configuración visual básica.
- Gestión del contenido del chat guiado.
- Gestión de FAQs, testimonios y portfolio.
- Dashboard con métricas.

---

## 5. Módulos funcionales

## 5.1 Landing / Home
### Objetivo
Captar atención, generar confianza y llevar a la conversión.

### Secciones sugeridas
- Hero principal con CTA claro
- Sobre nosotros
- Servicios destacados
- Packs para XV
- Portfolio / galería
- Testimonios
- Fechas disponibles
- Proceso de contratación
- FAQ
- Contacto
- Footer con redes, mapa y datos

### Requisitos
- Diseño premium
- Alto impacto visual
- Optimización mobile
- CTA fijo o sticky para contactar/reservar

---

## 5.2 Catálogo de servicios y packs
### Objetivo
Permitir que el cliente entienda rápidamente qué se ofrece.

### Debe incluir
- Cards de packs
- Comparativa entre packs
- Detalle de qué incluye cada uno
- Extras/add-ons
- Precio base o “desde”
- CTA a consultar o reservar

### Extras recomendados
- Filtros por tipo de evento
- Packs destacados
- Etiquetas “más elegido” / “premium”

---

## 5.3 Agenda de disponibilidad
### Objetivo
Mostrar espacios libres para facilitar la decisión.

### Funcionalidad
- Calendario visual
- Fechas disponibles / ocupadas / pendientes
- Filtro por tipo de evento
- Posibilidad de solicitar una fecha puntual

### Reglas
- El admin define disponibilidad
- Algunas fechas pueden quedar “consultar”
- La reserva final puede quedar pendiente hasta validación/admin/pago

---

## 5.4 Sistema de citas / reuniones
### Objetivo
Agendar reuniones previas con clientes.

### Debe incluir
- Selección de día/hora
- Formulario de datos
- Tipo de reunión: presencial / virtual
- Confirmación por mail
- Recordatorio automático

### Fase posterior
- Integración con Google Calendar
- Reprogramación / cancelación

---

## 5.5 Chat guiado lateral
### Objetivo
Resolver dudas rápidas y aumentar conversión.

### Ubicación
- Widget fijo a la derecha de la pantalla
- Full responsive en mobile con apertura tipo drawer/modal

### Funciones
- Flujo guiado por opciones
- Preguntas frecuentes
- Derivación a WhatsApp
- Captura de lead
- Sugerencia de packs
- Ayuda para reservar o agendar cita

### Fase 2
- Chat más inteligente con IA
- Historial de conversación
- Derivación a humano/admin

---

## 5.6 Auth, cookies y perfil
### Objetivo
Permitir experiencia personalizada sin obligar registro en primera instancia.

### Requisitos
- Login
- Registro
- Invitado
- Recupero de contraseña
- Perfil de usuario
- Cookies seguras
- Preferencias básicas de usuario

### Seguridad
- JWT en cookies httpOnly o sesión segura
- Refresh token si aplica
- Validaciones server-side
- Rate limiting en auth y formularios

---

## 5.7 Admin panel
### Objetivo
Centralizar toda la gestión del negocio.

### Módulos admin
- Dashboard
- Servicios
- Packs
- Agenda
- Clientes
- Consultas
- Reservas
- Pagos
- Ganancias / reportes
- FAQs
- Testimonios
- Galería / portfolio
- Configuración general
- Redes sociales
- Mapa / ubicación
- Contenido del chat guiado

### Métricas sugeridas
- Leads por semana/mes
- Tasa de conversión
- Eventos reservados
- Facturación
- Servicios más vendidos
- Origen de contacto

---

## 5.8 Pagos
### Objetivo
Permitir seña o pago parcial/total.

### Requerimientos
- Crear orden/reserva
- Asociar pago a reserva
- Estados: pendiente / aprobado / rechazado / reembolsado
- Confirmación automática
- Historial para cliente y admin

### Consideraciones
- Empezar con una pasarela principal
- Diseñar módulo desacoplado para soportar múltiples medios más adelante

---

## 5.9 Emails y notificaciones
### Casos
- Confirmación de consulta
- Confirmación de cita
- Confirmación de reserva
- Confirmación de pago
- Recordatorios
- Cambio de estado
- Recupero de contraseña

### Canales
- Email
- WhatsApp
- Notificaciones internas (fase 2)

---

## 5.10 Portfolio / galería
### Objetivo
Mostrar calidad del trabajo y generar confianza.

### Funciones
- Fotos destacadas
- Videos destacados
- Eventos por categoría
- Vista mobile optimizada
- Carga admin de assets

---

## 5.11 Testimonios y reputación
### Debe incluir
- Reseñas reales
- Clientes destacados
- CTA para pedir presupuesto
- Refuerzo de trayectoria y experiencia

---

## 5.12 Configuración editable del sitio
### Admin puede editar
- Redes sociales visibles
- WhatsApp
- Dirección y mapa
- Textos principales
- Botones CTA
- FAQs
- Banner/home destacada
- Datos de contacto
- Horarios de atención

---

## 6. Requisitos no funcionales

### Responsive
- Mobile-first
- Tablet
- Desktop
- Buen uso táctil

### Performance
- Lazy loading de imágenes
- Optimización de assets
- Carga rápida
- SEO técnico básico

### Accesibilidad
- Contraste
- Navegación por teclado
- Etiquetas ARIA básicas

### Mantenibilidad
- Arquitectura modular
- Componentes reutilizables
- Separación estricta de responsabilidades
- Archivos pequeños y enfocados

### Escalabilidad
- API versionada
- Servicios desacoplados
- Capacidad para sumar nuevos tipos de evento y nuevas integraciones

---

## 7. Arquitectura propuesta

## 7.1 Frontend
### Capas
- app
- pages
- widgets
- features
- entities
- shared

### Principios
- Componentes pequeños
- Lógica separada de presentación
- Hooks por feature
- Validación con esquemas
- Cliente HTTP centralizado

---

## 7.2 Backend
### Capas sugeridas
- routes
- controllers
- services
- repositories
- models
- schemas
- utils
- config

### Principios
- Blueprint por dominio
- Servicios por caso de uso
- Repositorios para acceso a datos
- Validaciones separadas
- Configuración por entorno
- Manejo de errores centralizado
- Logs estructurados

---

## 7.3 Base de datos
### Entidades iniciales
- users
- guest_sessions
- profiles
- services
- service_packs
- pack_items
- availability_slots
- bookings
- appointments
- leads
- chats
- chat_messages
- faqs
- testimonials
- gallery_items
- payments
- payment_transactions
- site_settings
- social_links
- notifications
- audit_logs

---

## 8. Estructura de carpetas sugerida

## Frontend
```txt
frontend/
  src/
    app/
      router/
      providers/
      store/
    pages/
      home/
      services/
      booking/
      profile/
      auth/
      admin/
    features/
      auth/
      booking/
      appointment/
      guided-chat/
      payments/
      contact/
      admin-services/
      admin-calendar/
    entities/
      user/
      service/
      booking/
      payment/
      chat/
    widgets/
      header/
      footer/
      hero/
      service-cards/
      testimonials/
      gallery/
      availability-calendar/
      guided-chat-widget/
    shared/
      ui/
      hooks/
      lib/
      utils/
      types/
      constants/
      assets/

      9. Fases de implementación
Fase 0 — Definición

Relevar branding

Definir alcance real

Definir MVP

Armar arquitectura

Definir entidades DB

Armar wireframes

Definir reglas de negocio

Entregables

Roadmap

Prompts

Sitemap

User flows

Modelo de datos inicial

Fase 1 — Base técnica

Inicializar frontend con React + Vite + TS + Tailwind

Inicializar backend Flask modular

Conectar PostgreSQL

Configurar migraciones

Configurar envs

Configurar auth base

Configurar layout base y router

Entregables

Proyecto corriendo end-to-end

Healthcheck

DB conectada

Estructura modular creada

Fase 2 — UI pública

Home

Header/footer

Hero

Servicios y packs

Galería

Testimonios

FAQ

Contacto

Responsive completo

Animaciones suaves

Entregables

Landing comercial usable

Navegación pública completa

Fase 3 — Agenda + reservas + citas

Calendario de disponibilidad

Reserva de fecha

Solicitud de cita

Formularios

Validaciones

Emails automáticos

Entregables

Flujo real de lead/reserva funcionando

Fase 4 — Auth + perfil + cookies

Registro/login

Invitado

Perfil

Historial básico

Recupero de contraseña

Sesión segura

Entregables

Usuarios autenticados y guest flow resuelto

Fase 5 — Chat guiado

Widget lateral

Árbol de conversación

FAQs guiadas

Derivación a contacto

Captura de lead

Entregables

Chat funcional, usable en desktop/mobile

Fase 6 — Admin panel

Dashboard

Gestión de servicios

Gestión de packs

Gestión de calendario

Gestión de clientes

Gestión de reservas

Gestión de pagos

Gestión de settings

Entregables

Admin usable para operar el negocio

Fase 7 — Pagos + integraciones

Integración de pasarela

Estados de pago

Confirmaciones automáticas

WhatsApp

Mail

Integración adicional según factibilidad

Entregables

Flujo comercial cerrado punta a punta

Fase 8 — Optimización y lanzamiento

SEO

Performance

Accesibilidad

Testing

Hardening seguridad

Deploy

Monitoreo

Entregables

Versión productiva

10. Historias de usuario resumidas
Como cliente

Quiero ver los packs disponibles para comparar opciones y elegir el mejor para mi evento.

Como cliente

Quiero consultar fechas disponibles para saber si mi evento puede reservarse.

Como cliente

Quiero completar un formulario rápido para pedir presupuesto.

Como cliente

Quiero chatear con una guía automática para resolver dudas sin esperar respuesta humana.

Como cliente

Quiero pagar una seña para asegurar mi fecha.

Como cliente registrado

Quiero ver mis reservas, pagos y citas desde mi perfil.

Como admin

Quiero editar packs, precios y configuración sin tocar código.

Como admin

Quiero ver clientes, pagos e ingresos para operar el negocio.

11. Reglas técnicas clave

Nada de archivos gigantes.

Separación por dominio/feature.

Lógica de negocio fuera de componentes UI.

Validación tanto frontend como backend.

Variables sensibles solo en .env.

Logs claros.

Código preparado para crecer.

Priorizar legibilidad por encima de “magia”.

Mantener naming consistente.

Evitar acoplamiento innecesario.

12. Funcionalidades extra recomendadas

Wishlist o favoritos de packs

Comparador de packs

Cupones o descuentos

Sistema de referidos

Blog / tips para eventos XV

Panel de métricas más completo

Historial de cambios admin

Centro de notificaciones

Descarga de comprobantes

Multiidioma a futuro

CRM liviano interno

Seguimiento del estado del evento

Checklist para clientes

Timeline del evento

Upload de inspiración/referencias por parte del cliente

Firma de condiciones o aceptación digital

Encuesta postevento

Landing específica para XV / bodas / egresos

13. Criterios de éxito del MVP

El MVP se considera exitoso si:

El usuario puede navegar bien desde mobile.

Puede ver packs y disponibilidad.

Puede dejar consulta o pedir cita.

Puede reservar/pagar al menos un flujo básico.

El admin puede editar contenido clave.

El chat guiado ayuda a convertir.

El sistema queda ordenado y escalable.

14. Próximos pasos inmediatos

Definir branding exacto y tono visual.

Confirmar alcance del MVP.

Diseñar sitemap definitivo.

Diseñar esquema de base de datos.

Generar estructura inicial del repo.

Empezar por Fase 1

## 15. Backlog ejecutado

1. Revise `README.md`, `docs/prompts.md`, `docs/roadmap.md` y `docs/backend..md` para bajar requerimientos reales.
2. Cree el frontend con Vite + React + TypeScript y configure Tailwind sobre Vite.
3. Ordene el frontend por `app`, `pages`, `widgets`, `features`, `entities` y `shared`.
4. Arme una home premium responsive con hero, bloques comerciales, catalogo, agenda, testimonios y FAQ.
5. Cree paginas base para servicios, reservas, perfil, auth y admin.
6. Implemente formulario de reserva con React Hook Form + Zod y mapper listo para backend.
7. Implemente chat guiado lateral con logica desacoplada y persistencia simple en localStorage.
8. Cree el backend Flask modular con app factory, config por entorno, blueprints, extensiones y manejo global de errores.
9. Modele entidades principales en PostgreSQL con SQLAlchemy: users, profiles, services, packs, availability, leads, bookings, appointments, chats, payments, gallery, settings, notifications y audit logs.
10. Cree repositorios, servicios y controllers para `services`, `availability`, `leads`, `bookings` y `settings`.
11. Configure Flask-Migrate, genere la migracion inicial y la aplique sobre PostgreSQL.
12. Cree la base `foto_tomas` en PostgreSQL local.
13. Cargue seeds iniciales separados por dominio.
14. Verifique frontend con `npm run build` y backend con test client + consultas reales a PostgreSQL.
15. Actualice la documentacion con guia simple de arranque y resumen de arquitectura.
16. Integre el logo real en `frontend/public/imgs/logo-f7v.png` y lo conecte a la UI publica/favicon.
17. Agregue el endpoint `GET /api/v1/content/home` para FAQ, testimonios y galeria reales.
18. Conecte home, catalogo, agenda, footer y reservas a la API usando hooks/fetchers separados.
19. Cambie el formulario de reservas para crear leads y pedidos reales contra `bookings/quote-request`.
20. Agregue tests para contenido publico, settings y flujo de reserva, y los deje pasando.
21. Enriquezca los seeds con data mock de presentacion: 9 packs, 7 items de galeria, 5 testimonios, 5 FAQs y 12 slots de agenda.
22. Hice los seeds idempotentes para poder volver a correrlos sin duplicar registros existentes.
23. Ejecute el seed enriquecido sobre PostgreSQL local para cargar el material de demo.
24. Verifique con API y base real que el front ya dispone de contenido suficiente para una presentacion.
25. Oculte las alertas visuales de la UI publica para que la demo no muestre errores de red o estados tecnicos frente al cliente.
