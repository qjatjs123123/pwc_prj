import api from "@/shared/config/axios/axiosConfig";
import { MessageDTO } from "./dto/message-DTO";
import { FavoriteCompanyFormProps } from "../model/favorite-company-form";

export async function postFavorite(data: FavoriteCompanyFormProps) {
  try {
    const response = await api.post<MessageDTO>("/favorites", {
      email: data.email,
      company_name: data.company_name,
      memo: data.memo,
    });

    return response.data;
  } catch (error: unknown) {
    console.log(error);
    throw error;
  }
}
