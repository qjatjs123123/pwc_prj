import { mapFavoritesList } from "../lib/mapFavoritesList";
import { FavoriteCompanyListDTO } from "./dto/favorites-list-DTO";


export interface FetchFavoritesParams {
  page?: string;
  email?: string;
}
export async function getFavoritesList({ email, page }: FetchFavoritesParams) {
  const params = new URLSearchParams();
  if (email) params.append("email", email);
  if (page) params.append("page", page);


  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/favorites?${params.toString()}`
  );

  if (!res.ok) {
    throw new Error("");
  }

  const data: FavoriteCompanyListDTO = await res.json();
  return mapFavoritesList(data);
}
