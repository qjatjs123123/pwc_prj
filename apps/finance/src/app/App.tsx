import {
  OverlayProvider,
  PortalProvider,
  TanStackProvider,
} from "@monorepo/core";
import { TableEntry } from "@/widgets";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "@monorepo/ui";
import "../global.css";

export default function App() {
  return (
    <TanStackProvider>
      <BrowserRouter>
        <PortalProvider>
          <OverlayProvider>
            <Layout>
              <TableEntry page="1" />
            </Layout>
          </OverlayProvider>
        </PortalProvider>
      </BrowserRouter>
    </TanStackProvider>
  );
}
