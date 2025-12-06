import { DropDown } from "@/features/searchBsnsYearDropDown";
import { InputIcon } from "@/shared/ui";
import { Input, SearchDropDown } from "@monorepo/ui";
import { type ControllerRenderProps } from "react-hook-form";

interface BsnsYearDropDownProps {
  field: ControllerRenderProps<any, "bsns_year">;
}

export function BsnsYearDropDown({ field }: BsnsYearDropDownProps) {
  return (
    <SearchDropDown>
      <SearchDropDown.Input>
        {({ setShowList, showList, setIsExist }) => (
          <>
            <Input
              {...field}
              readonly
              placeholder="사업연도를 입력해주세요"
              onFocus={() => {
                setShowList(true);
                setIsExist(true);
              }}
              onBlur={() => {
                setShowList(false);
              }}
            />
            <InputIcon isDown={showList} />
          </>
        )}
      </SearchDropDown.Input>
      <SearchDropDown.Dropdown>
        {({ setShowList }) => (
          <DropDown onChange={field.onChange} setShowList={setShowList} />
        )}
      </SearchDropDown.Dropdown>
    </SearchDropDown>
  );
}
