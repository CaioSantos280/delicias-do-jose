import React from "react";

export default function ReviewCard({ review, onClick }) {
  const initials = review.name
    ? review.name.split(" ").map(n => n[0]).join("").toUpperCase()
    : "C";

  return (
    <div
      onClick={() => onClick(review)}
      className="cursor-pointer rounded-3xl bg-[#2a1812] border border-[#3a241a] overflow-hidden hover:scale-[1.02] transition-all duration-300 shadow-lg"
    >
      {/* HEADER */}
      <div className="flex items-center gap-3 p-4">
        <div className="w-10 h-10 rounded-full bg-yellow-500 text-black flex items-center justify-center font-bold">
          {initials}
        </div>

        <div>
          <p className="font-semibold text-sm text-[#f7efe2]">
            {review.name || "Cliente satisfeito"}
          </p>
          <p className="text-xs text-[#cdb7a2]">★★★★★</p>
        </div>
      </div>

      {/* IMAGE */}
      <div className="px-4 pb-4">
        <div className="rounded-2xl overflow-hidden border border-[#3a241a]">
          <img
            src={review.image}
            alt="Avaliação"
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}