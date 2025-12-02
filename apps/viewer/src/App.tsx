import { Layout } from "@monorepo/ui";
import { ViewerTitle } from "./ViewerTitle";
import "./global.css"
import { ViewerForm } from "./ViewerForm";

function App() {
  return (
    <Layout>
      <ViewerTitle />
      <ViewerForm />
    </Layout>
  );
}

export default App;
