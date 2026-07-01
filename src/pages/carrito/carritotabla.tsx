import { useCarrito } from "./usecarrito";
// Local fallback for tableStyles (utils may not export it)
import { tableStyles } from "../../utils/constants";

function Carritotabla() {
  const {
    ListaItems,
    hasListaItems,
    vaciarCarrito,
    eliminarItem,
    total,
    disminuirCantidad,
    incrementarCantidad,
  } = useCarrito();

  return (
    <>
      {!hasListaItems ? (
        <div className="rounded-xl bg-white p-8 text-center text-slate-500 shadow">
          No hay productos en el carrito
        </div>
      ) : (
        <>
          <div className={tableStyles.wrapper}>
            <table className={tableStyles.table}>
              <thead className={tableStyles.thead}>
                <tr className={tableStyles.tr}>
                  <th className={tableStyles.th}>Código</th>
                  <th className={tableStyles.th}>Producto</th>
                  <th className={tableStyles.th}>Precio</th>
                  <th className={tableStyles.th}>Cantidad</th>
                  <th className={tableStyles.th}>Subtotal</th>
                  <th className={tableStyles.th}>Acción</th>
                </tr>
              </thead>

              <tbody className={tableStyles.tbody}>
                {ListaItems.map((itemCarrito) => (
                  <tr key={itemCarrito.idproducto} className={tableStyles.tr}>
                    <td className={tableStyles.td}>{itemCarrito.idproducto}</td>
                    <td className={tableStyles.td}>{itemCarrito.nombre}</td>

                    <td className={`${tableStyles.td} `}>
                      S/ {itemCarrito.precio.toFixed(2)}
                    </td>

                    <td className={tableStyles.td}>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            disminuirCantidad(itemCarrito.idproducto)
                          }
                          className="rounded bg-slate-200 px-3 py-1 font-bold hover:bg-slate-300"
                        >
                          -
                        </button>

                        <span>{itemCarrito.cantidad}</span>

                        <button
                          onClick={() =>
                            incrementarCantidad(itemCarrito.idproducto)
                          }
                          className="rounded bg-slate-200 px-3 py-1 font-bold hover:bg-slate-300"
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td className={`${tableStyles.td}`}>
                      S/{" "}
                      {(itemCarrito.precio * itemCarrito.cantidad).toFixed(2)}
                    </td>

                    <td className={tableStyles.td}>
                      <button
                        onClick={() => eliminarItem(itemCarrito.idproducto)}
                        className="cursor-pointer text-red-500 hover:text-red-800"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={vaciarCarrito}
              className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-600 active:scale-95"
            >
              Vaciar carrito
            </button>

            <div className="text-right">
              <p className="text-sm text-slate-500">Total</p>
              <span className="text-2xl font-bold text-[#a76111]">
                S/ {total.toFixed(2)}
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Carritotabla;
