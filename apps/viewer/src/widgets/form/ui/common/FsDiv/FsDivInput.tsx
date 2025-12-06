import { InputDropDownWrapper } from "@/shared/ui";
import { Controller, useFormContext } from "react-hook-form";
import { FsDivDropDown } from "./FsDivDropDown";

export function FsDivInput() {
  const methods = useFormContext();

  return (
    <Controller
      key={"fs_div"}
      name={"fs_div"}
      control={methods.control}
      rules={{ required: true }}
      render={({field}) => (
        <InputDropDownWrapper title={"재무제표"}>
          <FsDivDropDown field={field}/>
        </InputDropDownWrapper>
      )}
    />
  );
}
