import { ChevronRight } from "lucide-react";
import { useState } from "react";

export default function ProductCard({
  product,
  setSelectedProduct,
}) {

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="bg-[#2a1911]/90 border border-[#4a3022] rounded-[32px] overflow-hidden backdrop-blur-md shadow-2xl">

      <div className="relative w-full aspect-[4/5] overflow-hidden">

        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-[#3a2418]" />
        )}

        <img
          src={`/${product.media?.[0]?.src}`}
          alt={product.name}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 ${
            imageLoaded
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        />

      </div>

      <div className="p-6 space-y-4">

        <div className="flex justify-between items-start gap-4">

          <h3 className="text-2xl font-bold">
            {product.name}
          </h3>

          <span className="text-yellow-400 font-bold">
            {product.price}
          </span>

        </div>

        <p className="text-[#cdb7a2]">
          {product.description}
        </p>

        <button
          onClick={() => setSelectedProduct(product)}
          className="w-full bg-yellow-500 text-black py-4 rounded-2xl font-bold flex items-center justify-center gap-2"
        >
          Ver Mais <ChevronRight size={18} />
        </button>

      </div>
    </div>
  );
}