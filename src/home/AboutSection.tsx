export default function AboutSection() {
  return (
    <section id="nosotros" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-[#c27b7f]">
            Sobre nosotros
          </p>
          <h3 className="mt-3 text-4xl font-bold text-[#7a3e3e] md:text-5xl">
            Arte pastelero con esencia delicada
          </h3>
          <p className="mt-6 text-lg leading-8 text-[#6f4e4e]">
            En Dulce Mordida fusionamos sabor, estética y pasión artesanal para
            ofrecer postres que enamoran a primera vista y conquistan al primer
            bocado.
          </p>
          <p className="mt-4 leading-8 text-[#7b5e57]">
            Trabajamos con ingredientes seleccionados, diseños personalizados y
            una presentación fina que hace de cada torta, cupcake o postre una
            pieza especial.
          </p>
        </div>

        <div className="overflow-hidden rounded-4xl shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1559622214-f8a9850965bb?auto=format&fit=crop&w=1200&q=80"
            alt="Mesa de postres elegantes"
            className="h-125 w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
