# NextStep 

> **Plataforma de Empleo para Egresados sin Experiencia Laboral**

 **Fecha:** 18 de mayo de 2026

---

##  Tecnologías (Front-end)
- **React** (UI)
- **Vite** (entorno de desarrollo y build)
- **JavaScript** (lógica del cliente)

---

##  Problema
Uno de los obstáculos más comunes para los jóvenes que terminan la universidad es el **círculo vicioso de la experiencia laboral**:

- Para conseguir empleo se necesita experiencia previa.
- Pero no es posible adquirir esa experiencia sin antes haber trabajado.

Aunque los egresados cuentan con formación académica, muchas plataformas tradicionales (por ejemplo, **LinkedIn** u **OCC Mundial**) fueron diseñadas para perfiles con trayectoria. Esto coloca a los recién egresados en desventaja y genera costos reales: retraso en su desarrollo económico, independencia y crecimiento profesional.

---

##  Solución propuesta
**NextStep** es un ecosistema digital que conecta a **egresados universitarios sin experiencia laboral formal** con **empresas** que aceptan esta condición como punto de partida.

En lugar de pedir “años de experiencia”, la plataforma permite construir una presentación profesional basada en:

- Proyectos académicos
- Habilidades técnicas y blandas
- Voluntariados y actividades extracurriculares
- Logros universitarios

Así, las empresas evalúan el potencial real del candidato más allá de un historial laboral que todavía no existe.

---

##  ¿Cómo funciona? (visión general)
1. **Egresados** crean su perfil (orientado a potencial) y completan su ruta de empleabilidad.
2. **Empresas** publican vacantes y retos diseñados para perfiles sin experiencia.
3. Al aplicar, el sistema genera un **match con IA**:
   - % de compatibilidad
   - explicación en lenguaje natural ("Encajas con esta vacante porque...")
4. Se activa **mensajería interna** y el sistema muestra **alertas**.
5. La **verificación universitaria** fortalece la confianza entre ambas partes.

---

##  Roles principales

###  Administrador de la plataforma
- Aprueba, suspende o elimina cuentas (empresas y egresados)
- Revisión y moderación de verificación de documentos
- Moderación de contenido y seguridad
- Panel de métricas (vacantes, retos, matches, documentos pendientes)
- Gestión de suscripciones

###  Empresas reclutadoras
- Perfil institucional (cultura, valores y beneficios)
- Publicación de vacantes enfocadas en candidatos sin experiencia
- Publicación de retos con entregables y fecha límite
- Búsqueda filtrada de candidatos
- Retroalimentación anónima a candidatos no seleccionados

###  Egresados
- Registro y perfil con foco en potencial
- Carga de documento para verificación
- Ruta de empleabilidad (recomendaciones personalizadas)
- Búsqueda de vacantes “sin experiencia requerida”
- Simulador de entrevistas con IA

---

##  Funcionalidades compartidas

###  Match con IA
- % de compatibilidad **(0–100)**
- explicación cualitativa y motivos (en español)

###  Explicación del match
Texto breve en lenguaje natural para egresado y empresa, sin fricción adicional.

###  Mensajería interna
- Comunicación directa empresa ↔ egresado
- Historial conservado mientras ambas cuentas estén activas
- Estado: **enviado / leído** + hora de envío

###  Alertas internas
Ícono de campana con contador de notificaciones no leídas.

---

##  Diferencias frente a plataformas existentes
- **LinkedIn** se centra en trayectoria laboral.
- **NextStep** se centra en **potencial** desde el primer momento.
- Verificación universitaria mediante revisión del administrador.
- Retos como evidencia práctica de habilidades.
- Simulador de entrevistas + ruta de empleabilidad como acompañamiento real.

---

## Modelo de negocio (freemium)
- **Egresados:** acceso gratuito.
- **Empresas:** pueden publicar vacantes gratis, pero para funcionalidades avanzadas (filtros extendidos, mayor acceso a candidatos, destacar vacantes, publicar retos) se requiere suscripción mensual o anual.
- **Premium** opcional para egresados (visibilidad prioritaria / plantillas CV).
- Ingreso adicional mediante **publicidad segmentada**.

---

##  Requerimientos (alto nivel)

### MVP / Prioridad alta (resumen)
- Registro e inicio/cierre de sesión seguro (egresado)
- Perfil de egresado con indicador de completitud
- Carga y estado del documento de verificación
- Distintivo “Verificado” cuando el admin aprueba
- Vacantes y retos para perfiles sin experiencia
- Match con IA + explicación
- Mensajería interna + alertas
- Panel de métricas para el administrador

### No funcional (resumen)
- Contraseñas con **hash seguro** (bcrypt/Argon2)
- Respuesta rápida (general < 3s; IA < 10s)
- Arquitectura escalable y mantenible
- Usabilidad del registro (completado en < 5 min)

---

##  Frontend (React + Vite)
Este repositorio contiene el **prototipo frontend** construido con:

- **React** (UI)
- **Vite** (bundler / dev server)
- **JavaScript** (lógica del cliente)

### Instalación y ejecución local (manual)
1. Abre una terminal en esta carpeta:
   ```
   FrontEnd_NextStep/Frontend_NextStep/NextStep-Frontend
   ```
2. Instala dependencias:
   ```
   npm install
   ```
3. Ejecuta el servidor de desarrollo:
   ```
   npm run dev
   ```

---

##  Estado del proyecto
**Frontend en desarrollo** (React/Vite). Las pantallas se irán conectando progresivamente con la lógica/servicios del producto.

---

##  Recursos del proyecto
La propuesta, roles, funcionalidades y criterios (RFE/RFEM/RFA/RFFM/RNF) fueron definidos para enfocarse en:
- Egresados sin experiencia
- Verificación universitaria
- Evaluación asistida por IA
- Retos como evidencia práctica de habilidades

---

###  Autor
**NextStep**

