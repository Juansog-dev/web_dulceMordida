import { useProductos } from "../use.productos";
import ProductosGrid from "../productosgrid";
const Tienda = () => {
  const { productos, cargando } = useProductos();

  return (
    <section className="bg-[#faf5f2] py-5">
      <section className="relative h-90 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg"
          alt="Dulce Mordida"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <p className="mb-3 text-sm uppercase tracking-[0.35em]">
            Dulce Mordida
          </p>

          <h1 className="text-5xl font-bold">Tienda</h1>

          <p className="mt-4 max-w-xl text-white/85">
            Explora nuestras categorías de postres artesanales.
          </p>
        </div>
      </section>

      <section className="bg-[#faf5f2] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#a76111]">
                Categorías
              </span>

              <h2 className="mt-3 text-4xl font-bold text-[#3b2418]">
                Compra por categoría
              </h2>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6">
          {cargando ? (
            <p>Cargando productos...</p>
          ) : (
            <div className="flex gap-8 overflow-x-auto pb-8">
              {productos.slice(0, 8).map((p) => (
                <article
                  key={p.id}
                  className="group relative h-72 min-w-65 overflow-hidden  bg-white shadow-lg"
                >
                  <img
                    src={p.imagen}
                    alt={p.nombre}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/35" />

                  <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                    <h3 className="text-2xl font-bold text-white">
                      {p.nombre}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
        <div className="p-30">
          <ProductosGrid />
        </div>
      </section>
    </section>
  );
};

export default Tienda;
