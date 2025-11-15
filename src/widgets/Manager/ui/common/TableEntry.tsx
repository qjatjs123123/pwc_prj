import { FavoriteCompanyList } from "@/entities/Manager";
import { Empty } from "@/shared/ui/Empty/Empty";
import { TableContent } from "./TableContent";
import { TablePagination } from "./TablePagination";

export function TableEntry({ data }: { data: FavoriteCompanyList }) {
  const isEmpty = data.items.length === 0;

  return <>{isEmpty ? <TableEmpty /> : <TableWrapper data={data} />}</>;
}

function TableEmpty() {
  return (
    <div className="mt-[40px]">
      <Empty />
    </div>
  );
}

function TableWrapper({ data }: { data: FavoriteCompanyList }) {
  return (
    <>
      <TableContent data={data} />
      <TablePagination />
    </>
  );
}
