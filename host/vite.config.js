import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        alert_sender: {
          type: "module",
          name: "alert_sender",
          entry: "http://127.0.0.1:5174/remoteEntry.js",
          entryGlobalName: "alert_sender",
          shareScope: "default",
        },
        alert_dashboard: {
          type: "module",
          name: "alert_dashboard",
          entry: "http://127.0.0.1:5175/remoteEntry.js",
          entryGlobalName: "alert_dashboard",
          shareScope: "default",
        },
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
    port: 5173,
    strictPort: true,
    origin: "http://127.0.0.1:5173",
  },
});
