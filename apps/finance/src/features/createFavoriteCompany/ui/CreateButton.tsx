
import { useOverlay } from "@monorepo/core";
import { Button } from "@monorepo/ui";
import { PlusIcon } from "@monorepo/ui";
import { Text } from "@monorepo/ui";
import { ModalWrapper } from "./common/ModalWrapper";

export function CreateButton() {
  const { open } = useOverlay();
  return (
    <Button
      type="primary"
      style="fill"
      className="gap-2"
      onClick={() => open(() => <ModalWrapper />)}
    >
      <PlusIcon />
      <Text>관심기업 생성</Text>
    </Button>
  );
}
