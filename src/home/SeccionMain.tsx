import { useEffect, useState } from "react";
import postresbaner from "../assets/imagenes/postresbaner.jpg";
import postresbaner2 from "../assets/imagenes/postresbaner2.jpg";

export default function HeroSection() {
  const banners = [postresbaner, postresbaner2];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % banners.length);
    }, 4000); // más tiempo para apreciar el fade

    return () => window.clearInterval(interval);
  }, [banners.length]);

  return (
    <section
      id="inicio"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            alt={`Banner ${index + 1}`}
          />
        ))}
        <div className="absolute inset-0 bg-linear-to-r from-[#2f1b1bcc] via-[#4b2e2e99] to-[#7a3e3e66]" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-6 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#a76111]">
          Elegancia en cada bocado
        </p>
        <h2 className="text-5xl font-bold leading-tight text-white md:text-7xl">
          Dulce
          <span className="block text-[#ffffff]">Mordida</span>
        </h2>
        <p className="mt-6 max-w-xl text-base leading-7 text-[#fff5f0] md:text-lg">
          Creamos postres artesanales con presentación refinada, sabores
          delicados y detalles pensados para convertir cada celebración en un
          recuerdo inolvidable.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#productos"
            className="  border-white/50 px-7 py-3 font-semibold text-white transition hover:scale-105 hover:bg-white hover:text-[#6b3e3e]"
          >
            Comprar ahora
          </a>
        </div>
      </div>
    </section>
  );
}
