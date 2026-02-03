# Sistema de Alertas Académicas (Microfrontends)

Arquitectura basada en microfrontends con **1 Host (Shell)** y **2 microfrontends** independientes:

- `alert-sender`: emite alertas académicas.
- `alert-dashboard`: escucha y muestra la alerta activa.
- `host`: contenedor; solo carga microfrontends y presenta estructura general (sin lógica de negocio).

## Puertos

- Host: `http://localhost:5173`
- Alert Sender: `http://localhost:5174`
- Alert Dashboard: `http://localhost:5175`

## Cómo ejecutar

1. Terminal 1:
   ```bash
   cd alert-sender
   npm install
   npm run dev
   ```
2. Terminal 2:
   ```bash
   cd alert-dashboard
   npm install
   npm run dev
   ```
3. Terminal 3:
   ```bash
   cd host
   npm install
   npm run dev
   ```

Abrir el Host en `http://localhost:5173`.

## Requisitos evaluados (cómo se resolvieron)

### 1) Microfrontends + Host

Se usa **Module Federation** con `@originjs/vite-plugin-federation`:

- Remotes:
  - `alert-sender` expone `./App` (archivo: `alert-sender/src/App.jsx`)
  - `alert-dashboard` expone `./App` (archivo: `alert-dashboard/src/App.jsx`)
- Host consume ambos con `React.lazy()` (archivo: `host/src/App.jsx`).

Configs:

- `host/vite.config.js`
- `alert-sender/vite.config.js`
- `alert-dashboard/vite.config.js`

### 2) Estilos encapsulados (styled-components)

Todos los estilos están hechos **exclusivamente con `styled-components`** dentro de cada MF:

- `alert-sender/src/App.jsx`
- `alert-dashboard/src/App.jsx`
- `host/src/App.jsx`

No se usa CSS global (`createGlobalStyle`) ni archivos `.css`.

### 3) Comunicación desacoplada

La comunicación entre microfrontends se hace por **evento del DOM** (CustomEvent) sobre `window`.

- Emisión: `alert-sender/src/App.jsx`
  - `window.dispatchEvent(new CustomEvent("academic-alert", { detail }))`
- Suscripción: `alert-dashboard/src/App.jsx`
  - `window.addEventListener("academic-alert", handler)`

Este mecanismo evita acoplamiento directo (no hay imports entre microfrontends).

