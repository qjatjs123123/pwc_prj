import { useGetCompanies } from "@/entities/Manager";
import { useMemo } from "react";

interface CompanySuggestProps {
  value: string;
  onChange: (value: string) => void;
  setShowList: (value: boolean) => void;
}

export function CompanySuggest({
  value,
  onChange,
  setShowList,
}: CompanySuggestProps) {
  const { data } = useGetCompanies();

  const filtered = useMemo(() => {
    if (!data?.companies || value.trim() === "") return [];
    return data.companies
      .filter((c) => c.toLowerCase().includes(value.toLowerCase()))
      .slice(0, 5);
  }, [value, data]);

  const isExist = filtered.length > 0;

  return (
    <>
      {isExist && (
        <div
          className="
            absolute w-full rounded-md bg-[var(--color-background-default)]
            shadow-[0_10px_25px_-2px_rgba(0,0,0,0.15)] overflow-hidden
          "
        >
          <ul className="space-y-1 p-2">
            {filtered.map((company, index) => (
              <li
                key={index}
                onClick={() => {
                  onChange(company);
                  setShowList(false);
                }}
                className="
                  px-3 py-2 cursor-pointer
                  hover:bg-[var(--input-color-hover)]
                  active:bg-[var(--input-color)]
                  rounded-md
                "
              >
                {company}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
