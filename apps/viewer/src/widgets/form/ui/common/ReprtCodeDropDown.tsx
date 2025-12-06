import { DropDown } from "@/features/searchReprtCodeDropDown";
import { InputIcon } from "@/shared/ui";
import { Input, SearchDropDown } from "@monorepo/ui";
import { useFormContext, Controller } from "react-hook-form";

export function ReprtCodeDropDown() {
  const { control } = useFormContext();

  return (
    <Controller
      name={"reprt_code"}
      control={control}
      render={({ field }) => (
        <SearchDropDown>
          <SearchDropDown.Input>
            {({ setShowList, showList, setIsExist }) => (
              <>
                <Input
                  {...field}
                  readonly
                  placeholder="보고서명을 선택해주세요"
                  onFocus={() => {
                    setShowList(true);
                    setIsExist(true);
                  }}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(document.activeElement)) {
                      setShowList(false);
                    }
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
      )}
    />
  );
}
