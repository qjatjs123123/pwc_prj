
import { useOverlay } from "@monorepo/core";
import { Modal } from "@/shared/ui/Modal/Modal";
import { ModalWrapper } from "../ui/ModalWrapper";
import { ModalLayout } from "../ui/ModalLayout";
import type { UpdateModalForm } from "../model/update-favorite";
import { FormProvider, useForm } from "react-hook-form";
import { useGetFavoriteDetail } from "@/entities/model/useGetFavoriteDetail";

export function useUpdateFavoriteCompanyModal(favoriteId: number) {
  const { open } = useOverlay();
  const { data } = useGetFavoriteDetail(favoriteId);

  const methods = useForm<UpdateModalForm>({
    defaultValues: {
      memo: data?.memo ?? "",
    },
  });

  const show = () => {
    open(() => (
      <Modal align="right">
        <FormProvider {...methods}>
          <ModalLayout>
            <ModalWrapper favoriteId={favoriteId} />
          </ModalLayout>
        </FormProvider>
      </Modal>
    ));
  };

  return { show };
}
