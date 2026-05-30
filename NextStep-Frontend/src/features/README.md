# Módulos de Funcionalidad (Features)

Esta carpeta es el núcleo de la aplicación. Cada subcarpeta representa un módulo de negocio independiente.

## Estructura de una Feature

Cada feature debe tener su propia estructura interna si es compleja:

- `components/`: Componentes específicos de la feature.
- `api/`: Llamadas a API específicas (Repository).
- `hooks/`: Lógica de negocio (Controller).
- `pages/`: Vistas de la feature.
- `store/`: Estado local del módulo.
