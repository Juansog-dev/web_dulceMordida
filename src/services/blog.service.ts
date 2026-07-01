import { CONFIG } from "../config";
import type { Blog } from "../types/blog";

export const fetchBlog = async (signal?: AbortSignal): Promise<Blog[]> => {
  const response = await fetch(`${CONFIG.API_URL}${CONFIG.ENDPOINTS.BLOG}`, {
    signal,
  });

  if (!response.ok) {
    throw new Error("Error al obtener blog");
  }

  const data = await response.json();

  return Array.isArray(data)
    ? data.map((b: any) => ({
        ...b,

        idblog: Number(b.idblog),
      }))
    : [];
};
