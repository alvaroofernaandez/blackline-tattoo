import type { APIRoute } from "astro";
import { API_BASE_URL } from "../../lib/config";

export const GET: APIRoute = async ({ url, request }) => {
  const fecha = url.searchParams.get("fecha");
  const token = request.headers.get("Authorization");

  const res = await fetch(`${API_BASE_URL}citas_tramo_horario/?fecha=${fecha}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token || "",
    },
  });

  const data = await res.json();
  return new Response(JSON.stringify(data), {
    status: res.status,
    headers: { "Content-Type": "application/json" },
  });
};