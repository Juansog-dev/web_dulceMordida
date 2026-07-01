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
    <nav className="bg-[#faf5f2] text-black  sticky z-50 h-25 ">
      <div className="mx-auto flex max-w-7xl flex-col items-end gap-7 px-6 py-4 sm:flex-row sm:items-center sm:justify-between h-25">
        <ul className="hidden md:flex list-none h-full ml-8 items-center">
          <div className="text-2xl font-bold text-[#a76111] ">
            Dulce Moridada
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

        <div className="flex items-center gap-4 ml-auto justify-end ">
          <NavLink to="/buscar" className={navLinkStyles} title="buscar">
            <Search size={20} />
          </NavLink>

          {isAuthenticated ? (
            /* 1. CUANDO SÍ INICIÓ SESIÓN -> Va a /perfil */
            <NavLink
              to="/perfil"
              className={navLinkStyles}
              title="Datos del usuario"
            >
              <FontAwesomeIcon icon={faIdCard} className="size-5" />
              Perfil
            </NavLink>
          ) : (
            /* 2. CUANDO NO ESTÁ LOGUEADO -> Va a /login */
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
            title=" Carrito"
            className="relative text-[#6f5348] transition-colors duration-300 hover:text-[#9a5a2f]"
          >
            <ShoppingCart size={20} />
          </NavLink>
          <div className="f">
            <button
              className="md:hidden p-2 hover:text-accent transition-colors cursor-pointer"
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

      {menuMovilVisible && (
        <div className="md:hidden bg-white border-t border-white/10 absolute w-full shadow-2xl animate-in slide-in-from-top duration-300">
          <ul className="flex flex-col list-none py-4">
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
        </div>
      )}
    </nav>
  );
};

export default MainNav;
