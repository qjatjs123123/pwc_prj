import { Button } from "@monorepo/ui";
import { Text } from "@monorepo/ui";
import { useUpdateFavoriteCompany } from "../model/useUpdateFavoriteCompany";

export function UpdateButton({favoriteId} : {favoriteId: number}) {
  const mutation = useUpdateFavoriteCompany();

  return (
    <Button
      style="fill"
      onClick={() => mutation.mutate(favoriteId)}
    >
      <Text>저장하기</Text>
    </Button>
  );
}
