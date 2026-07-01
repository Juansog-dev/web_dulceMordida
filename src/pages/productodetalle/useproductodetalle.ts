import { useQuery } from "@tanstack/react-query";
import { fetchProductoDetalle } from "../../services/productos.service";

export const useProductosDetalle = (idproducto?: number | string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["producto", idproducto],
    queryFn: ({ signal }) => fetchProductoDetalle(idproducto, signal),
  });

  return {
    producto: Array.isArray(data) ? data[0] : [],
    cargando: isLoading,
    error: error ? error.message : null,
    hasProductos: Array.isArray(data) && data.length > 0,
  };
};
