"use client";

import { Input } from "@/shared/ui/Input/Input";
import { CompanySuggest } from "./CompanySuggest";
import { useState } from "react";

interface SearchDropDownProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchDropDown({ value, onChange }: SearchDropDownProps) {
  const [showList, setShowList] = useState(true);

  return (
    <div className="relative">
      <Input
        value={value}
        placeholder="관심기업 입력해주세요"
        onChange={(e) => {
          onChange(e.target.value);
          setShowList(true);
        }}
      />

      {showList && (
        <CompanySuggest
          value={value}
          onChange={onChange}
          setShowList={setShowList}
        />
      )}
    </div>
  );
}
