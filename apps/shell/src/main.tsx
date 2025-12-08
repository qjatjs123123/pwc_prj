import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./global.css";
import { ToastWrapper } from "./shared/ui/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <ToastWrapper />
  </StrictMode>
);
