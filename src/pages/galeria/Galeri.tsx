import PageHeader from "../../components/PageHeader";
import GaleriaGrid from "./GaleriaGrid";

const Galeria = () => {
  return (
    <>
      <PageHeader
        tituloPagina="Galería"
        subtituloPagina="Nuestros trabajos y productos destacados"
      />

      <section>
        <div className="mx-auto max-w-7xl px-3 py-20">
          <GaleriaGrid />
        </div>
      </section>
    </>
  );
};

export default Galeria;
