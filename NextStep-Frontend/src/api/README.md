# Capa de Datos - API

Este directorio contiene la configuración global para las peticiones HTTP y la comunicación con el backend.

## Patrones de Diseño

- **Repository Pattern**: Centraliza el acceso a los datos, permitiendo cambiar la lógica de obtención de datos sin afectar a los componentes.

## Contenido

- `index.js`: Instancia base de Axios con interceptores.
- `endpoints.js`: Diccionario de rutas de la API.
