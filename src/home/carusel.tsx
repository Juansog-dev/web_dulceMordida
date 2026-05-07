import especial1 from "../assets/imagenes/postresbaner.jpg";

const imagenes = new Array(20).fill(especial1);

export default function Carusel() {
  return (
    <div className="overflow-hidden bg-[#b8a496]">
      <div className="flex w-max animate-marquee">
        {/* PRIMER BLOQUE */}
        <div className="flex gap-6">
          {imagenes.map((img, i) => (
            <img
              key={i}
              src={img}
              className="h-20 w-auto rounded-xl flex-shrink-0"
            />
          ))}
        </div>

        {/* DUPLICADO (CLAVE PARA LOOP INFINITO) */}
        <div className="flex gap-6">
          {imagenes.map((img, i) => (
            <img
              key={"dup-" + i}
              src={img}
              className="h-20 w-auto rounded-xl flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
