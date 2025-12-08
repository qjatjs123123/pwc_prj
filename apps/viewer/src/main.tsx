import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import { TanStackProvider } from "@monorepo/core";
import { ToastWrapper } from "./shared/ui/Toast/ToastWrapper";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TanStackProvider>
      <App />
      <ToastWrapper />
    </TanStackProvider>
  </StrictMode>
);
