import { useEffect, useState } from "react";

type Producto = {
  id: number;
  nombre: string;
  descripcion: string;
  precio: string;
  stock: number;
  imagen: string | null;
};

const Productos = () => {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    fetch("https://dulcemordida.alwaysdata.net/productos.php")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section id="productos" className="bg-[#e4d8d9] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#c27b7f]">
            Nuestros productos
          </p>
          <h2 className="mt-3 text-4xl font-bold text-[#7a3e3e] md:text-5xl">
            Delicias hechas con arte y dulzura
          </h2>
          <p className="mt-5 leading-8 text-[#7b5e57]">
            Descubre nuestras creaciones especiales, preparadas con detalles
            finos para endulzar cada momento.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {productos.map((p) => (
            <article
              key={p.id}
              className="overflow-hidden rounded-[2rem] bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={
                  p.imagen ||
                  "https://via.placeholder.com/400x300?text=Dulce+Mordida"
                }
                alt={p.nombre}
                className="h-72 w-full object-cover"
              />

              <div className="p-7">
                <h3 className="text-2xl font-bold text-[#7a3e3e]">
                  {p.nombre}
                </h3>

                <p className="mt-3 leading-7 text-[#7b5e57]">{p.descripcion}</p>

                <div className="mt-5 flex items-center justify-between">
                  <p className="text-xl font-bold text-[#5f2f2f]">
                    S/ {p.precio}
                  </p>
                  <p className="text-sm text-gray-500">Stock: {p.stock}</p>
                </div>

                <a
                  href={`https://wa.me/51999999999?text=Hola,%20quiero%20pedir:%20${encodeURIComponent(p.nombre)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block rounded-full bg-[#7a3e3e] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#5f2f2f]"
                >
                  Pedir por WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Productos;
