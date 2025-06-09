import type { APIRoute } from 'astro';
import { API_BASE_URL } from "../../lib/config";

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();

  const response = await fetch(`${API_BASE_URL}token/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  return new Response(JSON.stringify(data), {
    status: response.status,
    headers: { 'Content-Type': 'application/json' },
  });
};
