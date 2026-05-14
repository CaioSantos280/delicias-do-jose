import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Phone,
  CakeSlice,
  Camera,
  Share2,
  Music,
} from "lucide-react";

const categories = ["Bolos Caseiros", "Piscininhas", "Salgados"];

const products = [
  { id: 1, name: "Paçoca", category: "Bolos Caseiros", price: "R$ 18", image: "pacoca.jpeg", description: "Sabor marcante e cremoso de paçoca caseira." },
  { id: 2, name: "Morango", category: "Bolos Caseiros", price: "R$ 18", image: "morango.jpeg", description: "Bolo delicado com aroma e cor suave de morango." },
  { id: 3, name: "Abacaxi", category: "Bolos Caseiros", price: "R$ 18", image: "abacaxi.jpeg", description: "Sabor tropical com pedaços suculentos de abacaxi." },
  { id: 4, name: "Coco", category: "Bolos Caseiros", price: "R$ 18", image: "coco.jpeg", description: "Sabor leve e úmido, com coco ralado no preparo." },
  { id: 5, name: "Formigueiro", category: "Bolos Caseiros", price: "R$ 18", image: "formigueiro.jpeg", description: "Bolo macio com granulado de chocolate misturado na massa." },
  { id: 6, name: "Fubá com Coco", category: "Bolos Caseiros", price: "R$ 18", image: "fubacomcoco.jpeg", description: "Mistura leve de fubá e coco ralado." },
  { id: 7, name: "Fubá com Erva-doce", category: "Bolos Caseiros", price: "R$ 18", image: "fubacomervadoce.jpeg", description: "Um toque aromático de erva-doce no bolo de fubá." },
  { id: 8, name: "Mesclado", category: "Bolos Caseiros", price: "R$ 18", image: "mesclado.jpeg", description: "Combinação de massas branca e de chocolate." },
  { id: 9, name: "Cenoura", category: "Bolos Caseiros", price: "R$ 22", image: "cenoura.jpeg", description: "Massa leve com cobertura farta de chocolate." },
  { id: 10, name: "Banana", category: "Bolos Caseiros", price: "R$ 22", image: "banana.jpeg", description: "Feito com bananas maduras e pitada de canela." },
  { id: 11, name: "Churros", category: "Bolos Caseiros", price: "R$ 22", image: "churros.jpeg", description: "Recheado com doce de leite e polvilhado com açúcar e canela." },
  { id: 12, name: "Fubá com Goiabada", category: "Bolos Caseiros", price: "R$ 22", image: "goiabada.jpeg", description: "Bolo de fubá com cubos de goiabada derretendo por dentro." },
  { id: 13, name: "Milho Cremoso", category: "Bolos Caseiros", price: "R$ 22", image: "milhocremoso.jpeg", description: "Bolo macio com sabor intenso de milho." },
  { id: 14, name: "Ninho", category: "Bolos Caseiros", price: "R$ 22", image: "ninho.jpeg", description: "Macio com leite Ninho na massa e cobertura cremosa por cima." },
  { id: 15, name: "Aipim", category: "Bolos Caseiros", price: "R$ 25", image: "aipim.jpeg", description: "Bolo macio e úmido, feito com mandioca ralada." },
  { id: 16, name: "Abacaxi com Coco", category: "Bolos Caseiros", price: "R$ 25", image: "abacaxicomcoco.jpeg", description: "Pedaços macios na massa finalizado com coco cremoso." },
  { id: 17, name: "Chocolate Premium", category: "Bolos Caseiros", price: "R$ 25", image: "chocolatepremium.jpeg", description: "Bolo de chocolate com gotas e brigadeiro cremoso." },
  { id: 18, name: "Limão", category: "Piscininhas", price: "R$ 18", image: "piscininhadelimao.jpeg", description: "Sabor cítrico e refrescante com cobertura cremosa." },
  { id: 19, name: "Limão e Brigadeiro", category: "Piscininhas", price: "R$ 22", image: "plimaocombrigadeiro.jpeg", description: "Combinação de brigadeiro com toque cítrico." },
  { id: 20, name: "Brigadeiro", category: "Piscininhas", price: "R$ 22", image: "piscininhadebrigadeiro.jpeg", description: "Clássico com cobertura cremosa e granulados." },
  { id: 21, name: "Brigadeiro Branco e Preto", category: "Piscininhas", price: "R$ 22", image: "brigadeirobrancoepreto.jpeg", description: "Duas camadas: brigadeiro branco e tradicional." },
  { id: 22, name: "Maracujá", category: "Piscininhas", price: "R$ 22", image: "piscininhademaracuja.jpeg", description: "Recheio suave feito com polva natural da fruta." },
  { id: 23, name: "Ninho Piscininha", category: "Piscininhas", price: "R$ 22", image: "piscininhadeninho.jpeg", description: "Leite Ninho na massa e cobertura transbordando." },
  { id: 24, name: "Ninho e Brigadeiro", category: "Piscininhas", price: "R$ 22", image: "pninhocombrigadeiro.jpeg", description: "Mistura irresistível de chocolate e leite ninho." },
  { id: 25, name: "Maracujá e Brigadeiro", category: "Piscininhas", price: "R$ 22", image: "pmaracujacombrigadeiro.jpeg", description: "Equilíbrio entre o doce e o azedinho." },
  { id: 26, name: "Cenoura Piscininha", category: "Piscininhas", price: "R$ 22", image: "pcenoura.jpeg", description: "Bolo de cenoura fofinho com muito brigadeiro." },
  { id: 27, name: "Prestígio", category: "Piscininhas", price: "R$ 22", image: "pprestigio.jpeg", description: "Massa de chocolate, recheio de coco e cobertura cremosa." }
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState("Bolos Caseiros");

  const filteredProducts = products.filter(
    (item) => item.category === activeCategory
  );

  const handlePedido = (nomeDoBolo) => {
    const celular = "5521991382676";
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
              Delícias do José
            </h1>
            <p className="text-lg lg:text-2xl text-[#d9c2ad] leading-relaxed max-w-xl">
              Bolos incrivelmente fofinhos, coberturas generosas e sabores que
              fazem qualquer sobremesa parecer sem graça.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
              <a
                href="https://wa.me/5521991382676"
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
              onClick={() => setActiveCategory(category)}
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
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-[#2a1911]/90 border border-[#4a3022] rounded-[32px] overflow-hidden backdrop-blur-md shadow-2xl"
              >
                <img
                  src={product.image}
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
                  <button
                    onClick={() => handlePedido(product.name)}
                    className="w-full bg-yellow-500 text-black py-4 rounded-2xl font-bold"
                  >
                    Pedir Agora
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#3c2619] px-6 lg:px-20 py-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <CakeSlice className="text-yellow-400" />
              <h3 className="text-2xl font-black"> Delícias do José </h3>
            </div>
            <p className="text-[#bca38f] max-w-sm">
              Bolos caseiros e piscininhas feitas pra impressionar no sabor e no
              visual.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-lg">Contato</h4>
            <a
              href="https://wa.me/5521991382676"
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
                href="https://instagram.com/delicias_do_jose.1"
                target="_blank"
                rel="noreferrer"
                className="bg-[#3b2417] hover:bg-[#533222] transition-all duration-300 p-3 rounded-xl flex items-center justify-center text-white"
              >
                <Camera size={20} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61579127274015"
                target="_blank"
                rel="noreferrer"
                className="bg-[#3b2417] hover:bg-[#533222] transition-all duration-300 p-3 rounded-xl flex items-center justify-center text-white"
              >
                <Share2 size={20} />
              </a>
              <a
                href="https://tiktok.com/@delicias_do_jose.1"
                target="_blank"
                rel="noreferrer"
                className="bg-[#3b2417] hover:bg-[#533222] transition-all duration-300 p-3 rounded-xl flex items-center justify-center text-white"
              >
                <Music size={20} />
              </a>
              <a
                href="https://wa.me/5521991382676"
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