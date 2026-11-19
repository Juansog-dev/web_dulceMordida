import { useSearchParams } from "react-router-dom";

import MarcasTabla from "./marcasTabla";
import { useState, useEffect } from "react";

const Marcas = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [busquedaLocal, setBusquedaLocal] = useState(
    searchParams.get("texto_buscar") || "",
  );

  // Sincroniza el input si el parámetro en la URL cambia externamente
  useEffect(() => {
    setBusquedaLocal(searchParams.get("texto_buscar") || "");
  }, [searchParams]);

  const manejarBusqueda = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nuevosParams = new URLSearchParams(searchParams);

    if (busquedaLocal.trim() !== "") {
      nuevosParams.set("texto_buscar", busquedaLocal.trim());
    } else {
      nuevosParams.delete("texto_buscar");
    }

    nuevosParams.set("pagina", "1");
    setSearchParams(nuevosParams);
  };

  return (
    <>
      <section className="bg-[#FAF8F5] min-h-screen py-10">
        <div className="max-w-6xl mx-auto px-4 space-y-6">
          {/* 🔍 EL BUSCADOR: Estilizado con la paleta de Dulce Mordida */}
          <div className="bg-[#FDFBF9] p-6 rounded-sm shadow-sm border border-[#EBE6DD]">
            <h5 className="text-xs font-bold text-[#a76111] uppercase tracking-wider mb-3">
              Buscador de Marcas e Insumos
            </h5>
            <form
              onSubmit={manejarBusqueda}
              className="flex flex-col sm:flex-row gap-3 w-full"
            >
              <input
                type="text"
                placeholder="Buscar marcas, país de origen, ingrediente estrella..."
                value={busquedaLocal}
                onChange={(e) => setBusquedaLocal(e.target.value)}
                className="w-full px-4 py-2.5 bg-white border border-[#EBE6DD] rounded-sm text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#a76111] transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-2.5 bg-[#a76111] hover:bg-[#8e520e] text-white rounded-sm transition-colors cursor-pointer text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-sm"
              >
                Buscar
              </button>
            </form>
          </div>

          {/* 📊 LA TABLA: Contenedor refinado con bordes cálidos */}
          <div className="bg-[#FDFBF9] p-6 rounded-sm shadow-sm border border-[#EBE6DD]">
            <MarcasTabla />
          </div>
        </div>
      </section>
    </>
  );
};

export default Marcas;
