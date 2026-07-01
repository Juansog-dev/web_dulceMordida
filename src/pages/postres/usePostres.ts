import {
  fetchPostres,
  insertPostresService,
  updatePostresService,
  deletePostresService,
} from "../../services/postres.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const usePostres = () => {
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery({
    queryKey: ["postres"],
    queryFn: ({ signal }) => fetchPostres(signal),
  });

  const insertMutation = useMutation({
    mutationFn: ({
      nombre,
      descripcion,
      precio,
      stock,
    }: {
      nombre: string;
      descripcion: string;
      precio: string;
      stock: string;
    }) => insertPostresService(nombre, descripcion, precio, stock),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["postres"] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({
      id,
      nombre,
      descripcion,
      precio,
      stock,
    }: {
      id: string;
      nombre: string;
      descripcion: string;
      precio: string;
      stock: string;
    }) => updatePostresService(id, nombre, descripcion, precio, stock),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["postres"] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: ({ id }: { id: string }) => deletePostresService(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["postres"] });
    },
  });

  return {
    postres: Array.isArray(data) ? data : [],
    error: error ? error.message : null,
    cargando: isLoading,
    hasPostres: Array.isArray(data) && data.length > 0,
    insertPostre: insertMutation.mutateAsync,
    updatePostre: updateMutation.mutateAsync,
    deletePostre: deleteMutation.mutateAsync,
  };
};
