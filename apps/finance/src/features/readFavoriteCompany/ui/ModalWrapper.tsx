import { useGetFavoriteDetail } from "@/entities/model/useGetFavoriteDetail";
import { useUpdateFavoriteCompanyModal } from "@/features/updateFavoriteCompany";
import { Button } from "@monorepo/ui";
import { EditIcon } from "@monorepo/ui";
import { Text } from "@monorepo/ui";

export function ModalWrapper({ favoriteId }: { favoriteId: number }) {
  const { data } = useGetFavoriteDetail(favoriteId);
  const { show } = useUpdateFavoriteCompanyModal(favoriteId);
  return (
    <>
      <div className="flex justify-center py-3 w-full">
        <Text weight="bold">{data.company_name}</Text>
      </div>

      <div className="bt border-t border-[var(--color-line-400)] p-2 flex-1 w-full">
        <div className="p-2 border border-[var(--color-line-400)] h-full">
          {data.memo}
        </div>
      </div>

      <div className="flex justify-end p-2 w-full">
        <Button style="fill" className="flex gap-2" onClick={() => show()}>
          <EditIcon />
          <Text>수정하기</Text>
        </Button>
      </div>
    </>
  );
}
