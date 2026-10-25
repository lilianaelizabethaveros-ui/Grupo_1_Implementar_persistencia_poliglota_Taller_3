# Grupo 1 — Implementar Persistencia Políglota
**Taller 3 · Bases de Datos Distribuidas**

## Integrantes
- Liliana Averos — Arquitecta CAP (Líder)
- Juan Jaramillo — DBA SQL / DBA NoSQL
- Camila Perrazo — Ingeniera de Caos (QA)

## Video de presentación
[Ver video en Loom](https://www.loom.com/share/4fa88a7c76f943e59e77d1ffc79e2a9c)

Arquitecta CAP Liliana Averos defiende por qué el sistema no se cae en el próximo Viernes Negro.

## Descripción
Arquitectura de persistencia políglota con PostgreSQL, MongoDB y Redis, implementada con Docker Compose. Incluye pruebas de caos que demuestran aislamiento de servicios.

## Estructura del repositorio
- `docker-compose.yml` — configuración de los tres motores
- `scripts/` — scripts SQL, JS y Redis de inicialización
- `evidencia/` — capturas de pantalla de las pruebas
- `docs/` — diagrama de arquitectura
