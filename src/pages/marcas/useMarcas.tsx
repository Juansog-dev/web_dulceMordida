import { useQuery } from "@tanstack/react-query";
import { fetchMarcas } from "../../services/marcas.services";
import { useSearchParams } from "react-router-dom";

export const useMarcas = () => {
  const [searchParams] = useSearchParams();
  const queryString = searchParams.toString();
  console.log("Parámetros de URL actuales:", searchParams.toString());

  const { data, isLoading, error, isPlaceholderData } = useQuery({
    queryKey: ["marcas", queryString],
    queryFn: ({ signal }) => fetchMarcas(queryString, signal),
    placeholderData: (previousData) => previousData,
  });

  const marcas = data?.datos || [];
  const infoPaginacion = (data as { paginacion?: unknown })?.paginacion;
  return {
    marcas,
    paginacion: infoPaginacion,
    cargando: isLoading,
    error: error ? error.message : null,
    hasMarcas: marcas.length > 0,
    isPlaceholderData,
  };
};
