import type { APIRoute } from "astro";
import { API_BASE_URL } from "../../../../lib/config";

export const POST: APIRoute = async ({ request, params }) => {
  const id = params.id;

  const body = await request.json();
  const token = request.headers.get("authorization");

  const res = await fetch(`${API_BASE_URL}participantes_por_sorteo/${id}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token || "",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  return new Response(JSON.stringify(data), {
    status: res.status,
    headers: { "Content-Type": "application/json" },
  });
};
