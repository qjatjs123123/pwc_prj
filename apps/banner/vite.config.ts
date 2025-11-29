import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { federation } from "@module-federation/vite";


export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "mfe_banner",
      filename: "remoteEntry.js",
      exposes: {
        "./Banner": "./src/Banner.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
  },
  preview: {
    port: 5002,
  },
  server: {
    port: 5002, // dev 서버 포트 설정
  },
});
