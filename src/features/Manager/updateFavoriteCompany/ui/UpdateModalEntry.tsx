import { useOverlay } from "@/shared/model/useOverlay";
import { ReactNode } from "react";
import { Modal } from "@/shared/ui/Modal/Modal";
import { UpdateModal } from "./common/UpdateModal";
import { UpdateLayout } from "./common/UpdateLayout";
import { UpdateModalForm } from "../model/update-favorite";
import { FormProvider, useForm } from "react-hook-form";
import { useGetFavoriteDetail } from "@/entities/Manager/model/useGetFavoriteDetail";

interface UpdateModalWrapperProps {
  children: (show: () => void) => ReactNode;
  favoriteId: number;
}

export function UpdateModalEntry({
  children,
  favoriteId,
}: UpdateModalWrapperProps) {
  const { open } = useOverlay();
  const { data } = useGetFavoriteDetail(favoriteId);
  const methods = useForm<UpdateModalForm>({
    defaultValues: {
      memo: data.memo,
    },
  });

  const showUpdateModal = () =>
    open(() => (
      <Modal align="right">
        <FormProvider {...methods}>
          <UpdateLayout>
            <UpdateModal favoriteId={favoriteId} />
          </UpdateLayout>
        </FormProvider>
      </Modal>
    ));

  return <>{children(showUpdateModal)}</>;
}
