import {
  faBars,
  faIdCard,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink, type NavLinkRenderProps } from "react-router-dom";
import { Search, Heart, ShoppingCart } from "lucide-react";
import { useAuth } from "../context/authContext";

const NAV_ITEMS = [
  {
    id: "   Inicio",
    etiqueta: "   Inicio",
    titulo: "Inicio",
    ruta: "/",
  },
  {
    id: "tienda",
    etiqueta: "Tienda",
    titulo: "Compre con nosotros",
    ruta: "/tienda",
  },
  {
    id: "  productos",
    etiqueta: "  Productos",
    titulo: "Nuestros productos",
    ruta: "/productos",
  },
  {
    id: "blog",
    etiqueta: "Blog",
    titulo: "Noticias y consejos",
    ruta: "/blog",
  },
  {
    id: "galeria",
    etiqueta: "Galería",
    titulo: "Nuestra galería",
    ruta: "/galeria",
  },

  {
    id: "tabla",
    etiqueta: "Tabla",
    titulo: "CRUD",
    ruta: "/TablaProductos",
  },

  {
    id: "marcas",
    etiqueta: "Marcas",
    titulo: "Nuestras marcas",
    ruta: "/marcas",
  },
  {
    id: "mapa",
    etiqueta: "Mapa",
    titulo: "ubicacion",
    ruta: "/mapa",
  },
  {
    id: "grafico",
    etiqueta: "Grafico",
    titulo: "Estadisticas",
    ruta: "/grafico",
  },
];

const MainNav = () => {
  const [menuMovilVisible, setMenuMovilVisible] = useState(false);
  const { isAuthenticated } = useAuth();

  const navLinkStyles = ({ isActive }: NavLinkRenderProps): string => {
    return `inline-block px-5 py-3 text-sm   transition-all duration-300 ${
      isActive
        ? "text-decoration-line: underline text-[#a76111]  "
        : "hover:text-[#a76111] hover:bg-accenet"
    }`;
  };

  return (
    <nav className="bg-[#faf5f2] text-black sticky top-0 z-50 h-25 shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-end gap-7 px-6 py-4 sm:flex-row sm:items-center sm:justify-between h-25">
        {/* MENÚ PRINCIPAL ESCRITORIO */}
        <ul className="hidden md:flex list-none h-full ml-8 items-center gap-6">
          <div className="text-2xl font-bold text-[#a76111] mr-4">
            Dulce Mordida
          </div>

          {NAV_ITEMS.map((itemMenu) => (
            <li key={itemMenu.id}>
              <NavLink
                to={itemMenu.ruta}
                title={itemMenu.titulo}
                className={navLinkStyles}
              >
                {itemMenu.etiqueta}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* BOTONES E ICONOS DE ACCIÓN */}
        <div className="flex items-center gap-4 ml-auto justify-end">
          <NavLink to="/buscar" className={navLinkStyles} title="buscar">
            <Search size={20} />
          </NavLink>

          {/* Control de Autenticación */}
          {isAuthenticated ? (
            <NavLink
              to="/perfil"
              className={navLinkStyles}
              title="Datos del usuario"
            >
              <FontAwesomeIcon icon={faIdCard} className="size-5 mr-1" />
              Perfil
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              className={navLinkStyles}
              title="Inicie sesión"
            >
              <FontAwesomeIcon icon={faUser} className="size-5" />
            </NavLink>
          )}

          <NavLink
            to="/MeGustas"
            title="Me gusta"
            className="text-[#6f5348] transition-colors duration-300 hover:text-[#9a5a2f]"
          >
            <Heart size={20} />
          </NavLink>

          <NavLink
            to="/carrito"
            title="Carrito"
            className="relative text-[#6f5348] transition-colors duration-300 hover:text-[#9a5a2f]"
          >
            <ShoppingCart size={20} />
          </NavLink>

          {/* BOTÓN HAMBURGUESA (MÓVIL) - Corregido el div "f" */}
          <div className="flex items-center md:hidden">
            <button
              className="p-2 text-[#6f5348] hover:text-[#9a5a2f] transition-colors cursor-pointer"
              onClick={() => setMenuMovilVisible(!menuMovilVisible)}
            >
              <FontAwesomeIcon
                icon={menuMovilVisible ? faXmark : faBars}
                className="size-5"
              />
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL - Corregido fondo adaptado a la paleta */}
      {menuMovilVisible && (
        <div className="md:hidden bg-[#faf5f2] border-t border-gray-200 absolute top-25 left-0 w-full shadow-2xl animate-in slide-in-from-top duration-300 z-50">
          <ul className="flex flex-col list-none py-4 px-6 space-y-3">
            {NAV_ITEMS.map((itemMenu) => (
              <li
                key={itemMenu.id}
                className="border-b border-gray-100 pb-2 last:border-0"
              >
                <NavLink
                  to={itemMenu.ruta}
                  title={itemMenu.titulo}
                  className={navLinkStyles}
                  onClick={() => setMenuMovilVisible(false)} // Cierra el menú al hacer clic
                >
                  {itemMenu.etiqueta}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MainNav;
