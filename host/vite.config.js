import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        // In dev, the federation plugin serves the entry at /remoteEntry.js reliably.
        // (Depending on Vite/plugin version, /assets/remoteEntry.js may 404 intermittently.)
        alert_sender: "http://127.0.0.1:5174/remoteEntry.js",
        alert_dashboard: "http://127.0.0.1:5175/remoteEntry.js",
      },
      shared: ["react", "react-dom", "styled-components"],
    }),
  ],
  build: {
    target: "esnext",
  },
  server: {
    host: "127.0.0.1",
    port: 5173,
    strictPort: true,
  },
});
