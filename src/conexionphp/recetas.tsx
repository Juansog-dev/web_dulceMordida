import { useEffect, useState } from "react";

type Receta = {
  id: number;
  nombre: string;
  ingredientes: string;
  cantidad: string;
  preparacion: string;
  tiempo_preparacion: string;
};

function Recetas() {
  const [recetas, setRecetas] = useState<Receta[]>([]);

  useEffect(() => {
    fetch("https://dulcemordida.alwaysdata.net/recetas.php")
      .then((res) => res.json())
      .then((data) => setRecetas(data))
      .catch((error) => console.log("Error:", error));
  }, []);

  return (
    <section className="bg-[#e4d8d9] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-center text-4xl font-bold text-[#c27b7f]">
          Recetas de Postres
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recetas.map((receta) => (
            <article
              key={receta.id}
              className="rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className="mb-3 text-2xl font-bold text-black">
                {receta.nombre}
              </h3>

              <p className="mb-2">
                <strong>Ingredientes:</strong> {receta.ingredientes}
              </p>

              <p className="mb-2">
                <strong>Medidas:</strong> {receta.cantidad}
              </p>

              <p className="mb-2">
                <strong>Preparación:</strong> {receta.preparacion}
              </p>

              <p className="mt-4 rounded-full bg-[#e0d8d2] px-4 py-2 text-sm font-semibold text-black">
                Tiempo: {receta.tiempo_preparacion}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Recetas;
