import { getFsDivArr } from "../lib/getter";

interface DropDownProps {
  onChange: (val: string) => void;
  setShowList: (show: boolean) => void;
}

export function DropDown({ onChange, setShowList }: DropDownProps) {
  const fsDiv = getFsDivArr();

  return (
    <ul className="space-y-1 p-2 z-10">
      {fsDiv.map(({ key, value }) => (
        <li
          key={key}
          onMouseDown={() => {
            onChange(key);
            setShowList(false);
          }}
          className="
            px-3 py-2 cursor-pointer
            hover:bg-[var(--input-color-hover)]
            active:bg-[var(--input-color)]
            rounded-md
          "
        >
          {value}
        </li>
      ))}
    </ul>
  );
}

