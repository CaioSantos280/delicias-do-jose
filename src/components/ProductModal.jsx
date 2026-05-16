import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProductModal({
  selectedProduct,
  setSelectedProduct,
  handlePedido,
}) {
  return (
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
                      poster={`/${selectedProduct.media?.[0]?.src}`}
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
 );
}