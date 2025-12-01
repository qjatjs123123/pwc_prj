import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { useToastService } from "@/shared/ui/Toast/model/useToastService";
import { AxiosError } from "axios";
import { EMAIL } from "@/shared/config/constants/constants";
import { updateFavorite } from "../api/update-favorite";
import { useFormContext } from "react-hook-form";
import type { UpdateModalForm } from "./update-favorite";
import { useOverlay } from "@monorepo/core";

export function useUpdateFavoriteCompany() {
  // const { show } = useToastService();
  const show = (a) => {}
  const { getValues } = useFormContext<UpdateModalForm>();
  const { close } = useOverlay();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (id: number) => {
      const memo = getValues("memo");
      const param = { favorite_id: id, email: EMAIL, memo };
      const res = await updateFavorite(param);

      return res.message;
    },

    onSuccess: (message, updateId) => {
      show(message);
      close();
      queryClient.invalidateQueries({
        queryKey: ["favorite-detail", updateId],
        exact: true,
      });
    },

    onError: (error: AxiosError) => {
      show(error.message);
    },
    retry: 0,
  });

  return mutation;
}
