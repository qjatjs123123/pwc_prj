import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function useChangePageQuery() {
  const navigate = useNavigate();
  const location = useLocation();

  const changePageQuery = useCallback(
    (page: number) => {
      const params = new URLSearchParams(location.search);

      if (page > 1) {
        params.set("page", page.toString());
      } else {
        params.delete("page");
      }

      const newUrl = `${location.pathname}?${params.toString()}`;
      navigate(newUrl, { replace: true });
    },
    [navigate, location]
  );

  return changePageQuery;
}
