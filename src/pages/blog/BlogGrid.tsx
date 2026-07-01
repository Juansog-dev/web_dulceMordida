import { useBlog } from "../blog/useblog";

const BlogGrid = () => {
  const { posts, cargando, error, hasPosts } = useBlog();

  if (cargando) {
    return <p className="text-center">Cargando blog...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">{error}</p>;
  }

  if (!hasPosts) {
    return <p className="text-center">No hay publicaciones disponibles.</p>;
  }

  const postDestacado = posts[0];
  const postsRestantes = posts.slice(1);

  return (
    <>
      <section className="mb-24 overflow-hidden bg-[#faf5f2]">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center px-10 py-20 lg:px-24">
            <div className="max-w-xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.4em] text-[#a76111]">
                Artículo destacado
              </p>

              <h2 className="text-5xl font-bold leading-tight text-[#3b2418]">
                {postDestacado.titulo}
              </h2>

              <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
                <span>{postDestacado.fecha}</span>
                <span className="h-4 w-px bg-gray-300"></span>
                <span>{postDestacado.autor}</span>
              </div>

              <p className="mt-8 leading-8 text-gray-600">
                {postDestacado.descripcion}
              </p>

              <button className="mt-10 border border-[#3b2418] px-8 py-4 font-semibold tracking-widest transition hover:bg-[#a76111] hover:text-white">
                LEER MÁS →
              </button>
            </div>
          </div>

          <div className="relative h-125">
            <img
              src={postDestacado.imagen}
              alt={postDestacado.titulo}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
        {postsRestantes.map((post) => (
          <article
            key={post.idblog}
            className="group overflow-hidden  bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              src={post.imagen}
              alt={post.titulo}
              className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="p-7">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#a76111]">
                {post.autor}
              </p>

              <h3 className="text-2xl font-bold text-[#3b2418]">
                {post.titulo}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">{post.descripcion}</p>

              <button className="mt-6  bg-[#a76111] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7d470c]">
                Leer artículo
              </button>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default BlogGrid;
