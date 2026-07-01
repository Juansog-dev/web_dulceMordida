import { useQuery } from "@tanstack/react-query";
import { fetchCategorias } from "../../services/categorias.service";

export const useCategorias = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["categorias"],
    queryFn: ({ signal }) => fetchCategorias(signal),
  });

  return {
    categorias: Array.isArray(data) ? data : [],
    cargandoCategorias: isLoading,
    errorCategorias: error instanceof Error ? error.message : null,
  };
};
