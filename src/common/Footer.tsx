import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  const redesSociales = [
    { nombre: "X", vinculo: "http://x.com", icono: faXTwitter },
    {
      nombre: "Instagram",
      vinculo: "http://instagram.com",
      icono: faInstagram,
    },
    { nombre: "Facebook", vinculo: "http://facebook.com", icono: faFacebookF },
    { nombre: "LinkedIn", vinculo: "http://linkedin.com", icono: faLinkedin },
    { nombre: "YouTube", vinculo: "http://youtube.com", icono: faYoutube },
  ];
  return (
    <footer className="bg-[#2e1d09] text-white">
      {/* PARTE SUPERIOR */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Columna 1 */}
        <div>
          <p className="mb-4 text-sm">
            Encuentra una tienda cercana a ti. <br />
            <span className="underline cursor-pointer">
              Ver nuestras tiendas
            </span>
          </p>

          <p className="text-sm mb-2">T: + 51 111 222 333</p>
          <p className="text-sm mb-6">E: dulcemordida@.com</p>

          {/* Redes */}
          <div className="flex items-center gap-3">
            {redesSociales.map((iSocial) => (
              <a
                key={iSocial.nombre}
                href={iSocial.vinculo}
                target="_blank"
                className="hover:text-accent border border-current size-10 flex items-center justify-center rounded-full"
              >
                <FontAwesomeIcon icon={iSocial.icono} />
              </a>
            ))}
          </div>
        </div>

        {/* Columna 2 */}
        <div>
          <h3 className="font-semibold mb-4">Cuenta</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-orange-400 cursor-pointer">
              Mis pedidos
            </li>
            <li className="hover:text-orange-400 cursor-pointer">Envíos</li>
            <li className="hover:text-orange-400 cursor-pointer">
              Lista de deseos
            </li>
            <li className="hover:text-orange-400 cursor-pointer">Entrega</li>
            <li className="hover:text-orange-400 cursor-pointer">
              Devoluciones
            </li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div>
          <h3 className="font-semibold mb-4">Información</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-orange-400 cursor-pointer">
              Términos y políticas
            </li>
            <li className="hover:text-orange-400 cursor-pointer">Prensa</li>
            <li className="hover:text-orange-400 cursor-pointer">Carreras</li>
            <li className="hover:text-orange-400 cursor-pointer">Entrega</li>
            <li className="hover:text-orange-400 cursor-pointer">Servicios</li>
          </ul>
        </div>

        {/* Columna 4 */}
        <div>
          <h3 className="font-semibold mb-4">Tienda</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-orange-400 cursor-pointer">Afiliados</li>
            <li className="hover:text-orange-400 cursor-pointer">
              Más vendidos
            </li>
            <li className="hover:text-orange-400 cursor-pointer">Descuentos</li>
            <li className="hover:text-orange-400 cursor-pointer">
              Nuevos productos
            </li>
            <li className="hover:text-orange-400 cursor-pointer">Pedidos</li>
          </ul>
        </div>
      </div>

      {/* PARTE INFERIOR */}
      <div className=" bg-[#251809] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Idioma */}
          <select className="bg-transparent border border-white/30 px-3 py-1 rounded text-sm">
            <option>Español</option>
            <option>English</option>
          </select>

          {/* Copyright */}
          <p className="text-sm text-center">
            © 2026, Dulce Mordida. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
