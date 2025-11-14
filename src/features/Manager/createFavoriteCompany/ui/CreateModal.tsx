import { CloseIcon } from "@/shared/ui/Icon/CloseIcon";
import { Input } from "@/shared/ui/Input/Input";
import { Line } from "@/shared/ui/Line/Line";
import { Modal } from "@/shared/ui/Modal/Modal";
import { Text } from "@/shared/ui/Text/Text";
import { SearchFavoriteCompanyInput } from "../../searchFavoriteCompany";
import { TextArea } from "@/shared/ui/TextArea/TextArea";
import { Button } from "@/shared/ui/Button/Button";
import { useOverlay } from "@/shared/model/useOverlay";

export function CreateModal() {
  const { close } = useOverlay();
  return (
    <Modal>
      <div
        className="bg-white rounded-2xl shadow-xl flex flex-col 
          w-[320px]          
          sm:w-[480px]   
          md:w-[640px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex  justify-between px-4 py-4">
          <Text weight="bold">관심기업 생성</Text>
          <Button onClick={close} className="!p-0 !border-0">
            <CloseIcon/>
          </Button>  
        </div>

        <div className="px-4 py-4 border-t border-[var(--color-line-400)] gap-2 flex flex-col justify-start">
          <Text
            size="3"
            type="body"
            weight="bold"
            align="left"
            className="text-[var(--text-color-100)]"
          >
            관심기업 검색
          </Text>
          <SearchFavoriteCompanyInput />
          <TextArea />
        </div>

        <div className="px-4 py-4 flex justify-end">
          <Button style="fill">저장</Button>
        </div>
      </div>
    </Modal>
  );
}
