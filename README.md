# Proyecto Docker - Contenedores

Este proyecto utiliza Docker y Docker Compose para orquestar una aplicación full-stack con frontend, backend API, PostgreSQL y Redis.

## 🚀 Inicio Rápido

### Prerrequisitos
- Docker instalado
- Docker Compose instalado

### Configuración Inicial

1. **Copiar el archivo de variables de entorno:**
   ```bash
   cp .env.example .env
   ```

2. **Editar el archivo `.env` y cambiar las contraseñas:**
   ```bash
   # Cambiar especialmente:
   POSTGRES_PASSWORD=tu_contraseña_segura_aqui
   DATABASE_URL=postgresql://user:tu_contraseña_segura_aqui@db:5432/app
   ```

### Ejecutar en Producción

```bash
# Construir y levantar todos los servicios
npm run docker:prod

# Ver logs
docker-compose -f docker-compose.prod.yml logs -f

# Detener servicios
npm run docker:stop
```

## 📦 Servicios Incluidos

- **Frontend**: Aplicación web servida por Nginx (puerto 80)
- **API**: Backend Node.js (puerto 4000)
- **PostgreSQL**: Base de datos (puerto 5432)
- **Redis**: Cache en memoria (puerto 6379)
- **Nginx**: Proxy reverso con SSL (puerto 443)

## 🛠️ Scripts Disponibles

```bash
npm run docker:build    # Construir imagen de Docker
npm run docker:run      # Ejecutar contenedor individual
npm run docker:dev      # Modo desarrollo con docker-compose
npm run docker:prod     # Modo producción
npm run docker:stop     # Detener contenedores
npm run docker:clean    # Limpiar sistema Docker
```

## 🔒 Seguridad

- Las credenciales se configuran mediante variables de entorno
- Nunca commitear el archivo `.env` al repositorio
- Cambiar todas las contraseñas por defecto en producción
- Los certificados SSL deben colocarse en `nginx/ssl/`

## 📁 Estructura del Proyecto

```
.
├── api/                    # Backend API
│   ├── Dockerfile         # Dockerfile del backend
│   ├── package.json       # Dependencias de la API
│   ├── index.js           # Servidor Express
│   ├── healthcheck.js     # Script de health check
│   └── .dockerignore      # Archivos a ignorar en build
├── nginx/                 # Configuración de Nginx
│   └── ssl/              # Certificados SSL
├── Dockerfile            # Dockerfile del frontend
├── index.html            # Página web principal
├── docker-compose.prod.yml
├── nginx.conf            # Configuración de Nginx
├── .env.example          # Plantilla de variables de entorno
├── .dockerignore         # Archivos a ignorar en build
└── package.json
```

## ⚠️ Notas Importantes

- ✅ El frontend incluye una página HTML con diseño moderno
- ✅ La API tiene dos endpoints funcionales:
  - `GET /` - Retorna mensaje "Hola Mundo"
  - `GET /health` - Health check del servicio
- Para HTTPS, colocar certificados en `nginx/ssl/`
- Verificar que los puertos no estén en uso antes de ejecutar

## 🧪 Probar la Aplicación

Una vez levantados los contenedores:

- **Frontend**: http://localhost
- **API Hola Mundo**: http://localhost:4000/
- **Health Check**: http://localhost:4000/health

## 📝 Endpoints de la API

### GET /
Retorna un mensaje de bienvenida con información del entorno.

**Respuesta**:
```json
{
  "message": "¡Hola Mundo!",
  "timestamp": "2026-01-17T21:54:00.000Z",
  "environment": "production"
}
```

### GET /health
Health check del servicio.

**Respuesta**:
```json
{
  "status": "OK",
  "uptime": 123.456,
  "timestamp": "2026-01-17T21:54:00.000Z"
}
```
