interface Testimonio {
  nombre: string;
  texto: string;
}

interface TestimonialsSectionProps {
  testimonios: Testimonio[];
}

export default function TestimonialsSection({
  testimonios,
}: TestimonialsSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-[#c27b7f]">
          Testimonios
        </p>
        <h3 className="mt-3 text-4xl font-bold text-[#7a3e3e] md:text-5xl">
          Lo que dicen nuestros clientes
        </h3>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {testimonios.map((testimonio) => (
          <article
            key={testimonio.nombre}
            className="rounded-4xl border border-[#f1dfd1] bg-white p-8 shadow-md"
          >
            <p className="text-lg leading-8 text-[#6f4e4e]">
              "{testimonio.texto}"
            </p>
            <h4 className="mt-6 text-lg font-bold text-[#7a3e3e]">
              {testimonio.nombre}
            </h4>
          </article>
        ))}
      </div>
    </section>
  );
}
