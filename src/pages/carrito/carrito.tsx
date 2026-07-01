import PageHeader from "../../components/PageHeader";
import Carritotabla from "./carritotabla";
function carrito() {
  return (
    <>
      <PageHeader
        tituloPagina="Carrito de Compras"
        subtituloPagina="Revisa tus productos seleccionados"
      />
      <section>
        <div className="max-w-7xl mx-auto px-4 py-20">
          <Carritotabla />
        </div>
      </section>
    </>
  );
}

export default carrito;
