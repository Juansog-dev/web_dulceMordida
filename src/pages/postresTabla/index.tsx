import PageHeader from "../../components/PageHeader.tsx";
import PostresTabla from "./PostresTabla.tsx";

function Index() {
  return (
    <>
      <PageHeader
        tituloPagina="Catálogo de Postres"
        subtituloPagina="Administración de los productos premium de Dulce Mordida"
      />

      <section>
        <div className="max-w-7xl mx-auto px-4 py-20">
          <PostresTabla />
        </div>
      </section>
    </>
  );
}

export default Index;
