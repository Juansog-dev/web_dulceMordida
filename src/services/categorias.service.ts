import { CONFIG } from "../config";
import type { Categoria } from "../types/categoria";

export const fetchCategorias = async (
  signal?: AbortSignal,
): Promise<Categoria[]> => {
  const url = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.CATEGORIAS}`;

  const response = await fetch(url, { signal });

  const data = await response.json();

  return Array.isArray(data)
    ? data.map((c: any) => ({
        ...c,
        idcategoria: Number(c.idcategoria),
        total: Number(c.total),
      }))
    : [];
};
