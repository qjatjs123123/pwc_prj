import { http, HttpResponse } from "msw";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const favoritesPostHandler = [
  http.post(`${baseUrl}/favorites`, async ({ request }) => {
    const body = await request.json();

    return HttpResponse.json({ message: "등록되었습니다." }, { status: 201 });
  }),
];
