interface PageHeaderProps {
  tituloPagina: String;
  subtituloPagina: String;
}

const PageHeader = ({ tituloPagina, subtituloPagina }: PageHeaderProps) => {
  return (
    <header className=" text-black">
      <div className="max-w-7xl mx-auto px-3 py-6">
        <h1>{tituloPagina}</h1>
        <p>{subtituloPagina}</p>
      </div>
    </header>
  );
};

export default PageHeader;
