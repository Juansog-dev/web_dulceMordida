import SeccionMain from "../../home/SeccionMain";
import PostresDestacados from "../../home/PostresDestacados";
import ProductsSection from "../../home/ProductsSection";
import Coleccion from "../../home/coleccion";
import SpecialOrdersSection from "../../home/Testimonios";
import TestimonialsSection from "../../home/Blog";
import ContactSection from "../../home/novedadeOfertas";
import Productos from "../../conexionphp/prodcutos";
import Carusel from "../../home/carusel";
import Recetas from "../../conexionphp/recetas";

export default function DulceMordida() {
  const galeria = [
    "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1464306076886-da185f6a9d05?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80",
    "src/assets/imagenes/postresbaner.jpg",
    "src/assets/imagenes/postresbaner2.jpg",
  ];

  return (
    <div className="min-h-screen bg-[#fffaf7] text-[#4b2e2e]">
      <SeccionMain />
      <PostresDestacados />
      <Carusel />
      <Productos />
      <ProductsSection />
      <Recetas />
      <Coleccion galeria={galeria} />
      <SpecialOrdersSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
