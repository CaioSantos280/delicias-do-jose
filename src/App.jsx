import React, { useState } from "react";

import { Phone } from "lucide-react";

import { motion } from "framer-motion";

import { STORE_CONFIG } from "./config/store";
import { products } from "./data/products";

import ProductModal from "./components/ProductModal";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

const categories = ["Bolos Caseiros", "Piscininhas"];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function App() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeCategory, setActiveCategory] = useState("Bolos Caseiros");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter(
    (item) => item.category === activeCategory
  );

  const handlePedido = (nomeDoBolo) => {
    const celular = STORE_CONFIG.whatsapp;
    const texto = `Olá! Gostaria de encomendar o ${nomeDoBolo} que vi no site.`;
    const linkZap = `https://wa.me/${celular}?text=${encodeURIComponent(texto)}`;
    window.open(linkZap, "_blank");
  };

  return (
    <div className="bg-[#1f130d] text-[#f7efe2] overflow-x-hidden min-h-screen">
      {/* Background Glow */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-700/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[120px]" />
      </div>

      {/* HERO */}
      <section className="min-h-screen flex items-center px-6 lg:px-20 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="space-y-8 flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <span className="bg-[#3b2417] text-[#e7c78c] px-4 py-2 rounded-full text-sm border border-[#6f4b32] w-fit">
              Receita de família • Feito artesanalmente
            </span>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
            {STORE_CONFIG.name}
            </h1>
            <p className="text-lg lg:text-2xl text-[#d9c2ad] leading-relaxed max-w-xl">
              Bolos incrivelmente fofinhos, coberturas generosas e sabores que
              fazem qualquer sobremesa parecer sem graça.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
              <a
                href={`https://wa.me/${STORE_CONFIG.whatsapp}`}
                className="bg-yellow-500 text-black px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-2xl w-full sm:w-auto"              >
                <Phone size={20} /> Chamar no WhatsApp
              </a>
              <a
                href="#cardapio"
                className="border border-[#7d5a42] hover:bg-[#3a2418] transition-all duration-300 px-8 py-4 rounded-2xl font-semibold flex items-center justify-center text-center w-full sm:w-auto"
              >
                Ver Cardápio
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full" />
            <img
              src="/pmaracujacombrigadeiro.jpeg"
              alt="Bolo de Maracujá com Brigadeiro"
              className="relative z-10 w-full max-w-[550px] mx-auto rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.5)] object-cover aspect-[4/5]"
            />
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="cardapio" className="px-6 lg:px-20 py-10">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {setActiveCategory(category);setVisibleCount(6);}}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-yellow-500 text-black scale-105"
                  : "bg-[#2d1a12] hover:bg-[#43271b]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="px-6 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 text-center">
            <h2 className="text-4xl lg:text-5xl font-black">
              Cardápio Especial
            </h2>
            <p className="text-[#cdb7a2] mt-4 text-lg">
              Cada detalhe pensado pra fazer você querer repetir o pedaço.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
  {filteredProducts.slice(0, visibleCount).map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      setSelectedProduct={setSelectedProduct}
    />
  ))}
</div>

{visibleCount < filteredProducts.length && (
  <div className="flex justify-center mt-14">
    <button
      onClick={() => setVisibleCount((prev) => prev + 6)}
      className="bg-yellow-500 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300"
    >
      Mostrar mais
    </button>
  </div>
)}
        </div>
      </section>
      <ProductModal
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        handlePedido={handlePedido}
      />
    </div>
  );
}