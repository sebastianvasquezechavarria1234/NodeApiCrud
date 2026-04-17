# NodeApiCrud 🚗

Una API REST profesional construida con **Node.js** y **Express** para gestionar un inventario de autos.

## 🚀 Características

- **Arquitectura Modular:** Separación clara entre rutas, controladores y lógica de base de datos.
- **Validación de Datos:** Middleware dedicado para asegurar la integridad de los datos.
- **Persistencia en JSON:** Uso de un archivo local `db.json` para almacenamiento persistente sin necesidad de bases de datos externas complejas.
- **CRUD Completo:** Soporte para Crear, Leer, Actualizar y Eliminar (CRUD).

## 🛠️ Tecnologías Usadas

- Node.js
- Express.js
- JavaScript (ES Modules)

## 📋 Requisitos

- Node.js (v14 o superior)
- npm o yarn

## 🔧 Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/sebastianvasquezechavarria1234/NodeApiCrud.git
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor en modo desarrollo:
   ```bash
   npm run dev
   ```

## 🛣️ Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/` | Mensaje de bienvenida |
| GET | `/autos` | Obtener todos los autos |
| GET | `/autos/:id` | Obtener un auto por ID |
| POST | `/autos` | Crear un nuevo auto |
| PUT | `/autos/:id` | Actualizar un auto existente |
| DELETE | `/autos/:id` | Eliminar un auto |

## 📄 Estructura del Proyecto

```text
NodeApiCrud/
├── src/
│   ├── controllers/    # Lógica de negocio
│   ├── middlewares/    # Validaciones y filtros
│   ├── routes/         # Definición de endpoints
│   └── utils/          # Utilidades (DB, helpers)
├── db.json             # Base de datos simulada
├── index.js            # Punto de entrada de la aplicación
└── package.json        # Dependencias y scripts
```
