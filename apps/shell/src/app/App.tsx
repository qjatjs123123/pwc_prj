import { TanStackProvider } from "@monorepo/core";
import { Banner } from "../widgets/banner";
import { Header } from "../widgets/header";
import Finance from "mfe_finance/Finance";

export default function App() {
  return (
    <TanStackProvider>
      <Header />
      <Banner />
      <Finance />
       <iframe src="https://dart.fss.or.kr/dsaf001/main.do?rcpNo=20190401004781" className="w-full h-[500px]"/>
    </TanStackProvider>
  );
}
