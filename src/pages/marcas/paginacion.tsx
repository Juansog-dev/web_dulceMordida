import { useSearchParams } from "react-router-dom";

interface PaginacionProps {
  paginaActual: number;
  totalPaginas: number;
}

const Paginacion = ({ paginaActual, totalPaginas }: PaginacionProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const cambiarPagina = (nuevaPagina: number) => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
      const nuevosParams = new URLSearchParams(searchParams);
      nuevosParams.set("pagina", nuevaPagina.toString());
      setSearchParams(nuevosParams);
    }
  };

  return (
    <div className="flex items-center justify-center gap-6 py-3">
      {/* Botón Anterior */}
      <button
        onClick={() => cambiarPagina(paginaActual - 1)}
        disabled={paginaActual <= 1}
        className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-150 cursor-pointer shadow-sm
          ${
            paginaActual <= 1
              ? "bg-[#FAF8F5] text-gray-400 cursor-not-allowed border border-[#EBE6DD]"
              : "bg-white text-gray-700 hover:bg-[#FAF8F5] border border-[#EBE6DD] active:scale-95"
          }`}
      >
        Anterior
      </button>

      {/* Indicador de Páginas */}
      <span className="text-xs font-medium text-gray-500 tracking-wide select-none">
        Página{" "}
        <strong className="text-[#a76111] font-bold">{paginaActual}</strong> de{" "}
        <strong className="text-gray-800 font-bold">{totalPaginas || 1}</strong>
      </span>

      {/* Botón Siguiente en Ocre Corporativo */}
      <button
        onClick={() => cambiarPagina(paginaActual + 1)}
        disabled={paginaActual >= totalPaginas}
        className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-150 cursor-pointer shadow-sm
          ${
            paginaActual >= totalPaginas
              ? "bg-[#FAF8F5] text-gray-400 cursor-not-allowed border border-[#EBE6DD]"
              : "bg-[#a76111] text-white hover:bg-[#8e520e] active:scale-95"
          }`}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
