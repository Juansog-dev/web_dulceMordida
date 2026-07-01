import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

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
  const [inicio, setInicio] = useState(0);

  const productosPorVista = 5;

  useEffect(() => {
    fetch("https://dulcemordida.alwaysdata.net/productos.php")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error(error));
  }, []);

  const siguiente = () => {
    setInicio((prev) =>
      prev + productosPorVista >= productos.length
        ? 0
        : prev + productosPorVista,
    );
  };

  const anterior = () => {
    setInicio((prev) =>
      prev - productosPorVista < 0
        ? Math.max(productos.length - productosPorVista, 0)
        : prev - productosPorVista,
    );
  };

  const productosVisibles = productos.slice(inicio, inicio + productosPorVista);

  return (
    <section id="productos" className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#a65f2b]">
            Dulce Mordida favoritos
          </p>

          <h2 className="mt-4 text-4xl font-bold text-black">
            Nuestros Más Vendidos
          </h2>
        </div>

        <div className="relative mt-16">
          <button
            onClick={anterior}
            className="absolute left-0 top-[38%] z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-white text-black shadow-lg"
          >
            <ChevronLeft size={26} />
          </button>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {productosVisibles.map((p) => (
              <article
                key={p.id}
                className="group overflow-hidden  bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative flex h-71.25 items-center justify-center overflow-hidden bg-[#fff4ed]">
                  <img
                    src={
                      p.imagen ||
                      "https://via.placeholder.com/400x300?text=Dulce+Mordida"
                    }
                    alt={p.nombre}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h3 className="line-clamp-2 min-h-12 text-lg font-bold leading-6 text-[#4a2b22]">
                    {p.nombre}
                  </h3>

                  <div className="mt-3 flex gap-1 text-[#c7833f]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={16}
                        fill="currentColor"
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-xl font-bold text-[#7a3e3e]">
                      S/ {p.precio}
                    </p>

                    <span className=" bg-[#f8e8df] px-3 py-1 text-xs font-medium text-[#7a3e3e]">
                      Stock: {p.stock}
                    </span>
                  </div>

                  <button className="mt-5 w-full  bg-[#7a3e3e] py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#5f2f2f]">
                    Ver producto
                  </button>
                </div>
              </article>
            ))}
          </div>

          <button
            onClick={siguiente}
            className="absolute right-0 top-[38%] z-10 flex h-12 w-12 translate-x-1/2 items-center justify-center rounded-full bg-white text-black shadow-lg"
          >
            <ChevronRight size={26} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Productos;
