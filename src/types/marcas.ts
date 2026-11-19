export interface Marca {
  idmarca: number;
  nombre: string;
  pais: string;
  sede: string;
  fundador: string;
  ceo: string; // Representa el Ingrediente Estrella en el frontend
}

export interface MarcasResponse {
  datos: Marca[];
  paginacion: {
    pagina_actual: number;
    total_paginas: number;
    total_registros: number;
    limite: number;
  };
}
