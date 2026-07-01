import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AuthProvider } from "./context/authContext.tsx";
import App from "./App.tsx";
import ProtecterRoute from "./components/ProtecterRouter.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    hydrateFallbackElement: <div>Iniciando sistema...</div>,

    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import("./pages/menu/DulceMordida.tsx")).default,
        }),
      },

      {
        path: "tienda",
        lazy: async () => ({
          Component: (await import("./pages/tienda/tiendanav/Tienda.tsx"))
            .default,
        }),
      },
      {
        path: "login",
        lazy: async () => ({
          Component: (await import("./pages/login/login.tsx")).default,
        }),
      },
      {
        path: "productos",
        lazy: async () => ({
          Component: (await import("./pages/tienda/productos.tsx")).default,
        }),
      },

      {
        path: "blog",
        lazy: async () => ({
          Component: (await import("./pages/blog/Blog.tsx")).default,
        }),
      },
      {
        element: <ProtecterRoute />,
        children: [
          {
            path: "galeria",
            lazy: async () => ({
              Component: (await import("./pages/galeria/GaleriaGrid.tsx"))
                .default,
            }),
          },
          {
            path: "MeGustas",
            lazy: async () => ({
              Component: (await import("./pages/menu/MeGustas.tsx")).default,
            }),
          },
          {
            path: "TablaProductos",
            lazy: async () => ({
              Component: (await import("./pages/postres")).default,
            }),
          },
        ],
      },
      {
        path: "carrito",
        lazy: async () => ({
          Component: (await import("./pages/carrito/carrito.tsx")).default,
        }),
      },

      {
        path: "buscar",
        lazy: async () => ({
          Component: (await import("./pages/menu/buscar.tsx")).default,
        }),
      },
      {
        path: "*",
        lazy: async () => ({
          Component: (await import("./pages/pagina404.tsx")).default,
        }),
      },

      {
        path: "productodetalle/:idproducto",
        lazy: async () => ({
          Component: (await import("./pages/productodetalle/index.tsx"))
            .default,
        }),
      },
      {
        path: "perfil",
        lazy: async () => ({
          Component: (await import("./pages/perfil")).default,
        }),
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
);
