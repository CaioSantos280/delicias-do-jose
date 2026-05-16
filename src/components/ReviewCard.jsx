import React from "react";

export default function ReviewCard({ review, onClick }) {
  return (
    <div
      onClick={() => onClick(review)}
      className="cursor-pointer group rounded-2xl overflow-hidden bg-[#2d1a12] hover:scale-[1.02] transition-all duration-300"
    >
      <img
        src={review.image}
        alt="Avaliação de cliente"
        className="w-full h-64 object-cover group-hover:opacity-90"
      />

      <div className="p-4">
        <p className="text-sm text-[#cdb7a2]">
          {review.name || "Cliente satisfeito"}
        </p>
      </div>
    </div>
  );
}