import type { PostreData } from "../types/tabla";
import { CONFIG } from "../config";

export const graficoService = {
  obtenerPostresMasVendidos: async (): Promise<PostreData[]> => {
    const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.TABLA}`;
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Error al conectar con la API PHP de la gráfica");
    }

    return response.json();
  },
};
