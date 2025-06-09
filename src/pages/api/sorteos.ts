import type { APIRoute } from "astro";
import { API_BASE_URL } from "../../lib/config";

export const GET: APIRoute = async () => {
  const res = await fetch(`${API_BASE_URL}sorteos/`, {
  });

  const data = await res.json();
  return new Response(JSON.stringify(data), {
    status: res.status,
    headers: { "Content-Type": "application/json" },
  });
};