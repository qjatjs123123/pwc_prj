import { Button } from "@/shared/ui/Button/Button";
import { usePostFavoriteCompany } from "../../model/usePostFavoriteCompany";

export function ModalFooter() {
  const mutation = usePostFavoriteCompany();
  
  return (
    <div className="px-4 py-4 flex justify-end">
      <Button style="fill" onClick={() => mutation.mutate()}>저장</Button>
    </div>
  );
}
