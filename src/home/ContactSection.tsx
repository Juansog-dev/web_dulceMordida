export default function ContactSection() {
  return (
    <section id="contacto" className="text-[#6f4e4e] py-24 bg-[#e0d8d2]" >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-[#c27b7f]">
            Contacto
          </p>
          <h3 className="mt-3 text-4xl font-bold text-[#7a3e3e] md:text-5xl">
            Haz tu pedido con nosotros
          </h3>
          <p className="mt-6 leading-8 text-[#7b5e57]">
            Escríbenos para cotizaciones, pedidos personalizados o consultas
            sobre nuestros productos y disponibilidad.
          </p>

          <div className="mt-8 space-y-4 text-[#6f4e4e]">
            <p>
              <span className="font-bold">WhatsApp:</span> +51 123 345 678
            </p>
            <p>
              <span className="font-bold">Instagram:</span> @dulcemordida
            </p>
            <p>
              <span className="font-bold">Dirección:</span> Lima, Perú
            </p>
            <p>
              <span className="font-bold">Horario:</span> Lun - Sáb / 9:00 am -
              8:00 pm
            </p>
          </div>
        </div>

        <form className="rounded-4xl bg-white p-8 shadow-xl">
          <div className="grid gap-5">
            <input
              type="text"
              placeholder="Tu nombre"
              className="rounded-2xl border border-[#ead7c8] px-5 py-4 outline-none transition focus:border-[#c27b7f]"
            />
            <input
              type="email"
              placeholder="Tu correo"
              className="rounded-2xl border border-[#ead7c8] px-5 py-4 outline-none transition focus:border-[#c27b7f]"
            />
            <textarea
              rows={5}
              placeholder="Cuéntanos qué deseas pedir"
              className="rounded-2xl border border-[#ead7c8] px-5 py-4 outline-none transition focus:border-[#c27b7f]"
            ></textarea>
            <button
              disabled
              type="submit"
              className="bg-[#F8F1E9] text-[#7A1C2E] px-6 py-2 rounded-full font-semibold border border-[#C9A96E] hover:bg-[#C9A96E] hover:text-white transition"
            >
              Enviar consulta
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
