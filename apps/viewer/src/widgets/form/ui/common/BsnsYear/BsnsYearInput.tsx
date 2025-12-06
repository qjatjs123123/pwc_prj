import { InputDropDownWrapper } from "@/shared/ui";
import { Controller, useFormContext } from "react-hook-form";
import { BsnsYearDropDown } from "./BsnsYearDropDown";

export function BsnsYearInput() {
  const methods = useFormContext();

  return (
    <Controller
      key={"bsns_year"}
      name={"bsns_year"}
      control={methods.control}
      rules={{ required: true }}
      render={({field}) => (
        <InputDropDownWrapper title={"보고서명"}>
          <BsnsYearDropDown field={field}/>
        </InputDropDownWrapper>
      )}
    />
  );
}
