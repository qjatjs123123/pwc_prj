import { SubmitButton } from "@/features/submitViewerForm";
import { inputFieldData } from "@/shared/ui";
import { Controller, useFormContext } from "react-hook-form";
import { CorpCodeInput } from "./common/CorpCodeInput";
import { BsnsYearInput } from "./common/BsnsYearInput";
import { ReprtCodeInput } from "./common/ReprtCodeInput";
import { FsDivInput } from "./common/FsDivInput";

export function ViewerForm() {
  return (
    <form className="flex flex-col gap-3">
      <CorpCodeInput />
      <BsnsYearInput />
      <ReprtCodeInput />
      <FsDivInput />
      <SubmitButton />
    </form>
  );
}
