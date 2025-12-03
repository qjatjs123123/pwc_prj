import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "https://pwc-viewer.netlify.app/",
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "mfe-viewer",
      filename: "remoteEntry.js",
      exposes: {
        "./Viewer": "./src/App.tsx",
      },
      shared: {
        react: { singleton: true, strictVersion: true },
        "react-dom": { singleton: true, strictVersion: true },
        "@monorepo/ui": { singleton: true, strictVersion: false },
      },
    })
  ],

  build: {
    target: "esnext",
  },
});
