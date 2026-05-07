import { useState, useEffect } from "react";

export default function Header() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHide(true); // oculta
      } else {
        setHide(false); // muestra
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300
      ${hide ? "-translate-y-full" : "translate-y-0"}
     bg-white/90 backdrop-blur-md`}
    >
      <div className="  bg-[#5a351c]  text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-2 text-[13px] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#store"
              className="flex items-center gap-2 font-semibold uppercase tracking-[0.2em] hover:text-[#ffe8d6]"
            >
              <span>Encuentra una tienda</span>
            </a>
            <a
              href="#tracking"
              className="uppercase tracking-[0.2em] text-[#f5d3b4] transition hover:text-white"
            >
              Seguimiento de pedidos
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3 justify-between sm:justify-end">
            <p className="max-w-2xl text-xs text-[#f7e7d8] sm:text-sm"></p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-md border border-[#f1dfd1] bg-[#fff2e6] px-3 py-2 text-2xl font-black tracking-[0.2em] text-[#7a3e3e]">
              Dulce Mordida
            </div>
          </div>

          <nav className="hidden flex-1 items-center justify-center gap-6 text-sm font-medium text-[#4e3a33] sm:flex">
            <a
              href="#home"
              className="uppercase transition hover:text-[#bf7e60]"
            >
              Inicio
            </a>
            <a
              href="#shop"
              className="uppercase transition hover:text-[#bf7e60]"
            >
              Tienda
            </a>
            <a
              href="#products"
              className="uppercase transition hover:text-[#bf7e60]"
            >
              Productos
            </a>
            <a
              href="#blog"
              className="uppercase transition hover:text-[#bf7e60]"
            >
              Blog
            </a>
            <a
              href="#gallery src "
              className="uppercase transition hover:text-[#bf7e60]"
            >
              Galeria
            </a>
          </nav>

          <div className="flex flex-wrap items-center gap-3 justify-end">
            <a
              href="#buy"
              className="rounded-full bg-[#9a5a2f] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#245f43]"
            >
              Compra Ahora
            </a>

            <button className="rounded-full border border-[#e3d4c8] bg-[#fffaf7] p-2 text-[#6f5348] transition hover:bg-[#f8efe7]">
              <span className="sr-only">Search</span>
              🔍
            </button>
            <button className="rounded-full border border-[#e3d4c8] bg-[#fffaf7] p-2 text-[#6f5348] transition hover:bg-[#f8efe7]">
              <span className="sr-only">Account</span>
              👤
            </button>
            <button className="rounded-full border border-[#e3d4c8] bg-[#fffaf7] p-2 text-[#6f5348] transition hover:bg-[#f8efe7]">
              <span className="sr-only">Wishlist</span>♥
            </button>
            <button className="relative rounded-full border border-[#e3d4c8] bg-[#fffaf7] p-2 text-[#6f5348] transition hover:bg-[#f8efe7]">
              <span className="sr-only">Cart</span>
              🛒
              <span className="absolute -right-2 -top-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#9a5a2f] text-[10px] font-semibold text-white">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
