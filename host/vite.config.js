import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        alert_sender: "http://localhost:5174/assets/remoteEntry.js",
        alert_dashboard: "http://localhost:5175/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "styled-components"],
    }),
  ],
  build: {
    target: "esnext",
  },
  server: {
    port: 5173,
    strictPort: true,
  },
});
