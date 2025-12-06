import { DropDown } from "@/features/searchReprtCodeDropDown";
import { InputIcon } from "@/shared/ui";
import { Input, SearchDropDown } from "@monorepo/ui";
import { REPRT_CODE, type ReprtKey } from "@/entities/config/constants";
import { type ControllerRenderProps } from "react-hook-form";

interface ReprtCodeDropDownProps {
  field: ControllerRenderProps<any, "reprt_code">;
}

export function ReprtCodeDropDown({ field }: ReprtCodeDropDownProps) {
  return (
    <SearchDropDown>
      <SearchDropDown.Input>
        {({ setShowList, showList, setIsExist }) => (
          <>
            <Input
              {...field}
              value={field.value ? REPRT_CODE[field.value as ReprtKey] : ""}
              readonly
              placeholder="보고서명을 선택해주세요"
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
