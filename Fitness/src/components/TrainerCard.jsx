import React from "react";

const TrainerCard = ({ image, name, role }) => {
  return (
    <div className="card w-full max-w-sm shadow-lg overflow-hidden rounded-xl bg-cusgray text-cuswhite transition-transform duration-300 hover:scale-105 hover:border-2 hover:border-cusyellow">
      <figure className="relative h-64 sm:h-72">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top"
        />
      </figure>
      <div className="card-body px-4 py-3">
        <h2 className="text-cuswhite font-bold text-base">{name}</h2>
        <p className="text-cuswhite/70 text-xs mt-1">{role}</p>
      </div>
    </div>
  );
};

export default TrainerCard;
