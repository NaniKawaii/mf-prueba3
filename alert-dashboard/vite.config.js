import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "alert_dashboard",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.jsx",
      },
      shared: ["react", "react-dom", "styled-components"],
      // Disable dts plugin since we're using JSX not TypeScript
      dts: false,
    }),
  ],
  build: {
    target: "esnext",
  },
  server: {
    host: "127.0.0.1",
    port: 5175,
    strictPort: true,
    cors: true,
    origin: "http://127.0.0.1:5175",
  },
});
