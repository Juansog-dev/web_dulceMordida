const textos = new Array(10).fill(" Dulce Mordida, sabor en cada mordida • ");

export default function Carusel() {
  return (
    <div className="overflow-hidden bg-linear-to-r from-[#f7ede6] via-[#d9b8a0] to-[#f7ede6] py-4">
      <div className="flex w-max animate-marquee">
        {/* bloque 1 */}
        <div className="flex gap-10 whitespace-nowrap">
          {textos.map((texto, i) => (
            <span
              key={i}
              className="text-[#6f5348] text-xl font-semibold tracking-[4px]"
            >
              {texto}
            </span>
          ))}
        </div>

        {/* duplicado para loop infinito */}
        <div className="flex gap-10 whitespace-nowrap">
          {textos.map((texto, i) => (
            <span
              key={"dup-" + i}
              className="text-[#6f5348] text-xl font-semibold tracking-[4px]"
            >
              {texto}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
