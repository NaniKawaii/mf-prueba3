import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "alert_sender",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.jsx",
      },
      shared: ["react", "react-dom", "styled-components"],
    }),
  ],
  build: {
    target: "esnext",
  },
  server: {
    port: 5174,
    strictPort: true,
    cors: true,
  },
});
