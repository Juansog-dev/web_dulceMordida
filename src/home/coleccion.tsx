import img1 from "../assets/imagenes/postresbaner.jpg";

function Coleccion({}: { galeria: string[] }) {
  return (
    <section className="w-full">
      <div className="relative h-162.5 w-full overflow-hidden">
        {}
        <img
          src={img1}
          alt="Colección Dulce Mordida"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Capa oscura */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Contenido */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.6em]">
            Colección Dulce 2026
          </p>

          <h2 className="max-w-4xl text-4xl font-bold md:text-6xl">
            Sabores Artesanales Para Momentos Especiales
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 md:text-lg">
            Disfruta postres únicos, preparados con amor, detalle y una
            presentación que enamora desde el primer vistazo.
          </p>

          <button className="mt-10 border border-white px-10 py-4 text-sm font-bold uppercase tracking-wide transition hover:bg-white hover:text-black">
            Descúbrelo ahora
          </button>
        </div>
      </div>
    </section>
  );
}

export default Coleccion;
