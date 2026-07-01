import { useQuery } from "@tanstack/react-query";
import { fetchProductos } from "../../services/productos.service";

export const useProductos = (idcategoria?: number | null) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["productos", idcategoria],
    queryFn: ({ signal }) => fetchProductos(signal, idcategoria),
  });

  return {
    productos: Array.isArray(data) ? data : [],
    cargando: isLoading,
    error: error instanceof Error ? error.message : null,
    hasProductos: Array.isArray(data) && data.length > 0,
  };
};
