import { CONFIG } from "../config";
import type { Producto } from "../types/producto";

export const fetchProductos = async (
  signal?: AbortSignal,
  idcategoria?: number | null,
): Promise<Producto[]> => {
  const endpoint = CONFIG.ENDPOINTS.TIENDA;

  const params =
    idcategoria !== null && idcategoria !== undefined
      ? `?idcategoria=${idcategoria}`
      : "";

  const url = `${CONFIG.API_URL}${endpoint}${params}`;

  console.log("ID CATEGORIA:", idcategoria);
  console.log("URL FINAL:", url);

  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error("Error al obtener productos");
  }

  const data = await response.json();

  console.log("DATA PRODUCTOS:", data);

  return Array.isArray(data)
    ? data.map((p: any) => ({
        ...p,
        id: Number(p.id),
        precio: Number(p.precio),
        stock: Number(p.stock),
        idcategoria: Number(p.idcategoria),
      }))
    : [];
};

///// Detalle del producto

export const fetchProductoDetalle = async (
  idproducto?: number | string,
  signal?: AbortSignal,
): Promise<Producto[]> => {
  const url = new URL(`${CONFIG.API_URL}/productos.php`);

  if (idproducto) {
    url.searchParams.append("idproducto", idproducto.toString());
  }

  const response = await fetch(url.toString(), { signal });

  if (!response.ok) {
    throw new Error(
      `Error al obtener el producto: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
};
