
---

# `prompts.md`

```md
# Prompts para Codex — Plataforma de eventos Foto Tomas Video

## Prompt 1 — Arquitectura general del proyecto

Quiero que actúes como arquitecto senior fullstack y generes la base de un proyecto escalable para una plataforma web de eventos enfocada en foto y video para cumpleaños de XV, bodas y eventos sociales.

### Stack obligatorio
- Frontend: React + Vite + TypeScript + Tailwind CSS
- Backend: Python + Flask
- DB: PostgreSQL
- Validación robusta
- Arquitectura modular
- Código limpio y escalable

### Reglas importantes
- Prefiero muchos archivos chicos y bien enfocados antes que archivos gigantes.
- Nada de concentrar toda la lógica en un solo archivo.
- Separar presentación, lógica de negocio, acceso a datos y validación.
- Quiero una estructura profesional, mantenible y extensible.
- El backend debe estar organizado por módulos y clases/servicios.
- El frontend debe estar organizado por features, pages, widgets, entities y shared.
- Todo debe quedar preparado para crecer.

### Objetivo
Generame:
1. Estructura de carpetas completa frontend y backend.
2. Explicación breve de cada carpeta.
3. Decisiones arquitectónicas.
4. Lista de dependencias iniciales.
5. Orden recomendado de implementación.

No inventes features fuera del dominio. Mantené el foco en: servicios, packs, disponibilidad, reservas, citas, chat guiado, pagos, auth, perfil y panel admin.

---

## Prompt 2 — Scaffolding frontend

Necesito que generes el scaffolding inicial del frontend con React + Vite + TypeScript + Tailwind.

### Requisitos
- Router configurado
- Layout base
- Header y footer
- Home page
- Página de servicios
- Página de reservas
- Página de perfil
- Páginas de auth
- Base para admin
- Widget de chat guiado flotante a la derecha
- Responsive mobile-first
- Tipado correcto
- Tailwind limpio
- Componentes desacoplados

### Quiero que hagas
1. Crear estructura real de carpetas y archivos.
2. Crear componentes base.
3. Crear routing base.
4. Crear types compartidos.
5. Crear utilidades comunes.
6. Dejar el proyecto corriendo sin errores.

### Restricciones
- No metas lógica compleja todavía.
- No pongas todo en App.tsx.
- No uses archivos enormes.
- No hardcodees basura innecesaria.

---

## Prompt 3 — Diseño de Home premium

Quiero que construyas una Home page premium, moderna, elegante y orientada a conversión para una empresa de foto y video para eventos sociales, especialmente cumpleaños de XV.

### Secciones
- Hero principal con CTA
- Sobre nosotros
- Servicios destacados
- Packs principales
- Galería/portfolio
- Testimonios
- Fechas disponibles
- FAQ
- Contacto
- Footer

### UI/UX
- Full responsive
- Mobile-first
- Diseño limpio y premium
- Animaciones suaves con Framer Motion
- Buen uso de spacing
- Transiciones elegantes
- CTAs claros
- Preparado para imágenes y video

### Importante
- Usar Tailwind bien organizado
- Separar cada sección en componentes
- No usar un archivo gigante
- Mantener semántica HTML correcta
- Priorizar legibilidad y estética profesional

---

## Prompt 4 — Catálogo de servicios y packs

Necesito un módulo frontend + tipados para mostrar servicios y packs de foto/video para eventos.

### Requisitos
- Cards de packs
- Comparativa entre packs
- Lista de beneficios por pack
- Etiquetas visuales: más vendido, premium, recomendado
- CTA a consultar o reservar
- Filtro por tipo de evento
- Responsive

### Quiero
1. Types TS para servicios y packs.
2. Mock inicial limpio.
3. Componentes desacoplados.
4. Vista de catálogo reusable.
5. Vista de detalle de pack.

No uses librerías pesadas si no hacen falta.

---

## Prompt 5 — Calendario de disponibilidad

Quiero un módulo para mostrar disponibilidad de fechas de eventos.

### Requisitos
- Ver fechas disponibles, ocupadas y pendientes
- Responsive
- UX clara
- Estado visual fuerte
- Integrable con backend luego
- Componente limpio y modular

### Quiero
1. Modelo de datos para availability slots.
2. Componentes frontend para calendario/listado.
3. Hook para consumir disponibilidad.
4. Estado loading/error/empty.
5. Preparación para conexión API.

No necesito todavía integración real con Google Calendar. Solo estructura lista para evolucionar.

---

## Prompt 6 — Formulario de consulta y reserva

Quiero que generes un flujo de formulario de consulta/reserva.

### Campos sugeridos
- Nombre
- Apellido
- Email
- Teléfono
- Tipo de evento
- Fecha del evento
- Lugar
- Cantidad estimada de invitados
- Pack de interés
- Comentarios
- Consentimiento de contacto

### Requisitos
- React Hook Form
- Zod
- Mensajes de error claros
- Mobile-friendly
- Componentes reutilizables
- Tipado completo

### Quiero
1. Schema Zod.
2. Types.
3. Form component.
4. Reusable form fields.
5. Payload mapper para backend.

---

## Prompt 7 — Chat guiado lateral

Quiero un chat guiado ubicado fijo en el extremo derecho de la página.

### Objetivo
Ayudar al usuario a resolver dudas rápidas, sugerir packs, mostrar pasos de contratación y derivar a contacto.

### Requisitos
- Widget flotante
- Apertura/cierre elegante
- Responsive
- Flujo guiado por opciones
- Soporte para árbol de conversación
- Estado persistible
- Derivación a WhatsApp
- CTA a formulario o cita
- Código modular

### Quiero
1. Estructura de types para nodos del chat.
2. Mock conversation tree.
3. UI del widget.
4. Lógica desacoplada del render.
5. Hook/controlador del chat.

No hagas IA real todavía. Solo flujo guiado bien diseñado.

---

## Prompt 8 — Backend Flask modular

Quiero que generes la base del backend en Flask con arquitectura profesional.

### Requisitos
- App factory
- Config por entorno
- Blueprints
- SQLAlchemy
- Migrations
- Validaciones
- Manejo global de errores
- Logs
- Separación por módulos
- Preparado para auth, users, services, bookings, appointments, payments, chats, settings

### Quiero
1. Estructura de carpetas profesional.
2. Configuración inicial.
3. Extensiones.
4. Ejemplo de módulo completo.
5. Patrón controller/service/repository/model/schema.

Nada de meter todo en `app.py`.

---

## Prompt 9 — Modelo de datos PostgreSQL

Necesito que diseñes el modelo de datos inicial en PostgreSQL para esta app.

### Entidades necesarias
- users
- profiles
- services
- service_packs
- pack_items
- availability_slots
- leads
- bookings
- appointments
- chats
- chat_messages
- payments
- payment_transactions
- testimonials
- gallery_items
- site_settings
- social_links
- notifications
- audit_logs

### Quiero
1. Explicación de relaciones.
2. Campos clave por tabla.
3. Constraints importantes.
4. Índices recomendados.
5. Consideraciones de escalabilidad.
6. Propuesta lista para migraciones con SQLAlchemy.

---

## Prompt 10 — Auth con invitados + cookies + perfil

Quiero implementar autenticación con soporte para invitados.

### Requisitos
- Registro
- Login
- Logout
- Recupero de contraseña
- Perfil
- Soporte guest
- Cookies seguras
- Roles: user, admin
- Backend Flask
- Frontend React

### Quiero
1. Diseño del flujo completo.
2. Endpoints necesarios.
3. Estructura frontend auth.
4. Protección de rutas.
5. Estrategia de sesión segura.
6. Estrategia para migrar guest a user registrado.

---

## Prompt 11 — Panel admin

Quiero un panel admin profesional.

### Debe administrar
- Servicios
- Packs
- Agenda
- Clientes
- Leads
- Reservas
- Pagos
- FAQs
- Testimonios
- Galería
- Redes sociales
- Ajustes del sitio
- Mapa/ubicación

### Quiero
1. Layout admin.
2. Sidebar.
3. Guards por rol.
4. Tablas y formularios base.
5. Arquitectura modular por feature.
6. Dashboard con KPIs mock.

No quiero todo junto en una única página enorme.

---

## Prompt 12 — Emails y WhatsApp

Quiero integrar notificaciones por email y preparar el sistema para WhatsApp.

### Casos
- Consulta enviada
- Cita creada
- Reserva creada
- Pago confirmado
- Recordatorios

### Quiero
1. Diseño del módulo notifications.
2. Templates desacoplados.
3. Servicio de email.
4. Estrategia para WhatsApp.
5. Estructura extensible para futuros canales.

No hardcodees credenciales. Todo por env.

---

## Prompt 13 — Pagos

Quiero diseñar el módulo de pagos de forma desacoplada.

### Requisitos
- Crear intención de pago
- Asociar reserva con pago
- Guardar estado del pago
- Confirmación por webhook
- Historial para cliente y admin
- Preparar para seña o pago total

### Quiero
1. Diseño de entidades.
2. Endpoints necesarios.
3. Servicio de pagos desacoplado.
4. Flujo frontend de checkout/reserva.
5. Estado de pago y manejo de errores.

No acoples la app a una sola pasarela de pago. Diseñalo con abstracción.

---

## Prompt 14 — Chatting dentro de la app (fase 2)

Quiero diseñar, a nivel arquitectura, un sistema de mensajería interna entre cliente y admin.

### Objetivo
Permitir seguimiento de consultas, reservas y dudas dentro de la app.

### Quiero
1. Diseño de entidades.
2. Endpoints propuestos.
3. Estructura frontend.
4. Posibilidad de tiempo real futura.
5. Estrategia MVP y estrategia fase 2.

Aclará qué conviene hacer en MVP y qué dejar para después.

---

## Prompt 15 — SEO, performance y responsive

Quiero una revisión técnica del frontend para asegurar:
- Full responsive
- Buen rendimiento
- Buen SEO base
- Buenas prácticas de accesibilidad

### Quiero
1. Checklist técnico.
2. Cambios recomendados.
3. Priorización por impacto.
4. Problemas comunes a evitar.
5. Mejoras para mobile.

---

## Prompt 16 — Refactor y estándares

Quiero que revises el código generado y apliques estas reglas:

- Ningún archivo demasiado grande.
- Separar UI, hooks, lógica, validación y servicios.
- Eliminar duplicación.
- Mejorar naming.
- Agregar comentarios solo donde aporten valor real.
- Mantener consistencia.
- Tipado estricto.
- Código simple y profesional.

Quiero que me muestres:
1. Qué problemas encontraste.
2. Qué archivos dividiste.
3. Qué refactors aplicaste.
4. Qué convenciones dejaste instaladas.

---

## Prompt 17 — Seed de datos iniciales

Quiero seeds limpias para desarrollo con:
- Servicios
- Packs
- FAQs
- Testimonios
- Fechas disponibles
- Configuración base del sitio
- Redes sociales

Quiero archivos separados por dominio. Nada de un seed monstruoso.

---

## Prompt 18 — Prompt maestro para arrancar todo el proyecto

Quiero que me construyas la base completa de un sistema web para una empresa de foto y video para eventos sociales, principalmente cumpleaños de XV.

### Stack
- React
- Vite
- TypeScript
- Tailwind
- Python
- Flask
- PostgreSQL

### Módulos obligatorios
- Home comercial premium
- Catálogo de servicios y packs
- Agenda/disponibilidad
- Formulario de consulta/reserva
- Citas/reuniones
- Chat guiado lateral derecho
- Auth con invitado + user + admin
- Perfil de usuario
- Panel admin
- Emails
- WhatsApp
- Pagos
- Configuración editable del sitio

### Reglas de arquitectura
- Proyecto modular
- Muchos archivos chicos y claros
- Nada de archivos gigantes
- Separación por dominio
- Código escalable
- Full responsive
- Animaciones suaves
- Diseño moderno y profesional
- Validaciones sólidas
- Variables sensibles por env

### Quiero que hagas en orden
1. Crear estructura completa de frontend y backend.
2. Configurar base técnica.
3. Crear modelo de datos inicial.
4. Crear layout y páginas base.
5. Crear endpoints base.
6. Crear features del MVP.
7. Dejar todo listo para seguir iterando.

### Muy importante
Cuando tomes decisiones:
- Priorizá claridad
- Priorizá escalabilidad
- Priorizá legibilidad
- Evitá sobreingeniería innecesaria
- No metas dependencias de más