# NodeApiCrud 🚗

Una API REST profesional construida con **Node.js** y **Express** para gestionar un inventario de autos.

## 🚀 Características

- **Arquitectura Modular:** Separación clara entre rutas, controladores y lógica de base de datos.
- **Validación de Datos:** Middleware dedicado para asegurar la integridad de los datos.
- **Persistencia en JSON:** Uso de un archivo local `db.json`.
- **Soporte CORS:** Listo para ser consumido desde cualquier frontend.
- **Filtros Avanzados:** Permite buscar autos por nombre o categoría.

## 🔧 Instalación

1. Clona el repositorio.
2. `npm install`
3. `npm run dev`

## 🛣️ Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/` | Bienvenida |
| GET | `/autos` | Obtener todos (soporta `?categoria=` y `?nombre=`) |
| GET | `/autos/:id` | Por ID |
| POST | `/autos` | Crear |
| PUT | `/autos/:id` | Actualizar |
| DELETE | `/autos/:id` | Eliminar |

## 📄 Estructura

- `src/controllers/`: Lógica.
- `src/middlewares/`: Validaciones.
- `src/routes/`: Endpoints.

