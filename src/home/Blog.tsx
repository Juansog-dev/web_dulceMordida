const articulos = [
  {
    fecha: "May 06 2026",
    titulo: "Cómo elegir la torta perfecta para tu celebración",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=700",
  },
  {
    fecha: "May 06 2026",
    titulo: "Top 10 postres que no pueden faltar en una mesa dulce",
    img: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=700",
  },
  {
    fecha: "Feb 02 2026",
    titulo: "Tendencias en decoración de tortas para este año",
    img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=700",
  },
  {
    fecha: "Feb 02 2026",
    titulo: "Chocolate vs. vainilla: ¿qué sabor prefieren tus invitados?",
    img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=700",
  },
];

export default function Journal() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.55em] text-[#b46a2a]">
            Inspiración, sabores y consejos
          </p>

          <h2 className="mt-4 text-4xl font-bold text-black md:text-5xl">
            Desde Nuestro Blog
          </h2>
        </div>

        <div className="mt-16 grid gap-x-20 gap-y-10 md:grid-cols-2">
          {articulos.map((item, index) => (
            <article
              key={index}
              className="grid items-center gap-8 sm:grid-cols-[240px_1fr]"
            >
              <img
                src={item.img}
                alt={item.titulo}
                className="h-41.25 w-full object-cover"
              />

              <div>
                <p className="text-sm font-medium text-[#b46a2a]">
                  {item.fecha}
                </p>

                <h3 className="mt-3 text-2xl font-bold leading-snug text-black">
                  {item.titulo}
                </h3>

                <button className=" cursor-pointer   mt-4 text-base font-medium text-black transition hover:text-[#b46a2a]">
                  Leer más
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
