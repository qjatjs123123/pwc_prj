import { InputDropDownWrapper } from "@/shared/ui";
import { Controller, useFormContext } from "react-hook-form";
import { BsnsYearDropDown } from "./BsnsYearDropDown";
import { ReprtCodeDropDown } from "./ReprtCodeDropDown";

export function ReprtCodeInput() {
  const methods = useFormContext();

  return (
    <Controller
      key={"reprt_code"}
      name={"reprt_code"}
      control={methods.control}
      render={() => (
        <InputDropDownWrapper title={"보고서명"}>
          <ReprtCodeDropDown />
        </InputDropDownWrapper>
      )}
    />
  );
}
