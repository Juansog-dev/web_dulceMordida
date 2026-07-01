import { Star } from "lucide-react";

const testimonios = [
  {
    nombre: "María López",
    rol: "Cliente frecuente",
    titulo: "Realmente delicioso",
    texto:
      "La torta llegó fresca, bien decorada y con un sabor increíble. Se nota el cuidado en cada detalle.",
    foto: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    nombre: "Carlos Mendoza",
    rol: "Cumpleañero",
    titulo: "Excelente atención",
    texto:
      "Me ayudaron a elegir el postre perfecto para mi reunión. Todo llegó a tiempo y muy bien presentado.",
    foto: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    nombre: "Andrea Torres",
    rol: "Amante de los postres",
    titulo: "Sabores que enamoran",
    texto:
      "Probé el cheesecake y las galletas. Todo estaba suave, fresco y con una presentación hermosa.",
    foto: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function Testimonios() {
  return (
    <section className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.55em] text-[#b46a2a]">
            Historias reales de nuestros clientes
          </p>

          <h2 className="mt-4 text-4xl font-bold text-black md:text-5xl">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="relative mt-16">
          <div className="grid gap-8 md:grid-cols-3">
            {testimonios.map((item, index) => (
              <article
                key={index}
                className="border border-dashed border-gray-300 p-10"
              >
                <div className="flex gap-1 text-[#f59b2e]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      fill="currentColor"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                <h3 className="mt-7 text-3xl font-bold leading-snug text-black">
                  {item.titulo}
                </h3>

                <p className="mt-6 leading-7 text-gray-700">{item.texto}</p>

                <div className="mt-8 flex items-center gap-4">
                  <img
                    src={item.foto}
                    alt={item.nombre}
                    className="h-20 w-20 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="text-xl font-bold text-black">
                      {item.nombre}
                    </h4>
                    <p className="mt-1 text-gray-500">{item.rol}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
