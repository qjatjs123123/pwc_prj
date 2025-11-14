import { Button } from "@/shared/ui/Button/Button";

export function ModalFooter() {
  return (
    <div className="flex flex-col w-full gap-2 mt-[10px]">
      <Button style="fill" className="justify-center">
        삭제
      </Button>
      <Button style="outline" className="justify-center">
        취소
      </Button>
    </div>
  );
}
