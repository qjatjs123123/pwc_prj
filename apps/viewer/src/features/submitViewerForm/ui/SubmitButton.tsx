import { Button } from "@monorepo/ui";
import { useGetViewerUrl } from "../model/useGetViewerUrl";
import { useQueryClient } from "@tanstack/react-query";
import { useFormContext } from "react-hook-form";

export function SubmitButton() {
  const { refetch } = useGetViewerUrl();
  const queryClient = useQueryClient();
  const { formState } = useFormContext();

  const isValid = formState.isValid;  

  return (
    <Button
      style="fill"
      disabled={!isValid}                   
      onClick={() => {
        if (!isValid) return;

        queryClient.setQueryData(["url"], undefined);
        refetch();
      }}
    >
      검색
    </Button>
  );
}
