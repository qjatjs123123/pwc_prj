import { useOverlay } from "@/shared/model/useOverlay";
import { ReactNode, Suspense } from "react";
import { DetailModal } from "./DetailModal";
import { DetailModalSkeleton } from "./DetailModalSkeleton";

interface DetailModalWrapperProps {
  children: (show: () => void) => ReactNode;
  favoriteId: number;
}

export function DetailModalWrapper({
  children,
  favoriteId,
}: DetailModalWrapperProps) {
  const { open } = useOverlay();
  const showDetailModal = () =>
    open(() => (
      <Suspense fallback={<DetailModalSkeleton />}>
        <DetailModal favoriteId={favoriteId} />
      </Suspense>
    ));

  return <>{children(showDetailModal)}</>;
}
