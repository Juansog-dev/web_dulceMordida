const imagenes = [
  {
    id: 1,
    titulo: "Torta personalizada",
    imagen:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
  },
  {
    id: 2,
    titulo: "Postres variados",
    imagen:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800",
  },
  {
    id: 3,
    titulo: "Cupcakes",
    imagen:
      "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=800",
  },
  {
    id: 4,
    titulo: "Mesa dulce",
    imagen:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800",
  },
  {
    id: 1,
    titulo: "Torta personalizada",
    imagen:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
  },
  {
    id: 2,
    titulo: "Postres variados",
    imagen:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800",
  },
];

const GaleriaGrid = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 py-10">
      {imagenes.map((item) => (
        <article
          key={item.id}
          className="group relative h-80 overflow-hidden bg-white shadow-lg ring-1 ring-black/5 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          <img
            src={item.imagen}
            alt={item.titulo}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent" />

          <div className="absolute left-0 top-0 m-5  bg-[#faf5f2]/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#a76111]">
            Dulce Mordida
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-bold text-white">{item.titulo}</h3>

            <p className="mt-2 max-w-md text-sm text-white/85">
              Preparaciones artesanales hechas con detalle, sabor y presentación
              premium.
            </p>

            <button className="mt-5  bg-[#a76111] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#7d470c]">
              Ver detalle
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default GaleriaGrid;
