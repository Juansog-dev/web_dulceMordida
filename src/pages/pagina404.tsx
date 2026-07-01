import PageHeader from "../components/PageHeader";
import error404 from "../assets/imagenes/error404.png";
import { Link } from "react-router-dom";
const pagina404 = () => {
  return (
    <>
      <PageHeader tituloPagina="pagina 404 " subtituloPagina=":v" />

      <section>
        <div className="max-w-7xl mx-auto px-4 py-20">
          <figure>
            <Link to="/">
              <img src={error404} alt="" />
            </Link>
          </figure>
        </div>
      </section>
    </>
  );
};

export default pagina404;
