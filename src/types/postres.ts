import type { Key } from "react";

// 5. Interfaz de datos de Postre (Cumple las 5 columnas requeridas)
export interface Postre {
  id: Key | null | undefined;
  idpostre: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
}
