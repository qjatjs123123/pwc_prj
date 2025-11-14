"use client";

import { useMutation } from "@tanstack/react-query";
import { FavoriteCompanyFormProps } from "./favorite-company-form";
import { EMAIL } from "@/shared/config/constants/constants";
import { useFormContext } from "react-hook-form";
import axios from "axios";
import { postFavorite } from "../api/post-favorite";

export function usePostFavoriteCompany() {
  const { getValues } = useFormContext<FavoriteCompanyFormProps>();

  const mutation = useMutation({
    mutationFn: async () => {
      const data = getValues();
      console.log(data);
      const res = await postFavorite(data);

      return res.message;
    },
    onSuccess: () => {},
    onError: (error) => {},
    retry: 0,
  });

  return mutation;
}
