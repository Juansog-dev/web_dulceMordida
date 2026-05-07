export default function SpecialOrdersSection() {
  return (
    <section className="bg-[#f8f1ed] py-24 text-[#6f4e4e]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-[#6f4e4e]">
            Pedidos especiales
          </p>
          <h3 className="mt-3 text-4xl font-bold md:text-5xl">
            Diseñamos postres para tus momentos más memorables
          </h3>
          <p className="mt-6 max-w-xl leading-8 text-[#6f4e4e]">
            Creamos propuestas exclusivas para bodas, cumpleaños, aniversarios,
            eventos corporativos y celebraciones íntimas con una estética
            elegante y sabor excepcional.
          </p>
        </div>

        <div className="rounded-4xl bg-white/10 p-8 backdrop-blur-sm ">
          <ul className="rounded-4xl border border-[#f1dfd1] bg-white p-8 shadow-md ">
            <li>• Tortas personalizadas</li>
            <li>• Mesas dulces decoradas</li>
            <li>• Box de regalo gourmet</li>
            <li>• Postres para eventos especiales</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
