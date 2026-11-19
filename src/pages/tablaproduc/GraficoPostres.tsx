import { Bar } from "react-chartjs-2";
import { useGraficoPostres } from "../tablaproduc/useProductos";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar los módulos indispensables
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export default function GraficoPostres() {
  const { datosCargados, cargando, error } = useGraficoPostres();

  if (cargando) {
    return (
      <div className="text-center p-6 text-[#a76111] font-semibold">
        Cargando estadísticas de repostería...
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto my-10 p-6 bg-[#faf5f2] border border-[#EBE6DD] rounded-sm shadow-sm">
      <h3 className="text-base font-bold text-[#a76111] text-center mb-6 tracking-wide uppercase">
        Top 5 Postres Más Demandados
      </h3>

      {error && (
        <p className="text-center text-red-500 text-xs mb-4">{error}</p>
      )}

      {datosCargados ? (
        <div className="bg-white p-4 border border-[#EBE6DD]">
          <Bar
            data={datosCargados}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                  labels: {
                    color: "#333",
                    font: { weight: "bold" },
                  },
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  grid: { color: "#faf5f2" },
                },
                x: {
                  grid: { display: false },
                },
              },
            }}
          />
        </div>
      ) : (
        !error && (
          <p className="text-center text-gray-500 text-xs">
            No hay datos disponibles para mostrar.
          </p>
        )
      )}
    </div>
  );
}
