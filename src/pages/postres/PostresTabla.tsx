import { usePostres } from "./usePostres";
import { tableStyles } from "../../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const PostresTabla = () => {
  const {
    postres,
    error,
    cargando,

    insertPostre,
    updatePostre,
    deletePostre,
  } = usePostres();

  const [modalConfig, setModalConfig] = useState<{
    tipo: "insert" | "update" | "delete" | null;
  }>({ tipo: null });
  const [id, setId] = useState(""); // Usando id plano
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

  if (cargando)
    return (
      <div className="p-20 text-center text-slate-500 font-mono text-sm uppercase">
        Cargando...
      </div>
    );
  if (error)
    return (
      <div className="p-20 text-center text-red-500 font-mono text-sm uppercase">
        {error}
      </div>
    );

  return (
    <>
      <button
        className="mb-7 inline-flex items-center rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-red-600 cursor-pointer"
        onClick={() => setModalConfig({ tipo: "insert" })}
      >
        Nuevo Postre
      </button>

      <div className="w-full overflow-x-auto border border-slate-100 rounded-lg shadow-xs">
        <table
          className={tableStyles.table + " min-w-[1000px] table-fixed w-full"}
        >
          <thead className={tableStyles.thead}>
            <tr className={tableStyles.tr}>
              {/* Código Fijo a la izquierda */}
              <th className="sticky left-0 bg-slate-50 z-10 py-4 px-6 text-left text-[11px] uppercase tracking-wider text-slate-400 font-semibold w-24 border-b border-slate-100">
                Código
              </th>
              {/* Postre Fijo al lado del código */}
              <th className="sticky left-24 bg-slate-50 z-10 py-4 px-6 text-left text-[11px] uppercase tracking-wider text-slate-400 font-semibold w-64 border-b border-slate-100 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
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
                  tableStyles.tr +
                  " group hover:bg-slate-50/50 transition-colors"
                }
              >
                {/* TD Código: Congelado a la izquierda */}
                <td className="sticky left-0 bg-white group-hover:bg-slate-50/50 transition-colors py-4 px-6 font-mono text-xs text-slate-400 border-b border-slate-100">
                  #{itemPostre.id}
                </td>

                {/* TD Postre: Congelado al lado del código con una ligera sombra a la derecha */}
                <td className="sticky left-24 bg-white group-hover:bg-slate-50/50 transition-colors py-4 px-6 font-medium text-slate-800 truncate border-b border-slate-100 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                  {itemPostre.nombre}
                </td>

                <td className="py-4 px-6 text-slate-500 font-light max-w-xs truncate border-b border-slate-100">
                  {itemPostre.descripcion}
                </td>

                <td className="py-4 px-6 text-slate-700 font-medium border-b border-slate-100">
                  S/. {Number(itemPostre.precio).toFixed(2)}
                </td>

                <td className="py-4 px-6 text-slate-600 font-light border-b border-slate-100">
                  {itemPostre.stock} u.
                </td>

                {/* Botón Editar */}
                <td className="py-4 px-6 text-center border-b border-slate-100">
                  <button
                    onClick={() => {
                      setId(itemPostre.id.toString());
                      setNombre(itemPostre.nombre);
                      setDescripcion(itemPostre.descripcion);
                      setPrecio(itemPostre.precio.toString());
                      setStock(itemPostre.stock.toString());
                      setModalConfig({ tipo: "update" });
                    }}
                    className="p-1 text-slate-400 hover:text-blue-600 transition-colors"
                  >
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="size-4 cursor-pointer"
                    />
                  </button>
                </td>

                {/* Botón Eliminar */}
                <td className="py-4 px-6 text-center border-b border-slate-100">
                  <button
                    onClick={() => {
                      setId(itemPostre.id.toString());
                      setNombre(itemPostre.nombre);
                      setModalConfig({ tipo: "delete" });
                    }}
                    className="p-1 text-slate-400 hover:text-red-600 transition-colors"
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="size-4 cursor-pointer"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modalConfig.tipo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center p-5 border-b">
              <h3 className="text-xl font-bold text-slate-800">
                {modalConfig.tipo === "insert" && "Nuevo Postre"}
                {modalConfig.tipo === "update" && "Editar Postre"}
                {modalConfig.tipo === "delete" && "Eliminar Postre"}
              </h3>
              <button
                onClick={cerrarmodal}
                className="text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                <FontAwesomeIcon icon={faXmark} className="text-xl" />
              </button>
            </div>

            <div className="p-5">
              {modalConfig.tipo === "delete" ? (
                <form onSubmit={handleDelete} className="space-y-4">
                  <p>
                    ¿Seguro que quieres eliminar el postre{" "}
                    <strong>{nombre}</strong>?
                  </p>
                  <div className="flex justify-end gap-3 pt-4 border-t mt-3">
                    <button
                      type="button"
                      className="rounded-lg bg-red-500 px-4 py-2 text-sm text-white cursor-pointer"
                      onClick={cerrarmodal}
                    >
                      Cerrar
                    </button>
                    <button
                      type="submit"
                      className="rounded-lg bg-blue-500 px-4 py-2 text-sm text-white cursor-pointer"
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
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                    value={nombre}
                    placeholder="Nombre del postre"
                    required
                    onChange={(e) => setNombre(e.target.value)}
                  />
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                    value={descripcion}
                    placeholder="Descripción"
                    required
                    onChange={(e) => setDescripcion(e.target.value)}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="number"
                      step="0.01"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                      value={precio}
                      placeholder="Precio"
                      required
                      onChange={(e) => setPrecio(e.target.value)}
                    />
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                      value={stock}
                      placeholder="Stock"
                      required
                      onChange={(e) => setStock(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-end gap-3 pt-4 border-t mt-3">
                    <button
                      type="button"
                      className="rounded-lg bg-red-500 px-4 py-2 text-sm text-white cursor-pointer"
                      onClick={cerrarmodal}
                    >
                      Cerrar
                    </button>
                    <button
                      type="submit"
                      className="rounded-lg bg-blue-500 px-4 py-2 text-sm text-white cursor-pointer"
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
