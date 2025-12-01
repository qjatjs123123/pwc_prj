import { useOverlay } from "@monorepo/core";
import { Button } from "@monorepo/ui";
import { TrashIcon } from "@monorepo/ui";
import { Text } from "@monorepo/ui";
import { useCheckContext } from "../../checkFavoriteCompany";
import { ModalEntry } from "./common/ModalEntry";
import { CheckContext } from "../../checkFavoriteCompany/ui/CheckProvider";

export function DeleteButton() {
  const { open } = useOverlay();
  const contextValue = useCheckContext();
  
  return (
    <Button
      type="primary"
      style="outline"
      className="gap-2"
      onClick={() =>
        open(() => (
          <CheckContext.Provider value={contextValue}> 
            <ModalEntry />
          </CheckContext.Provider>
        ))
      }
    >
      <TrashIcon color="var(--color-label-800)" />
      <Text>관심기업 삭제</Text>
    </Button>
  );
}
