import React from "react";

export default function ReviewCard({ review, onClick }) {
  const initials = review.name
    ? review.name.split(" ").map(n => n[0]).join("").toUpperCase()
    : "C";

  return (
    <div
      onClick={() => onClick(review)}
      className="bg-[#2a1911]/90 border border-[#4a3022] rounded-[32px] overflow-hidden backdrop-blur-md shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
    >
      {/* HEADER */}
      <div className="flex items-center gap-3 p-5 border-b border-[#4a3022]/50">
        <div className="w-10 h-10 rounded-full bg-yellow-500 text-black flex items-center justify-center font-bold">
          {initials}
        </div>

        <div className="flex flex-col">
          <p className="font-semibold text-[#f7efe2] text-sm">
            {review.name || "Cliente satisfeito"}
          </p>
          <p className="text-xs text-[#cdb7a2]">
            ★★★★★
          </p>
        </div>
      </div>

      {/* IMAGE */}
      <div className="relative w-full aspect-[4/5] overflow-hidden">
        <img
          src={review.image}
          alt="Avaliação"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
}