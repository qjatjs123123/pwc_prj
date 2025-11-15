import { http, HttpResponse } from "msw";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const favoriteDetailHandler = [
  http.get(`${baseUrl}/favorites/:favorite_id`, () => {
    // 성공 응답
    return HttpResponse.json(
      {
        id: 1,
        email: "test@example.com",
        company_name: "삼성",
        memo: "메모1",
        created_at: "2025-11-12T07:57:31.623756",
      },
      { status: 200 }
    );
  }),
];
