
import { useGetFavoriteList } from "@/entities";
import { CheckProvider } from "@/features/checkFavoriteCompany";
import { TableTitle } from "./TableTitle";
import { Table } from "./Table";

export function TableWrapper() {
  const { data } = useGetFavoriteList();

  return (
    <>
      <CheckProvider data={data}>
        <TableTitle />
        <Table data={data} />
      </CheckProvider>
    </>
  );
}
