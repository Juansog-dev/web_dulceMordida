import { CONFIG } from "../config";
import type { MarcasResponse } from "../types/marcas";

// Usamos el endpoint unificado de marcas
const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.MARCAS}`;

export const fetchMarcas = async (
  queryString: string,
  signal?: AbortSignal,
): Promise<MarcasResponse> => {
  const urlConParametros = queryString ? `${API_URL}?${queryString}` : API_URL;

  const response = await fetch(urlConParametros, { signal });

  if (!response.ok) {
    throw new Error(
      `Error al obtener marcas: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
};
