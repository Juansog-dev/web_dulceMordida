import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="bg-[#faf5f2] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-2xl bg-black">
          <div className="grid min-h-105 lg:grid-cols-2">
            <div className="flex items-center justify-center bg-white/75 p-10 text-center backdrop-blur-sm">
              <div className="max-w-md">
                <p className="text-xs font-semibold uppercase tracking-[0.55em] text-[#b46a2a]">
                  Recibe novedades y ofertas dulces
                </p>

                <h2 className="mt-6 text-4xl font-bold leading-tight text-black md:text-5xl">
                  Mantente inspirado, mantente dulce
                </h2>

                <div className="mt-10 flex overflow-hidden rounded-xl border border-black bg-white">
                  <input
                    type="email"
                    placeholder="Tu email"
                    className="w-full px-6 py-5 outline-none"
                  />

                  <button className="px-6 text-[#7a3e3e] transition hover:bg-[#f8e8df]">
                    <Mail size={24} />
                  </button>
                </div>
              </div>
            </div>

            <div className="relative min-h-105">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200"
                alt="Postre Dulce Mordida"
                className="absolute inset-0 h-full w-full object-cover opacity-80"
              />

              <div className="absolute inset-0 bg-linear-to-l from-black/20 via-black/40 to-black/80" />

              <div className="relative z-10 flex h-full items-end p-10">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-[#d9a15f]">
                    Dulce Mordida
                  </p>
                  <h3 className="mt-3 text-4xl font-bold text-white">
                    Sabor que se queda contigo.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
