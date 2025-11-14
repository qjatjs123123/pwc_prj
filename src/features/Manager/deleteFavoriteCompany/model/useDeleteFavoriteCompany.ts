import { useMutation } from "@tanstack/react-query";
import { deleteFavorite } from "../api/delete-favorite";
import { useToastService } from "@/shared/ui/Toast/model/useToastService";
import { AxiosError } from "axios";
import { EMAIL } from "../../../../shared/config/constants/constants";
import { useOverlay } from "@/shared/model/useOverlay";

export function useDeleteFavoriteCompany(checkedIds: number[]) {
  const { show } = useToastService();
  const { close } = useOverlay();
  
  const mutation = useMutation({
    mutationFn: async () => {

      const result = await Promise.all(
        checkedIds.map(async (id) => {
          const param = { favorite_id: id, email: EMAIL };
          const res = await deleteFavorite(param);
          return res.message;
        })
      );

      return result[0];
    },
    onSuccess: (message) => {
      close();
      show(message);
    },
    onError: (error: AxiosError) => {
      show(error.message);
    },
    retry: 0,
  });

  return mutation;
}
