import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProductsSection from "./ProductsSection";
import GallerySection from "./GallerySection";
import SpecialOrdersSection from "./SpecialOrdersSection";
import TestimonialsSection from "./TestimonialsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import Productos from "../conexionphp/prodcutos";
import Recetas from "../conexionphp/recetas";
import Carusel from "./carusel";
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

  const testimonios = [
    {
      nombre: "Camila R.",
      texto:
        "La torta fue hermosa, delicada y deliciosa. Superó todo lo que imaginábamos.",
    },
    {
      nombre: "Valeria M.",
      texto:
        "La presentación fue impecable y cada detalle se veía fino y profesional.",
    },
    {
      nombre: "Andrea P.",
      texto:
        "Pedimos una mesa dulce para un evento y todo estuvo perfecto, elegante y delicioso.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fffaf7] text-[#4b2e2e]">
      <Header />
      <HeroSection />
      <AboutSection />
      <Productos />
      <ProductsSection />
      <Carusel />
      <Recetas />
      <GallerySection galeria={galeria} />
      <SpecialOrdersSection />
      <TestimonialsSection testimonios={testimonios} />
      <ContactSection />
      <Footer />
    </div>
  );
}
