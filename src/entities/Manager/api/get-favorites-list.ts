import { mapFavoritesList } from "../lib/mapFavoritesList";
import { FavoriteCompanyListDTO } from "./dto/favorites-list-DTO";
import api from "@/shared/config/axios/axiosConfig";

export interface FetchFavoritesParams {
  page?: string;
  email?: string;
}
export async function getFavoritesList({ email, page }: FetchFavoritesParams) {
   try {
    const response = await api.get<FavoriteCompanyListDTO>('/favorites', {
      params: { email, page },
    });

    return mapFavoritesList(response.data);
  } catch (error: unknown ) {
    console.log(error);
    throw error;
  }
}
