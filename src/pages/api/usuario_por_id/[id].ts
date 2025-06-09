import type { APIRoute } from 'astro';
import { API_BASE_URL } from "../../../lib/config";

export const GET: APIRoute = async ({ params, request }) => {
  const id = params.id;
  const authHeader = request.headers.get('authorization');

  if (!authHeader) {
    return new Response(
      JSON.stringify({ error: 'No se proporcionó el token de autorización' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const response = await fetch(`${API_BASE_URL}usuario_por_id/${id}`, {
    method: 'GET',
    headers: {
      'Authorization': authHeader,
    },
  });

  const data = await response.json();
  return new Response(JSON.stringify(data), {
    status: response.status,
    headers: { 'Content-Type': 'application/json' },
  });
};