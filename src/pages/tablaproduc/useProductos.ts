import { useState, useEffect } from "react";
import { graficoService } from "../../services/prodtabla.service";
import type { ChartData } from "chart.js";

export const useGraficoPostres = () => {
  const [datosCargados, setDatosCargados] = useState<ChartData<"bar"> | null>(
    null,
  );
  const [cargando, setCargando] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cargarDatosGrafico = async () => {
      try {
        setCargando(true);
        setError(null);

        const data = await graficoService.obtenerPostresMasVendidos();

        const nombresPostres = data.map((postre) => postre.nombre);
        const cantidadesVendidas = data.map((postre) => postre.cantidad);

        setDatosCargados({
          labels: nombresPostres,
          datasets: [
            {
              label: "Unidades Vendidas",
              data: cantidadesVendidas,
              backgroundColor: "rgba(167, 97, 17, 0.7)", // Ocre de Dulce Mordida
              borderColor: "#a76111", // Ocre sólido
              borderWidth: 1,
            },
          ],
        });
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Error al cargar los datos estadísticos.");
      } finally {
        setCargando(false);
      }
    };

    cargarDatosGrafico();
  }, []);

  return { datosCargados, cargando, error };
};
