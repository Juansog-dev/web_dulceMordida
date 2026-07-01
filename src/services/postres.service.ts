import { CONFIG } from "../config";

export interface Postre {
  id: number; // Mapeado exactamente a tu columna 'id'
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
}

export const fetchPostres = async (signal?: AbortSignal): Promise<Postre[]> => {
  const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.POSTRES}`;
  const response = await fetch(API_URL, { signal });
  if (!response.ok) {
    throw new Error(`Error al obtener postres: ${response.status}`);
  }
  return response.json();
};

export const insertPostresService = async (
  nombre: string,
  descripcion: string,
  precio: string,
  stock: string,
) => {
  const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.POSTRES_INSERT}`;
  const formData = new FormData();
  formData.append("nombre", nombre);
  formData.append("descripcion", descripcion);
  formData.append("precio", precio);
  formData.append("stock", stock);
  const response = await fetch(API_URL, { body: formData, method: "POST" });
  return response.text();
};

export const updatePostresService = async (
  id: string,
  nombre: string,
  descripcion: string,
  precio: string,
  stock: string,
) => {
  const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.POSTRES_UPDATE}`;
  const formData = new FormData();
  formData.append("id", id); // Envía 'id' al PHP
  formData.append("nombre", nombre);
  formData.append("descripcion", descripcion);
  formData.append("precio", precio);
  formData.append("stock", stock);
  const response = await fetch(API_URL, { body: formData, method: "POST" });
  return response.text();
};

export const deletePostresService = async (id: string) => {
  const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.POSTRES_DELETE}`;
  const formData = new FormData();
  formData.append("id", id); // Envía 'id' al PHP
  const response = await fetch(API_URL, { body: formData, method: "POST" });
  return response.text();
};
