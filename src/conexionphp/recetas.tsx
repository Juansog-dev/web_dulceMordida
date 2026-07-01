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
  const [pagina, setPagina] = useState(0);

  const porPagina = 4;

  useEffect(() => {
    fetch("https://dulcemordida.alwaysdata.net/productos.php")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error(error));
  }, []);

  const totalPaginas = Math.ceil(productos.length / porPagina);

  const productosVisibles = productos.slice(
    pagina * porPagina,
    pagina * porPagina + porPagina,
  );

  const siguiente = () => {
    setPagina((prev) => (prev + 1) % totalPaginas);
  };

  const anterior = () => {
    setPagina((prev) => (prev - 1 + totalPaginas) % totalPaginas);
  };

  return (
    <section id="productos" className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.55em] text-[#b46a2a]">
            Nuevas creaciones
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#2b120b]">
            Nuevos Productos
          </h2>
        </div>

        <div className="relative mt-16">
          <button
            onClick={anterior}
            className="absolute -left-10 top-1/2 z-20 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-lg"
          >
            <ChevronLeft size={32} />
          </button>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105 "
                  />
                </div>

                <div className="px-8 pb-8">
                  <h3 className="min-h-16 text-2xl font-semibold leading-8 text-[#2b120b]">
                    {p.nombre}
                  </h3>

                  <div className="mt-5 flex gap-2 text-[#a85f24]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={22}
                        fill="none"
                        strokeWidth={1.8}
                      />
                    ))}
                  </div>

                  <p className="mt-4 text-2xl font-semibold text-black">
                    S/ {p.precio}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <button
            onClick={siguiente}
            className="absolute -right-10 top-1/2 z-20 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-lg"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        <div className="mt-12 flex justify-center gap-4">
          {Array.from({ length: totalPaginas }).map((_, index) => (
            <button
              key={index}
              onClick={() => setPagina(index)}
              className={`h-3 w-3 rounded-full ${
                pagina === index ? "bg-[#b46a2a]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Productos;
