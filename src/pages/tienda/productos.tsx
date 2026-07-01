import ProductosGrid from "./productosgrid";
import banerTienda from "../../assets/imagenes/postresbaner.jpg";
const Productos = () => {
  return (
    <>
      <section className="relative h-90 overflow-hidden">
        <img
          src={banerTienda}
          alt="Dulce Mordida"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <p className="mb-3 text-sm uppercase tracking-[0.35em]">
            Dulce Mordida
          </p>

          <h1 className="text-5xl font-bold">Productos</h1>

          <p className="mt-4 max-w-xl text-white/85">
            Explora tortas, cheesecakes, cupcakes y más creaciones artesanales
            elaboradas para cada ocasión especial.
          </p>
        </div>
      </section>
      <section className="bg-[#faf5f2]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <ProductosGrid />
        </div>
      </section>
    </>
  );
};

export default Productos;
