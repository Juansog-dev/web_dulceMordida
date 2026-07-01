import { useQuery } from "@tanstack/react-query";

import { fetchBlog } from "../../services/blog.service";

export const useBlog = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blog"],

    queryFn: ({ signal }) => fetchBlog(signal),
  });

  return {
    posts: Array.isArray(data) ? data : [],

    cargando: isLoading,

    error: error instanceof Error ? error.message : null,

    hasPosts: Array.isArray(data) && data.length > 0,
  };
};
