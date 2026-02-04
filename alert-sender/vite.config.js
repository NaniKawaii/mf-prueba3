import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

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
      // Disable TypeScript declaration file generation (not needed for JSX projects)
      dts: false,
    }),
  ],
  build: {
    target: "esnext",
  },
  server: {
    host: "127.0.0.1",
    port: 5174,
    strictPort: true,
    cors: true,
    origin: "http://127.0.0.1:5174",
  },
});
