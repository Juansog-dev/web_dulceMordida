import { useMarcas } from "./useMarcas";
import { tableStyles } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";
import Paginacion from "./paginacion";

const MarcasTabla = () => {
  const { marcas, paginacion, cargando, error, hasMarcas, isPlaceholderData } =
    useMarcas();
  const [searchParams, setSearchParams] = useSearchParams();

  const manejarOrden = (columna: string) => {
    const nuevosParams = new URLSearchParams(searchParams);
    const ordenActual = nuevosParams.get("columna_orden");
    const tipoActual = nuevosParams.get("tipo_orden");
    let nuevoTipoOrden = "ASC";

    if (ordenActual === columna && tipoActual === "ASC") {
      nuevoTipoOrden = "DESC";
    }

    nuevosParams.set("columna_orden", columna);
    nuevosParams.set("tipo_orden", nuevoTipoOrden);
    nuevosParams.set("pagina", "1");

    setSearchParams(nuevosParams);
  };

  /* ⏳ ESTADO DE CARGA: Adaptado a la paleta ocre/crema */
  if (cargando) {
    return (
      <div className="p-20 text-center space-y-4 bg-[#FDFBF9] border border-[#EBE6DD] rounded-sm">
        <div className="inline-block w-8 h-8 border-4 border-[#a76111] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-[#a76111] font-bold text-xs tracking-widest uppercase">
          Cargando catálogo...
        </p>
      </div>
    );
  }

  /* ⚠️ ESTADO DE ERROR: Adaptado al diseño de la plantilla */
  if (error) {
    return (
      <div className="p-16 text-center space-y-3 bg-[#FDFBF9] border border-red-200 rounded-sm">
        <div className="text-red-500 text-3xl">⚠️</div>
        <p className="text-red-700 text-xs font-semibold uppercase tracking-wider">
          {error}
        </p>
      </div>
    );
  }

  return (
    <div
      className={`transition-opacity duration-200 ${
        isPlaceholderData ? "opacity-40" : "opacity-100"
      }`}
    >
      <div className={tableStyles.wrapper}>
        {!hasMarcas ? (
          <div className="p-12 text-center text-gray-500 text-sm font-medium">
            No se encontraron marcas e insumos disponibles
          </div>
        ) : (
          <>
            <table className={tableStyles.table}>
              <thead className={tableStyles.thead}>
                <tr className={tableStyles.tr}>
                  <th
                    className={`${tableStyles.th} cursor-pointer hover:text-[#8e520e]`}
                    onClick={() => manejarOrden("idmarca")}
                  >
                    Código
                  </th>
                  <th
                    className={`${tableStyles.th} cursor-pointer hover:text-[#8e520e]`}
                    onClick={() => manejarOrden("nombre")}
                  >
                    Nombre
                  </th>
                  <th
                    className={`${tableStyles.th} cursor-pointer hover:text-[#8e520e]`}
                    onClick={() => manejarOrden("pais")}
                  >
                    País
                  </th>
                  <th
                    className={`${tableStyles.th} cursor-pointer hover:text-[#8e520e]`}
                    onClick={() => manejarOrden("sede")}
                  >
                    Sede
                  </th>
                  <th
                    className={`${tableStyles.th} cursor-pointer hover:text-[#8e520e]`}
                    onClick={() => manejarOrden("fundador")}
                  >
                    Fundador
                  </th>
                  <th
                    className={`${tableStyles.th} cursor-pointer hover:text-[#8e520e]`}
                    onClick={() => manejarOrden("ceo")}
                  >
                    Ingrediente Estrella
                  </th>
                </tr>
              </thead>
              <tbody className={tableStyles.tbody}>
                {marcas.map((marca: any) => (
                  <tr key={marca.idmarca} className={tableStyles.tr}>
                    <td
                      className={`${tableStyles.td} font-mono text-xs text-gray-400`}
                    >
                      {marca.idmarca}
                    </td>
                    <td
                      className={`${tableStyles.td} font-medium text-gray-900`}
                    >
                      {marca.nombre}
                    </td>
                    <td className={tableStyles.td}>{marca.pais}</td>
                    <td className={tableStyles.td}>{marca.sede}</td>
                    <td className={tableStyles.td}>{marca.fundador}</td>
                    <td className={tableStyles.td}>
                      <span className="inline-block px-2.5 py-0.5 text-xs font-semibold bg-[#FAF8F5] text-[#a76111] border border-[#EBE6DD] rounded-sm">
                        {marca.ceo}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Paginación integrada en un bloque con fondo suave */}
            {paginacion !== undefined && paginacion !== null && (
              <div className="p-4 bg-[#FAF8F5] border-t border-[#EBE6DD] flex justify-center">
                <Paginacion
                  paginaActual={Number((paginacion as any)?.pagina_actual) || 1}
                  totalPaginas={Number((paginacion as any)?.total_paginas) || 0}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MarcasTabla;
