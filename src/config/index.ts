declare global {
  interface ImportMetaEnv {
    readonly VITE_API_BASE_URL: string;
    readonly VITE_ENVIRONMENT: string;
    readonly [key: string]: string | undefined;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

export const CONFIG = {
  API_URL: import.meta.env.VITE_API_BASE_URL,
  ENV: import.meta.env.VITE_ENVIRONMENT,

  ENDPOINTS: {
    TIENDA: "/productos.php",
    CATEGORIAS: "/categorias.php",
    BLOG: "/blog.php",
    LOGIN: "/login.php",
    POSTRES: "/postres.php",
    POSTRES_INSERT: "/postresinsert.php",
    POSTRES_UPDATE: "/postresupdate.php",
    POSTRES_DELETE: "/postresdelete.php",
  },

  VERSION: "1.0.0",
} as const;
