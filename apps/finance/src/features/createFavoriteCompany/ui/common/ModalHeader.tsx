import { useOverlay } from "@monorepo/core";
import { Button } from "@monorepo/ui";
import { CloseIcon } from "@monorepo/ui";
import { Text } from "@monorepo/ui";

export function ModalHeader() {
  const { close } = useOverlay();
  
  return (
    <div className="flex  justify-between px-4 py-4">
      <Text weight="bold">관심기업 생성</Text>
      <Button onClick={close} className="!p-0 !border-0">
        <CloseIcon />
      </Button>
    </div>
  );
}
