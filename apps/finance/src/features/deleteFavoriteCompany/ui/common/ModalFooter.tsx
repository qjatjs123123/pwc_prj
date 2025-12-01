import { Button } from "@monorepo/ui";
import { useDeleteFavoriteCompanyList } from "../../model/useDeleteFavoriteCompanyList";
import { useOverlay } from "@monorepo/core";

export function ModalFooter() {
  const mutation = useDeleteFavoriteCompanyList();
  const { close } = useOverlay();
  
  return (
    <div className="flex flex-col w-full gap-2 mt-[10px]">
      <Button
        style="fill"
        className="justify-center"
        onClick={() => mutation.mutate()}
      >
        삭제
      </Button>
      <Button
        style="outline"
        className="justify-center"
        onClick={() => close()}
      >
        취소
      </Button>
    </div>
  );
}
