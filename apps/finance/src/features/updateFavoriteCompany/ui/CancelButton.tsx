import { useOverlay } from "@monorepo/core";
import { Button } from "@monorepo/ui";
import { Text } from "@monorepo/ui";

export function CancelButton() {
  const {close} = useOverlay();
  return (
    <Button
      style="outline"
      onClick={() => close()}
    >
      <Text>취소하기</Text>
    </Button>
  );
}
