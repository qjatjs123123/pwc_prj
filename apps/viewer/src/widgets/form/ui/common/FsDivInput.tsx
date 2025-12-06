import { InputDropDownWrapper } from "@/shared/ui";
import { Controller, useFormContext } from "react-hook-form";
import { BsnsYearDropDown } from "./BsnsYearDropDown";

export function FsDivInput() {
  const methods = useFormContext();

  return (
    <Controller
      key={"fs_div"}
      name={"fs_div"}
      control={methods.control}
      render={() => (
        <InputDropDownWrapper title={"재무제표"}>
          <BsnsYearDropDown />
        </InputDropDownWrapper>
      )}
    />
  );
}
