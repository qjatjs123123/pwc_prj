import { REPRT_CODE } from "@/entities/config/constants";
import { getReprtArr } from "../lib/getter";

interface DropDownProps {
  onChange: (val: string) => void;
  setShowList: (show: boolean) => void;
}

export function DropDown({ onChange, setShowList }: DropDownProps) {
  const reprts = getReprtArr();
  return (
    <ul className="space-y-1 p-2 z-10">
      {reprts.map((reprt) => (
        <li
          key={reprt}
          onMouseDown={() => {
            onChange(reprt);
            setShowList(false);
          }}
          className="
                px-3 py-2 cursor-pointer
                hover:bg-[var(--input-color-hover)]
                active:bg-[var(--input-color)]
                rounded-md
              "
        >
          {REPRT_CODE[reprt]}
        </li>
      ))}
    </ul>
  );
}
