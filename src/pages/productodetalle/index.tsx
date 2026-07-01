import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { useProductosDetalle } from "./useproductodetalle";
import { agregarAlCarrito } from "../../utils/funciones";

const ProductoDetalle = () => {
  const { idproducto } = useParams<{ idproducto: string }>();
  const { producto, cargando, error } = useProductosDetalle(idproducto);

  const [zoom, setZoom] = useState(false);

  const [cantidad, setCantidad] = useState(1);

  const moverZoom = (event: React.MouseEvent<HTMLImageElement>) => {
    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect();

    const x = ((event.clientX - left) / width) * 100;
    const y = ((event.clientY - top) / height) * 100;

    event.currentTarget.style.transformOrigin = `${x}% ${y}%`;
  };

  if (cargando) {
    return (
      <div className="p-20 text-center">
        <p className="text-slate-500 font-semibold">Cargando producto...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-20 text-center">
        <p className="text-red-500 font-semibold">{error}</p>
      </div>
    );
  }

  if (!producto || Array.isArray(producto)) {
    return (
      <div className="p-20 text-center">
        <p className="text-slate-500 font-semibold">
          No se encontró el producto
        </p>
      </div>
    );
  }

  const precio = Number(producto.precio ?? 0);
  const descuento = Number(producto.descuento ?? 0);

  const tieneDescuento = descuento > 0;

  const precioFinal = tieneDescuento
    ? precio - (precio * descuento) / 100
    : precio;

  const imagenProducto = producto.imagen
    ? producto.imagen
    : "/imagenes/nofoto.jpg";

  return (
    <section className="min-h-screen bg-[#faf5f1] px-4 py-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        {/* Imagen grande */}
        <div className="relative flex items-center justify-center bg-[#fff8f3] p-8">
          {tieneDescuento && (
            <span className="absolute left-6 top-6 rounded-full bg-red-600 px-4 py-2 text-sm font-bold text-white">
              -{descuento}%
            </span>
          )}

          <div className="relative flex items-center justify-center overflow-hidden bg-[#fff8f3] p-8">
            <img
              src={imagenProducto}
              alt={producto.nombre}
              onMouseMove={moverZoom}
              onMouseEnter={() => setZoom(true)}
              onMouseLeave={() => setZoom(false)}
              className={`h-162.5 w-full object-contain transition-transform duration-300 ${
                zoom ? "scale-150 cursor-zoom-in" : "scale-100"
              }`}
            />
          </div>
        </div>

        {/* Información */}
        <div className="py-4">
          <h1 className="text-4xl font-bold text-black">{producto.nombre}</h1>

          <div className="mt-4 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={index < 0 ? faStar : faStarEmpty}
                className="text-yellow-800 text-lg"
              />
            ))}

            <span className="ml-2 text-sm text-gray-500">(12 reseñas)</span>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <span className="text-3xl font-semibold text-black">
              S/ {precioFinal.toFixed(2)}
            </span>

            {tieneDescuento && (
              <span className="text-lg text-gray-400 line-through">
                S/ {precio.toFixed(2)}
              </span>
            )}
          </div>

          <hr className="my-8 border-gray-300" />

          {/* Cantidad y botones */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex w-36 items-center justify-between border border-gray-300 bg-white px-4 py-3">
              <button
                onClick={() => setCantidad((c) => Math.max(1, c - 1))}
                className="text-xl font-bold cursor-pointer"
              >
                -
              </button>

              <span>{cantidad}</span>

              <button
                onClick={() => setCantidad((c) => c + 1)}
                className="text-xl font-bold cursor-pointer"
              >
                +
              </button>
            </div>

            <button
              onClick={() =>
                agregarAlCarrito(
                  producto.id,
                  producto.nombre,
                  precioFinal,
                  cantidad,
                )
              }
              className="border border-black px-10 py-3 text-sm font-bold uppercase transition hover:bg-[#a76111]  hover:text-white cursor-pointer"
            >
              Agregar al carrito
            </button>

            <button className="bg-black px-10 py-3 text-sm font-bold uppercase text-white transition hover:bg-[#a76111] cursor-pointer ">
              Comprar ahora
            </button>
          </div>

          <div className="mt-6 flex gap-8 text-sm text-gray-700">
            <span>♡ Agregar a favoritos</span>
            <span>⇄ Comparar</span>
          </div>

          <hr className="my-8 border-gray-300" />

          {/* Datos del producto */}
          <div className="space-y-4 text-sm">
            <p>
              <span className="inline-block w-36 text-gray-500">Código:</span>
              {producto.id}
            </p>
            <p>
              <span className="inline-block w-36 text-gray-500">Nombre:</span>
              {producto.nombre}
            </p>
            <p>
              <span className="inline-block w-36 text-gray-500">
                Descripción:
              </span>
              {producto.descripcion}
            </p>
            <p>
              <span className="inline-block w-36 text-gray-500">Precio:</span>S/{" "}
              {precio.toFixed(2)}
            </p>
            <p>
              <span className="inline-block w-36 text-gray-500">
                Descuento:
              </span>
              {descuento}%
            </p>
            <p>
              <span className="inline-block w-36 text-gray-500">
                Precio final:
              </span>
              S/ {precioFinal.toFixed(2)}
            </p>
            <p>
              <span className="inline-block w-36 text-gray-500">Stock:</span>
              {producto.stock}
            </p>
            <p>
              <span className="inline-block w-36 text-gray-500">
                Categoría:
              </span>
              {producto.idcategoria ?? producto.idcategoria}
            </p>
            <p>
              <span className="inline-block w-36 text-gray-500">Fecha:</span>
              {producto.fecha_creacion}
            </p>
          </div>
          <hr className="my-8 border-gray-300" />

          {/* Acordeones visuales */}
          <div className="divide-y divide-gray-300">
            <div className="flex justify-between py-5 text-lg font-medium">
              <span>Información de entrega</span>
              <span>+</span>
            </div>

            <div className="flex justify-between py-5 text-lg font-medium">
              <span> Guía de conservación</span>
              <span>+</span>
            </div>
          </div>

          <div className="mt-8 space-y-4 text-gray-700">
            <p> Producto fresco de Dulce Mordida</p>
            <p> Pago seguro</p>
            <p> Ideal para compartir o regalar</p>
          </div>

          <p className="mt-8 text-sm text-[#a76111]">
            3 vendidos en las últimas 18 horas
          </p>

          <div className="mt-8">
            <h2 className="mb-3 text-xl font-bold">Descripción</h2>
            <p className="leading-7 text-gray-600">{producto.descripcion}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductoDetalle;
