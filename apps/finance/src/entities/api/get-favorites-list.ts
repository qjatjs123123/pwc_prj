import { mapFavoritesList } from "../lib/mapFavoritesList";
import type { FavoriteCompanyListDTO } from "./dto/favorites-list-DTO";
import api from "@/shared/config/axios/axiosConfig";

export interface FetchFavoritesParams {
  page?: string;
  email?: string;
}
export async function getFavoritesList({ email, page }: FetchFavoritesParams) {
  const response = await api.get<FavoriteCompanyListDTO>("/favorites", {
    params: { email, page },
  });
  return mapFavoritesList(response.data);
}
