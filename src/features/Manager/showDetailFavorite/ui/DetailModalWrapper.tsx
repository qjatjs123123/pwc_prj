import { useOverlay } from "@/shared/model/useOverlay";
import { ReactNode } from "react";
import { DetailModal } from "./DetailModal";

interface DetailModalWrapperProps {
  children: (show: () => void) => ReactNode;
}

export function DetailModalWrapper({ children }: DetailModalWrapperProps) {
  const { open } = useOverlay();
  const showDetailModal = () => open(() => <DetailModal />);

  return <>{children(showDetailModal)}</>;
}
