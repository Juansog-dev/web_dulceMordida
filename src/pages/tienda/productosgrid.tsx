import { useState } from "react";
import { Eye, ShoppingCart, Menu, X } from "lucide-react";
import { useCategorias } from "../categorias/use.categorias";
import { useProductos } from "../tienda/use.productos";
import { agregarAlCarrito } from "../../utils/funciones";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const ProductosGrid = () => {
  const [idcategoria, setIdcategoria] = useState<number | null>(null);
  const [menuCategorias, setMenuCategorias] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState<any | null>(
    null,
  );
  const [cantidad, setCantidad] = useState<number>(1);

  const { categorias, cargandoCategorias } = useCategorias();
  const { productos, cargando, error, hasProductos } =
    useProductos(idcategoria);

  const productosFiltrados =
    idcategoria === null
      ? productos
      : productos.filter((p) => p.idcategoria === idcategoria);

  const seleccionarCategoria = (id: number | null) => {
    setIdcategoria(id);
    setMenuCategorias(false);
  };

  const abrirModalProducto = (producto: any) => {
    setProductoSeleccionado(producto);
  };

  const cerrarModalProducto = () => {
    setProductoSeleccionado(null);
  };

  const calcularPrecioFinal = (producto: any) => {
    const tieneDescuento = producto?.descuento && producto.descuento > 0;
    return tieneDescuento
      ? producto.precio - (producto.precio * producto.descuento) / 100
      : producto.precio;
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
      {/* Botón móvil */}
      <button
        onClick={() => setMenuCategorias(!menuCategorias)}
        className="flex items-center justify-between cursor-pointer bg-[#a76111] px-5 py-3 font-bold text-white lg:hidden"
      >
        Categorías
        {menuCategorias ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Categorías */}
      <aside className={`${menuCategorias ? "block" : "hidden"} lg:block`}>
        <h2 className="mb-5 text-2xl font-bold text-[#3b2418]">Categorías</h2>

        <div className="flex flex-col gap-2">
          <button
            onClick={() => seleccionarCategoria(null)}
            className={`px-4 cursor-pointer py-3 text-left font-semibold ${
              idcategoria === null
                ? "bg-[#a76111] text-white"
                : "bg-white text-[#a76111]"
            }`}
          >
            Todos
          </button>

          {!cargandoCategorias &&
            categorias.map((categoria) => (
              <button
                key={categoria.idcategoria}
                onClick={() => seleccionarCategoria(categoria.idcategoria)}
                className={`cursor-pointer px-4 py-3 text-left font-semibold ${
                  idcategoria === categoria.idcategoria
                    ? "bg-[#a76111] text-white"
                    : "bg-white text-[#a76111]"
                }`}
              >
                {categoria.nombre} ({categoria.total})
              </button>
            ))}
        </div>
      </aside>

      {/* Productos */}
      <section>
        {cargando && <p>Cargando productos...</p>}

        {error && <p className="text-red-600">{error}</p>}

        {!cargando && !error && !hasProductos && (
          <p>No hay productos disponibles.</p>
        )}

        {!cargando && !error && hasProductos && (
          <>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#3b2418]">
                {categorias.find((c) => c.idcategoria === idcategoria)
                  ?.nombre || "Todos"}
              </h2>

              <p className="mt-2 text-gray-500">
                Mostrando {productosFiltrados.length} productos
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {productosFiltrados.map((p) => {
                const tieneDescuento = p.descuento && p.descuento > 0;
                const precioFinal = calcularPrecioFinal(p);

                return (
                  <article
                    key={p.id}
                    className="group overflow-hidden bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="relative h-64 overflow-hidden bg-[#faf5f1] p-2">
                      {tieneDescuento && (
                        <span className="absolute left-3 top-3 z-10 bg-red-600 px-3 py-1 text-sm font-bold text-white">
                          -{p.descuento}%
                        </span>
                      )}
                      <Link
                        to={`/productodetalle/${p.id}`}
                        className="block h-full w-full"
                      >
                        <img
                          src={p.imagen}
                          alt={p.nombre}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                        />
                      </Link>

                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center gap-4 bg-black/40 opacity-0 transition duration-300 group-hover:opacity-100">
                        <button
                          onClick={() => abrirModalProducto(p)}
                          className="pointer-events-auto rounded-full bg-white p-3 text-[#3b2418] transition hover:bg-[#a76111] hover:text-white"
                        >
                          <Eye size={22} />
                        </button>

                        <button
                          onClick={() =>
                            agregarAlCarrito(p.id, p.nombre, precioFinal, 1)
                          }
                          className="pointer-events-auto rounded-full bg-white p-3 text-[#3b2418] transition hover:bg-[#a76111] hover:text-white"
                        >
                          <ShoppingCart size={22} />
                        </button>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-xl font-bold text-[#3b2418]">
                        {p.nombre}
                      </h3>

                      <p className="mt-3 text-sm text-[#7a5c4f]">
                        {p.descripcion}
                      </p>

                      <div className="mt-4">
                        <div className="mt-4 flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <FontAwesomeIcon
                              key={index}
                              icon={index < 0 ? faStar : faStarEmpty}
                              className="text-yellow-800 text-lg"
                            />
                          ))}
                        </div>

                        {tieneDescuento ? (
                          <div className="flex items-center gap-3">
                            <span className="text-2xl font-bold text-[#a76111]">
                              S/ {precioFinal.toFixed(2)}
                            </span>

                            <span className="text-sm text-gray-400 line-through">
                              S/ {p.precio.toFixed(2)}
                            </span>
                          </div>
                        ) : (
                          <p className="text-2xl font-bold text-[#a76111]">
                            S/ {p.precio.toFixed(2)}
                          </p>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </>
        )}
      </section>

      {/* Modal de Producto */}
      {productoSeleccionado && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs"
          onClick={cerrarModalProducto}
        >
          <div
            className="relative w-full max-w-5xl rounded-none bg-white p-12 shadow-2xl transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de cerrar  (✕) */}
            <button
              onClick={cerrarModalProducto}
              className="absolute right-6 top-6 text-xl font-light text-gray-400 hover:text-black transition cursor-pointer"
            >
              ✕
            </button>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Contenedor Izquierdo: Imagen Grande y Paginador */}
              <div className="flex flex-col items-center justify-center bg-[#f9f9f9] p-4">
                {/* 1. DATO: Imagen Ampliada */}
                <img
                  src={productoSeleccionado.imagen}
                  alt={productoSeleccionado.nombre}
                  className="max-h-300 w-auto object-contain mix-blend-multiply"
                />
              </div>

              {/* Contenedor Derecho: Información Detallada */}
              <div className="flex flex-col justify-between pt-2">
                <div>
                  {/* 2. DATO: Nombre del Producto */}
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                    {productoSeleccionado.nombre}
                  </h3>

                  {/* 3. DATO: Precio */}
                  <div className="mt-3 text-xl font-bold text-gray-950">
                    {productoSeleccionado.descuento &&
                    productoSeleccionado.descuento > 0 ? (
                      <div className="flex items-baseline gap-3">
                        <span>
                          S/{" "}
                          {calcularPrecioFinal(productoSeleccionado).toFixed(2)}
                        </span>
                        <span className="text-sm font-normal text-gray-400 line-through">
                          S/ {productoSeleccionado.precio.toFixed(2)}
                        </span>
                      </div>
                    ) : (
                      <span>S/ {productoSeleccionado.precio.toFixed(2)}</span>
                    )}
                  </div>

                  {/* 4. DATO: Descripción Corta */}
                  <p className="mt-4 text-sm leading-relaxed text-gray-600">
                    {productoSeleccionado.descripcion}
                  </p>

                  {/* Fila del Selector de Cantidad + Botón Añadir al Carrito */}
                  <div className="mt-6 flex items-stretch gap-3">
                    {/* Selector de cantidad numérico */}
                    <div className="flex items-center border border-gray-300 px-2">
                      <button
                        onClick={() => setCantidad((c) => Math.max(1, c - 1))}
                        className="px-2 text-gray-500 hover:text-black cursor-pointer font-medium"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={cantidad}
                        readOnly
                        className="w-10 text-center text-sm font-medium focus:outline-hidden"
                      />
                      <button
                        onClick={() => setCantidad((c) => c + 1)}
                        className="px-2 text-gray-500 hover:text-black cursor-pointer font-medium"
                      >
                        +
                      </button>
                    </div>

                    {/* Botón Añadir al Carrito Estilo Minimalista */}
                    <button
                      onClick={() =>
                        agregarAlCarrito(
                          productoSeleccionado.id,
                          productoSeleccionado.nombre,
                          calcularPrecioFinal(productoSeleccionado),
                          cantidad,
                        )
                      }
                      className="flex-1 border border-black bg-white py-3 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-black hover:text-white cursor-pointer"
                    >
                      Añadir al carrito
                    </button>
                  </div>

                  {/* Barra de progreso de envío gratis */}
                  <div className="mt-6 border-b border-gray-200 pb-5">
                    <div className="flex items-center gap-2 text-xs text-gray-700">
                      <ShoppingCart size={17} className="text-gray-500" />
                      <span>
                        Compra <strong>S/ 30.00</strong> para envio gratis
                      </span>
                    </div>
                    <div className="mt-2 h-1 w-full bg-gray-100">
                      <div className="h-full w-2/4 bg-gray-900"></div>
                    </div>
                  </div>
                </div>

                {/* Sección de metadatos inferiores en mayúsculas */}
                <div className="mt-5 space-y-1.5 text-[11px] font-medium tracking-wide text-gray-500">
                  {/* 5. DATO: SKU Técnico */}
                  <div>
                    <span className="inline-block w-16 text-gray-400">
                      Codigo:
                    </span>
                    <span className="text-gray-900">
                      PROD-{productoSeleccionado.id}024
                    </span>
                  </div>
                  {/* 6. DATO: Categoría / Tipo */}
                  <div>
                    <span className="inline-block w-16 text-gray-400">
                      Tipo:
                    </span>
                    <span className="text-gray-900 uppercase">
                      {categorias.find(
                        (c) =>
                          c.idcategoria === productoSeleccionado.idcategoria,
                      )?.nombre || "GENERAL"}
                    </span>
                  </div>
                  <div>
                    <span className="inline-block w-16 text-gray-400">
                      VENDOR:
                    </span>
                    <span className="text-gray-900 uppercase">
                      Dulce Mordida
                    </span>
                  </div>

                  {/* Enlace de vista en detalle al final */}
                  <div className="pt-3">
                    <Link
                      to={`/productodetalle/${productoSeleccionado.id}`}
                      className="text-gray-500 underline hover:text-black transition"
                    >
                      Ver Detalles
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductosGrid;
