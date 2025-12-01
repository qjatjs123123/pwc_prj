import { useGetFavoriteDetail } from "@/entities/model/useGetFavoriteDetail";
import { Text } from "@monorepo/ui";
import { TextArea } from "@monorepo/ui";
import { CancelButton } from "./CancelButton";
import { UpdateButton } from "./UpdateButton";
import { Controller, useFormContext } from "react-hook-form";
import type { UpdateModalForm } from "../model/update-favorite";

export function ModalWrapper({ favoriteId }: { favoriteId: number }) {
  const { data } = useGetFavoriteDetail(favoriteId);
  const { control } = useFormContext<UpdateModalForm>();

  return (
    <>
      <div className="flex justify-center py-3 w-full">
        <Text weight="bold">{data.company_name}</Text>
      </div>

      <div className="bt border-t border-[var(--color-line-400)] p-2 flex-1 w-full">
        <Controller
          name="memo"
          control={control}
          render={({ field }) => (
            <TextArea
              {...field}
              className="p-2 border border-[var(--color-line-400)] !h-full"
            />
          )}
        />
      </div>

      <div className="flex justify-end p-2 w-full gap-2">
        <CancelButton />
        <UpdateButton favoriteId={favoriteId} />
      </div>
    </>
  );
}
