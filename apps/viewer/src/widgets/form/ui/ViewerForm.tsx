import { SubmitButton } from "@/features/submitViewerForm";
import { CorpCodeInput } from "./common/CorpCode/CorpCodeInput";
import { BsnsYearInput } from "./common/BsnsYear/BsnsYearInput";
import { ReprtCodeInput } from "./common/ReprtCode/ReprtCodeInput";
import { FsDivInput } from "./common/FsDiv/FsDivInput";
import { ErrorBoundary } from "react-error-boundary";

export function ViewerForm() {
  return (
    <form className="flex flex-col gap-3">
      <CorpCodeInput />
      <BsnsYearInput />
      <ReprtCodeInput />
      <FsDivInput />
      <div className="flex justify-center pb-[30px]">
        <ErrorBoundary fallback={<>111</>}>
          <SubmitButton />
        </ErrorBoundary>
      </div>
    </form>
  );
}
