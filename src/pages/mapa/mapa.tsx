import PageHeader from "../../components/PageHeader";
import {
  APIProvider,
  Circle,
  Map,
  Marker,
  Polygon,
  Polyline,
} from "@vis.gl/react-google-maps";

const API_KEY = "";

const center = { lat: -12.086980093336383, lng: -76.975792052738 };
const DulceMordida = { lat: -12.086980093336383, lng: -76.975792052738 };
const antena = { lat: -12.086980093336383, lng: -76.975792052738 };

const poligono = [
  { lat: -12.082542058837705, lng: -76.96957603659689 },
  { lat: -12.080811011739046, lng: -76.9703485127462 },
  { lat: -12.078429492286212, lng: -76.96778432108388 },
  { lat: -12.07940518343428, lng: -76.96622863994985 },
];

const polilinea = [
  { lat: -12.07780001221369, lng: -76.96496263715906 },
  { lat: -12.080443818465541, lng: -76.96667925082421 },
  { lat: -12.08128311657781, lng: -76.96732298094864 },
  { lat: -12.082877775741206, lng: -76.96975842658608 },
];

const mostrarMensaje = () => {
  alert("Zona de cobertura: Alcance de 200 metros a la redonda.");
};

function Mapa() {
  return (
    <div className="w-full">
      <PageHeader
        tituloPagina={"Mapas"}
        subtituloPagina={"Encuéntranos y Cobertura"}
      />

      <section className="container mx-auto px-4 my-10">
        {/* Contenedor principal en rejilla: 1 columna en móvil, 3 columnas en pantallas grandes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          {/* COLUMNA DEL MAPA (Ocupa 2 de las 3 columnas disponibles) */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
            <div className="w-full h-140">
              <APIProvider
                solutionChannel="GMP_devsite_samples_v3_rgmbasicmap"
                apiKey={API_KEY}
              >
                <Map
                  defaultZoom={15}
                  defaultCenter={center}
                  gestureHandling={"greedy"}
                  options={{
                    disableDefaultUI: true,
                    zoomControl: true,
                  }}
                >
                  <Marker
                    position={DulceMordida}
                    title="Dulce Mordida - Taller Central"
                  />
                  <Circle
                    center={antena}
                    radius={200}
                    strokeColor={"#FF0000"}
                    strokeOpacity={0.6}
                    strokeWeight={3}
                    fillColor={"#FF0000"}
                    fillOpacity={0.25}
                    onClick={mostrarMensaje}
                  />
                  <Polygon
                    paths={poligono}
                    options={{
                      strokeColor: "#EAB308",
                      strokeOpacity: 0.8,
                      strokeWeight: 2,
                      fillColor: "#EAB308",
                      fillOpacity: 0.25,
                    }}
                  />
                  <Polyline
                    path={polilinea}
                    options={{
                      strokeColor: "#3B82F6",
                      strokeOpacity: 0.8,
                      strokeWeight: 5,
                    }}
                  />
                </Map>
              </APIProvider>
            </div>
          </div>

          {/* COLUMNA DE LA LEYENDA (Ocupa 1 columna) */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 h-full">
            <h4 className="text-xl font-bold mb-6 text-gray-800 border-b pb-2">
              Leyenda del Mapa
            </h4>

            <div className="space-y-6">
              {/* Ítem 1: Local / Círculo Rojo */}
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-red-500 border-2 border-red-700 shrink-0 mt-1"></div>
                <div>
                  <h5 className="font-semibold text-gray-700 text-sm">
                    Ubicación del Local
                  </h5>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Taller Central de **Dulce Mordida**. El radio rojo delimita
                    nuestra zona de despacho inmediato para postres y pasteles
                    listos.
                  </p>
                </div>
              </div>

              {/* Ítem 2: Polígono Amarillo */}
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-md bg-yellow-400 border-2 border-yellow-600 shrink-0 mt-1"></div>
                <div>
                  <h5 className="font-semibold text-gray-700 text-sm">
                    Zona de Cobertura Especial
                  </h5>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Área habilitada de forma exclusiva para la atención
                    programada de caterings, eventos y pedidos corporativos
                    mayores.
                  </p>
                </div>
              </div>

              {/* Ítem 3: Línea de Construcción / Expansión */}
              <div className="flex items-start space-x-3">
                <div className="w-5 h-2 bg-blue-500 rounded shrink-0 mt-2.5"></div>
                <div>
                  <h5 className="font-semibold text-gray-700 text-sm">
                    Área en Construcción y Expansión
                  </h5>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Eje vial actualmente en evaluación estratégica para la
                    ampliación de nuestras rutas de delivery logístico.
                  </p>
                </div>
              </div>
            </div>

            {/* Cuadro complementario estético */}
            <div className="mt-8 bg-gray-50 p-4 rounded-md border border-gray-200">
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider block mb-1">
                ¿Estás en nuestra zona?
              </span>
              <p className="text-xs text-gray-500">
                Haz clic sobre el círculo rojo en el mapa para validar la
                cobertura automática y los tiempos de llegada aproximados.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mapa;
