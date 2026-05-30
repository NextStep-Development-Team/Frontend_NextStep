# Servicios Externos

Abstracción de servicios que no dependen del backend propio.

## Patrones de Diseño

- **Adapter Pattern**: Normaliza las respuestas de APIs externas (como OpenAI o Anthropic) al formato esperado por nuestra aplicación.

## Contenido

- `aiService.js`: Adaptador para la IA (Match y Simulador).
- `pdfService.js`: Lógica de exportación a PDF.
