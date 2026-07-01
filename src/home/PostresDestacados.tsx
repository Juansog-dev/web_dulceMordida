const FeaturedCollections = () => {
  const collections = [
    {
      name: "Tortas",
      img: "https://images.pexels.com/photos/32706270/pexels-photo-32706270.jpeg",
    },
    {
      name: "Cupcakes",
      img: "https://images.pexels.com/photos/11659348/pexels-photo-11659348.jpeg",
    },
    {
      name: "Cheesecakes",
      img: "https://images.pexels.com/photos/32706270/pexels-photo-32706270.jpeg",
    },
    {
      name: "Brownies",
      img: "https://images.pexels.com/photos/11659348/pexels-photo-11659348.jpeg",
    },
  ];

  return (
    <section className="py-24 bg-white text-center">
      <p className="mb-4 text-xs font-semibold tracking-[0.6em] text-[#9a5a2f] uppercase">
        Dulce Mordida para cada antojo
      </p>

      <h2 className="mb-16 text-4xl font-bold text-black">
        Postres Destacados
      </h2>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-50 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {collections.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex h-82.5 w-82.5 items-center justify-center rounded-full border border-gray-200 bg-white">
              <img
                src={item.img}
                alt={item.name}
                className="h-55 w-55 object-contain"
              />
            </div>

            <h3 className="mt-6 text-lg font-semibold text-[#6f5348]">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollections;
