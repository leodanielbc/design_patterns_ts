# Design patterns with Typescript

Ejemplos de implementacion de patrones de diseño

- [Singleton](https://github.com/leodanielbc/design_patterns_ts/blob/master/src/creational/singleton/README.md)

## 🚀 Scripts disponibles

- `npm run start`: Ejecuta el proyecto con ts-node.
- `npm run build`: Compila el código TypeScript a JavaScript (en /dist).
- `npm run dev`: Ejecuta con nodemon (si decides instalarlo).
- `npm run dev`: Ejecuta el proyecto con `nodemon`.
- `npm run db:up`: Levanta la base de datos PostgreSQL con Docker.
- `npm run db:down`: Detiene y elimina el contenedor de PostgreSQL.

## 🛠️ Compilar el proyecto

```bash
npm run build
```

## ▶️ Ejecutar el proyecto

```bash
npm install
npm run db:up     # Levantar base de datos PostgreSQL en Docker
npm run start
```
## 🧪 Base de datos PostgreSQL
EL proyecto usa PostgreSQL para persistencia básica en algunos ejemplos.

### 🐘 Configuración vía Docker

El archivo `docker-compose.yml` ya incluye el servicio PostgreSQL:
- Usuario: admin
- Contraseña: test
- Base de datos: test_db

### 🧰 Comandos útiles
Conectarse a la base de datos desde docker
```bash
docker exec -it design_patterns_db psql -U admin -d design_patterns
```
