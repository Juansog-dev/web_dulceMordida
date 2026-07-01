function Mainheader() {
  return (
    <div className="  bg-[#a76111]  text-white h-13 ">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-2 text-[13px] sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-4 h-10">
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
      </div>
    </div>
  );
}

export default Mainheader;
