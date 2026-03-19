import React from "react";

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="relative w-full max-w-md h-[260px] rounded-xl overflow-hidden group cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-cusblack/80 via-cusblack/30 to-transparent" />
      <div className="absolute inset-0 bg-cusblack/50 opacity-0 group:opacity-100 transition-opacity duration-400" />

      <div className="absolute bottom-0 left-0 right-0 p-3 transition-all duration-400 group-hover:-translate-y-2">
        <h3 className="text-cuswhite text-sm font-bold leading-snug">
          {title}
        </h3>
        <p className="text-gray-300 text-xs leading-relaxed line-clamp-4 max-h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100 mt-1">
          {description}
        </p>
      </div>

    </div>
  );
};

export default ServiceCard;
