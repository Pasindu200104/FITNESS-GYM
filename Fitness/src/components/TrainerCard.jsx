import React from "react";

const TrainerCard = ({ image, name, role }) => {
  return (
    <div className="card w-56 shadow-lg overflow-hidden rounded-xl bg-cusgray text-cuswhite hover-3d">
      <figure className="relative">
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
      <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
    </div>
  );
};

export default TrainerCard;
