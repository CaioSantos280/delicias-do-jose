import React, { useState } from "react";
import {
  Phone,
  CakeSlice,
  Camera,
  Share2,
  Music,
} from "lucide-react";
import { STORE_CONFIG } from "./config/store";
import { products } from "./data/products";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
              <div
                key={product.id}
                className="bg-[#2a1911]/90 border border-[#4a3022] rounded-[32px] overflow-hidden backdrop-blur-md shadow-2xl"
              >
                <img
                  src={`/${product.media?.[0]?.src}`}
                  alt={product.name}
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-2xl font-bold">{product.name}</h3>
                    <span className="text-yellow-400 font-bold">
                      {product.price}
                    </span>
                  </div>
                  <p className="text-[#cdb7a2]">{product.description}</p>
                  <button onClick={() => setSelectedProduct(product)} className="w-full bg-yellow-500 text-black py-4 rounded-2xl font-bold flex items-center justify-center gap-2">
                  Ver Mais <ChevronRight size={18} />
                  </button>
                </div>
              </div>
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

      <AnimatePresence>
  {selectedProduct && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
    >
      <motion.div
       initial={{ scale: 0.9, opacity: 0 }}
       animate={{ scale: 1, opacity: 1 }}
       exit={{ scale: 0.9, opacity: 0 }}
       // Mudei de max-w-5xl para max-w-lg (ou max-w-md se quiser ainda menor)
      className="bg-[#24150f] border border-[#4a3022] rounded-[32px] max-w-lg w-[95%] overflow-hidden relative">
        <button
          onClick={() => setSelectedProduct(null)}
          className="absolute top-4 right-4 z-50 bg-black/40 p-2 rounded-full"
        >
          <X />
        </button>

        <div className="flex flex-col">
          <div className="bg-black">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
            >
              {selectedProduct.media?.map((item, index) => (
                <SwiperSlide key={index}>
                  {item.type === "image" ? (
                    <img
                      src={`/${item.src}`}
                      alt={selectedProduct.name}
                      className="w-full h-[350px] object-cover"
                    />
                  ) : (
                    <video
                      src={`/${item.src}`}
                      controls
                      preload="metadata"
                      muted
                      loop
                      playsInline
                      className="w-full h-[350px] object-cover"
                    />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="p-8 flex flex-col justify-center">
            <span className="text-yellow-400 uppercase text-sm mb-2">
              {selectedProduct.category}
            </span>

            <h2 className="text-4xl font-black mb-4">
              {selectedProduct.name}
            </h2>

            <p className="text-[#d9c2ad] mb-6">
              {selectedProduct.description}
            </p>

            <div className="space-y-4 mb-8 text-sm">
            <div>
              <p className="text-gray-400 text-xs uppercase">Peso</p>
              <p className="font-semibold">{selectedProduct.details?.weight}</p>
           </div>

           <div>
              <p className="text-gray-400 text-xs uppercase">Serve</p>
              <p className="font-semibold">{selectedProduct.details?.serves}</p>
           </div>

           <div>
              <p className="text-gray-400 text-xs uppercase mb-2">Ingredientes</p>

              <div className="flex flex-wrap gap-2">
               {selectedProduct.details?.ingredients?.map((ing, index) => (
                 <span
                   key={`${ing}-${index}`}
                   className="bg-yellow-500/10 text-yellow-200 border border-yellow-500/20 px-3 py-1 rounded-full text-xs">
                    {ing}
                  </span>
               ))}
             </div>
           </div>
          </div>

            <button
              onClick={() => handlePedido(selectedProduct.name)}
              className="bg-yellow-500 text-black py-4 rounded-2xl font-bold"
            >
              Pedir no WhatsApp
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

      {/* FOOTER */}
      <footer className="border-t border-[#3c2619] px-6 lg:px-20 py-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <CakeSlice className="text-yellow-400" />
              <h3 className="text-2xl font-black">
                {STORE_CONFIG.name}
              </h3>
            </div>
            <p className="text-[#bca38f] max-w-sm">
              Bolos caseiros e piscininhas feitas pra impressionar no sabor e no
              visual.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-lg">Contato</h4>
            <a
              href={`https://wa.me/${STORE_CONFIG.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="text-[#cdb7a2] hover:text-yellow-400 block transition-colors"
            >
              (21) 99138-2676
            </a>
            <p className="text-[#cdb7a2]">deliciasdojose0@email.com</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-lg">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href={`https://instagram.com/${STORE_CONFIG.instagram}`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#3b2417] hover:bg-[#533222] transition-all duration-300 p-3 rounded-xl flex items-center justify-center text-white"
              >
                <Camera size={20} />
              </a>
              <a
                href={`https://facebook.com/${STORE_CONFIG.facebook}`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#3b2417] hover:bg-[#533222] transition-all duration-300 p-3 rounded-xl flex items-center justify-center text-white"
              >
                <Share2 size={20} />
              </a>
              <a
                href={`https://tiktok.com/@${STORE_CONFIG.tiktok}`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#3b2417] hover:bg-[#533222] transition-all duration-300 p-3 rounded-xl flex items-center justify-center text-white"
              >
                <Music size={20} />
              </a>
              <a
                href={`https://wa.me/${STORE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#3b2417] hover:bg-[#533222] transition-all duration-300 p-3 rounded-xl flex items-center justify-center text-white"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}