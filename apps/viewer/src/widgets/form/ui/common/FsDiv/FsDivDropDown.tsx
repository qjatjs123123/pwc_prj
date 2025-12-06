import { FS_DIV, type FsDivKey } from "@/entities/config/constants";
import { DropDown } from "@/features/searchFsDivDropDown";
import { InputIcon } from "@/shared/ui";
import { Input, SearchDropDown } from "@monorepo/ui";
import { type ControllerRenderProps } from "react-hook-form";

interface FsDivDropDownProps {
  field: ControllerRenderProps<any, "fs_div">;
}

export function FsDivDropDown({ field }: FsDivDropDownProps) {
  return (
    <SearchDropDown>
      <SearchDropDown.Input>
        {({ setShowList, showList, setIsExist }) => (
          <>
            <Input
              {...field}
              value={field.value ? FS_DIV[field.value as FsDivKey] : ""}
              readonly
              placeholder="재무제표 유형을 선택해주세요"
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
          <DropDown
            onChange={(v) => field.onChange(v as FsDivKey)}
            setShowList={setShowList}
          />
        )}
      </SearchDropDown.Dropdown>
    </SearchDropDown>
  );
}
