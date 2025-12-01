import { useOverlay } from "@monorepo/core";
import { Button } from "@monorepo/ui";
import { CloseBigIcon } from "@monorepo/ui";

export function ModalHeader() {
  const { close } = useOverlay();
  return (
    <div className="w-full flex justify-end p-4">
      <Button className="!p-0 !border-0" onClick={close}>
        <CloseBigIcon />
      </Button>
    </div>
  );
}
