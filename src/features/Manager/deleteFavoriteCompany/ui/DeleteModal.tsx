import { Modal } from "@/shared/ui/Modal/Modal";
import { ModalBody } from "./common/ModalBody";
import { ModalHeader } from "./common/ModalHeader";
import { ModalFooter } from "./common/ModalFooter";
export function DeleteModal() {
  return (
    <Modal>
      <div
        className="bg-white rounded-2xl shadow-xl flex flex-col 
                   w-[400px] justify-center items-center text-center gap-4 px-4 py-4"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader />
        <ModalBody />
        <ModalFooter />
      </div>
    </Modal>
  );
}
