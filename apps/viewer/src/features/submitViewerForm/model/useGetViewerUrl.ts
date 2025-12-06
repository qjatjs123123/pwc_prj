import { useQuery } from "@tanstack/react-query";
import { getViewerUrl } from "../api/get-viewerUrl";
import type { ViewerFormProps } from "./type";
import { useFormContext } from "react-hook-form";
import { mapFormValues } from "../lib/mapFormValues";

export function useGetViewerUrl() {
  const { getValues } = useFormContext<ViewerFormProps>();
  const formData = getValues();

  return useQuery({
    queryKey: ["url"],
    queryFn: () => getViewerUrl(mapFormValues(formData)),
    enabled: false,
    retry: 0,
    gcTime: 0,
  });
}
