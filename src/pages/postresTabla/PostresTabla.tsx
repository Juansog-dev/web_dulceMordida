import { usePostres } from "./usePostres";
import { tableStyles } from "../../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faXmark,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const PostresTabla = () => {
  const { postres, error, cargando, insertPostre, updatePostre, deletePostre } =
    usePostres();

  const [modalConfig, setModalConfig] = useState<{
    tipo: "insert" | "update" | "delete" | null;
  }>({ tipo: null });

  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");

  const cerrarmodal = () => {
    setModalConfig({ tipo: null });
    setId("");
    setNombre("");
    setDescripcion("");
    setPrecio("");
    setStock("");
  };

  const handleInsert = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await insertPostre({ nombre, descripcion, precio, stock });
      cerrarmodal();
    } catch (err) {
      console.log("Error al insertar", err);
    }
  };

  const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await updatePostre({ id, nombre, descripcion, precio, stock });
      cerrarmodal();
    } catch (err) {
      console.log("Error al actualizar", err);
    }
  };

  const handleDelete = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await deletePostre({ id });
      cerrarmodal();
    } catch (err) {
      console.log("Error al eliminar", err);
    }
  };

  /* ⏳ ESTADO DE CARGA */
  if (cargando) {
    return (
      <div className="p-20 text-center space-y-4 bg-[#FDFBF9] border border-[#EBE6DD] rounded-sm">
        <div className="inline-block w-8 h-8 border-4 border-[#a76111] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-[#a76111] font-bold text-xs tracking-widest uppercase">
          Cargando postres...
        </p>
      </div>
    );
  }

  /* ⚠️ ESTADO DE ERROR */
  if (error) {
    return (
      <div className="p-16 text-center space-y-3 bg-[#FDFBF9] border border-red-200 rounded-sm">
        <div className="text-red-500 text-2xl">⚠️</div>
        <p className="text-red-700 text-xs font-semibold uppercase tracking-wider">
          {error}
        </p>
      </div>
    );
  }

  return (
    <>
      {/* BOTÓN NUEVO POSTRE */}
      <button
        className="mb-6 inline-flex items-center gap-2 rounded-sm bg-[#a76111] hover:bg-[#8e520e] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-colors cursor-pointer"
        onClick={() => setModalConfig({ tipo: "insert" })}
      >
        <FontAwesomeIcon icon={faPlus} className="text-xs" />
        Nuevo Postre
      </button>

      {/* CONTENEDOR DE LA TABLA */}
      <div className="w-full overflow-x-auto border border-[#EBE6DD] bg-white rounded-sm shadow-xs">
        <table className={tableStyles.table + " min-w-175 table-fixed w-full"}>
          <thead className={tableStyles.thead}>
            <tr className={tableStyles.tr}>
              {/* Código Fijo a la izquierda */}
              <th className="sticky left-0 bg-[#faf5f2] z-10 py-4 px-6 text-left text-[11px] uppercase tracking-wider text-[#a76111] font-bold w-24 border-b border-[#EBE6DD]">
                Código
              </th>
              {/* Postre Fijo al lado del código */}
              <th className="sticky left-24 bg-[#faf5f2] z-10 py-4 px-6 text-left text-[11px] uppercase tracking-wider text-[#a76111] font-bold w-64 border-b border-[#EBE6DD] shadow-[2px_0_5px_-2px_rgba(0,0,0,0.06)]">
                Postre
              </th>
              <th className={tableStyles.th}>Descripción</th>
              <th className={tableStyles.th + " w-28"}>Precio</th>
              <th className={tableStyles.th + " w-24"}>Stock</th>
              <th className={tableStyles.th + " w-20 text-center"}>Editar</th>
              <th className={tableStyles.th + " w-20 text-center"}>Eliminar</th>
            </tr>
          </thead>
          <tbody className={tableStyles.tbody}>
            {postres.map((itemPostre) => (
              <tr
                key={itemPostre.id}
                className={
                  tableStyles.tr + " group hover:bg-[#FAF8F5] transition-colors"
                }
              >
                {/* TD Código: Congelado */}
                <td className="sticky left-0 bg-white group-hover:bg-[#FAF8F5] transition-colors py-4 px-6 font-mono text-xs text-gray-400 border-b border-gray-100">
                  #{itemPostre.id}
                </td>

                {/* TD Postre: Congelado */}
                <td className="sticky left-24 bg-white group-hover:bg-[#FAF8F5] transition-colors py-4 px-6 font-semibold text-gray-900 truncate border-b border-gray-100 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.06)]">
                  {itemPostre.nombre}
                </td>

                <td className="py-4 px-6 text-gray-600 font-normal max-w-xs truncate border-b border-gray-100 text-sm">
                  {itemPostre.descripcion}
                </td>

                <td className="py-4 px-6 text-gray-900 font-semibold border-b border-gray-100 text-sm">
                  S/ {Number(itemPostre.precio).toFixed(2)}
                </td>

                <td className="py-4 px-6 border-b border-gray-100">
                  <span className="inline-block px-2.5 py-0.5 text-xs font-semibold bg-[#FAF8F5] text-[#a76111] border border-[#EBE6DD] rounded-sm">
                    {itemPostre.stock} u.
                  </span>
                </td>

                {/* Botón Editar */}
                <td className="py-4 px-6 text-center border-b border-gray-100">
                  <button
                    onClick={() => {
                      setId(itemPostre.id != null ? String(itemPostre.id) : "");
                      setNombre(itemPostre.nombre);
                      setDescripcion(itemPostre.descripcion);
                      setPrecio(itemPostre.precio.toString());
                      setStock(itemPostre.stock.toString());
                      setModalConfig({ tipo: "update" });
                    }}
                    className="p-1.5 text-gray-400 hover:text-[#a76111] transition-colors cursor-pointer"
                    title="Editar postre"
                  >
                    <FontAwesomeIcon icon={faEdit} className="size-4" />
                  </button>
                </td>

                {/* Botón Eliminar */}
                <td className="py-4 px-6 text-center border-b border-gray-100">
                  <button
                    onClick={() => {
                      setId(itemPostre.id != null ? String(itemPostre.id) : "");
                      setNombre(itemPostre.nombre);
                      setModalConfig({ tipo: "delete" });
                    }}
                    className="p-1.5 text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
                    title="Eliminar postre"
                  >
                    <FontAwesomeIcon icon={faTrash} className="size-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL (INSERT / UPDATE / DELETE) */}
      {modalConfig.tipo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-[#FDFBF9] border border-[#EBE6DD] rounded-sm shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-150">
            {/* Header del Modal */}
            <div className="flex justify-between items-center p-5 bg-[#faf5f2] border-b border-[#EBE6DD]">
              <h3 className="text-base font-bold text-[#a76111] tracking-wide uppercase">
                {modalConfig.tipo === "insert" && "Nuevo Postre"}
                {modalConfig.tipo === "update" && "Editar Postre"}
                {modalConfig.tipo === "delete" && "Eliminar Postre"}
              </h3>
              <button
                onClick={cerrarmodal}
                className="text-gray-400 hover:text-[#a76111] transition-colors cursor-pointer"
              >
                <FontAwesomeIcon icon={faXmark} className="text-lg" />
              </button>
            </div>

            {/* Body del Modal */}
            <div className="p-6">
              {modalConfig.tipo === "delete" ? (
                <form onSubmit={handleDelete} className="space-y-4">
                  <p className="text-sm text-gray-700">
                    ¿Estás seguro de que deseas eliminar el postre{" "}
                    <strong className="text-gray-900">{nombre}</strong>? Esta
                    acción no se puede deshacer.
                  </p>
                  <div className="flex justify-end gap-3 pt-4 border-t border-[#EBE6DD] mt-4">
                    <button
                      type="button"
                      className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-sm cursor-pointer transition-colors"
                      onClick={cerrarmodal}
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-red-600 hover:bg-red-700 text-white rounded-sm cursor-pointer transition-colors shadow-xs"
                    >
                      Eliminar
                    </button>
                  </div>
                </form>
              ) : (
                <form
                  onSubmit={
                    modalConfig.tipo === "insert" ? handleInsert : handleUpdate
                  }
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-white border border-[#EBE6DD] rounded-sm text-sm text-gray-800 focus:outline-none focus:border-[#a76111] transition-colors"
                      value={nombre}
                      placeholder="Ej. Croissant de Almendras"
                      required
                      onChange={(e) => setNombre(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">
                      Descripción
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-white border border-[#EBE6DD] rounded-sm text-sm text-gray-800 focus:outline-none focus:border-[#a76111] transition-colors"
                      value={descripcion}
                      placeholder="Descripción breve..."
                      required
                      onChange={(e) => setDescripcion(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">
                        Precio (S/)
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        className="w-full px-3 py-2 bg-white border border-[#EBE6DD] rounded-sm text-sm text-gray-800 focus:outline-none focus:border-[#a76111] transition-colors"
                        value={precio}
                        placeholder="0.00"
                        required
                        onChange={(e) => setPrecio(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">
                        Stock
                      </label>
                      <input
                        type="number"
                        className="w-full px-3 py-2 bg-white border border-[#EBE6DD] rounded-sm text-sm text-gray-800 focus:outline-none focus:border-[#a76111] transition-colors"
                        value={stock}
                        placeholder="0"
                        required
                        onChange={(e) => setStock(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 pt-4 border-t border-[#EBE6DD] mt-4">
                    <button
                      type="button"
                      className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-sm cursor-pointer transition-colors"
                      onClick={cerrarmodal}
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-[#a76111] hover:bg-[#8e520e] text-white rounded-sm cursor-pointer transition-colors shadow-xs"
                    >
                      Guardar
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostresTabla;
