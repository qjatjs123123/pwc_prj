"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { EMAIL } from "@/shared/config/constants/constants";
import { getFavoriteDetail } from "../api/get-favorites-detail";

export function useGetFavoriteDetail(favoriteId: number) {
  const param = {
    favoriteId: Number(favoriteId),
    email: EMAIL,
  };

  return useSuspenseQuery({
    queryKey: ["favorite-detail", favoriteId],
    queryFn: () => getFavoriteDetail(param),
    staleTime: 60_000,
  });
}
