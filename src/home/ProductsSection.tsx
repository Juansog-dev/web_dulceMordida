import especial1 from "../assets/imagenes/postresbaner.jpg";
import especial2 from "../assets/imagenes/postresbaner2.jpg";

function Especialidades() {
  return (
    <section className="bg-[#faf5f2] px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
        {/* CARD 1 */}
        <article className="group relative h-105 overflow-hidden ">
          <img
            src={especial1}
            alt="Especialidad Dulce Mordida"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 flex h-full flex-col justify-center px-10 text-white">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.6em] text-orange-500">
              Dulces artesanales
            </p>

            <h2 className="mb-6 text-4xl font-bold">
              Diseñados Para Endulzar Tus Momentos
            </h2>

            <p className="max-w-xl leading-7">
              Disfruta postres preparados con ingredientes frescos, sabores
              únicos y una presentación especial para cada ocasión.
            </p>

            <button className="mt-10 w-fit border border-white px-10 py-4 text-sm font-bold uppercase tracking-wide transition hover:bg-white hover:text-black">
              Ver productos
            </button>
          </div>
        </article>

        {/* CARD 2 */}
        <article className="group relative h-105 overflow-hidden ">
          <img
            src={especial2}
            alt="Postres especiales"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-10 text-center text-white">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.6em] text-orange-500">
              Pedidos personalizados
            </p>

            <h2 className="mb-6 text-4xl font-bold">
              Sabores Únicos Para Celebrar
            </h2>

            <p className="max-w-xl leading-7">
              Tortas, cupcakes y detalles dulces hechos con amor para
              cumpleaños, reuniones y momentos inolvidables.
            </p>

            <button className="mt-10 border border-white px-10 py-4 text-sm font-bold uppercase tracking-wide transition hover:bg-white hover:text-black">
              Hacer pedido
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Especialidades;
