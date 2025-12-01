import { Button } from "@monorepo/ui";
import { usePostFavoriteCompany } from "../../model/usePostFavoriteCompany";
import { useOverlay } from "@monorepo/core";

export function ModalFooter() {
  const mutation = usePostFavoriteCompany();
  const { close } = useOverlay();

  return (
    <div className="px-4 py-4 flex justify-end">
      <Button
        style="fill"
        onClick={() => {
          mutation.mutate();
          close();
        }}
      >
        저장
      </Button>
    </div>
  );
}
