import type { APIRoute } from "astro";
import { API_BASE_URL } from "../../../lib/config";

export const POST: APIRoute = async ({ request }) => {
  const body = await request.text();

  const token = request.headers.get("Authorization");

  const res = await fetch(`${API_BASE_URL}citas/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token || "",
    },
    body,
  });

  const data = await res.json();
  return new Response(JSON.stringify(data), {
    status: res.status,
    headers: { "Content-Type": "application/json" },
  });
};
