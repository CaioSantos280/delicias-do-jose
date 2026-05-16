import { ChevronRight } from "lucide-react";

export default function ProductCard({
  product,
  setSelectedProduct,
}) {
  return (
    <div className="bg-[#2a1911]/90 border border-[#4a3022] rounded-[32px] overflow-hidden backdrop-blur-md shadow-2xl">

      <img
        src={`/${product.media?.[0]?.src}`}
        alt={product.name}
        className="w-full aspect-[4/5] object-cover"
      />

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