import { http, HttpResponse } from 'msw';
import mockCharacter from "../mock/characters"
import mockCharacter2 from "../mock/characters-2"

export const handlers = [
  // implements your handlers
  http.get(
    "https://www.anapioficeandfire.com/api/characters",
    ({ request }) => {
      const page = new URL(request.url).searchParams.get("page");
      if (page === "1") {
        return HttpResponse.json(mockCharacter);
      } else if (page === "2") {
        return HttpResponse.json(mockCharacter2);
      }
    }
  ),
];

