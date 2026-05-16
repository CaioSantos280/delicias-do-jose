import { Phone } from "lucide-react";
import { motion } from "framer-motion";

import { STORE_CONFIG } from "../config/store";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Hero() {
  return (
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
              className="bg-yellow-500 text-black px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-2xl w-full sm:w-auto"
            >
              <Phone size={20} />
              Chamar no WhatsApp
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
  );
}