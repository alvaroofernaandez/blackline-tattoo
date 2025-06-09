import type { APIRoute } from 'astro';
import { API_BASE_URL } from "../../lib/config";

export const PATCH: APIRoute = async ({ request }) => {
  const body = await request.json();

  const response = await fetch(`${API_BASE_URL}modificar_recibir_correos/`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  return new Response(JSON.stringify(data), {
    status: response.status,
    headers: { 'Content-Type': 'application/json' },
  });
};