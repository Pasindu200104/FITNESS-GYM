import React from "react";
import CountUp from "react-countup";

const DetailCard = ({ number, text }) => {
  const numericValue = parseInt(number);

  return (
    <div className="card w-64 bg-cusgray rounded-xl p-6 mx-auto card-xl shadow-sm">
      <div className="card-body">
         <h2 className="card-title text-cusyellow text-5xl">
          {/* <CountUp start={0} end={numericValue} duration={2} />+ */}
            {number}
        </h2>
        <p className="text-sm font-bold text-cuswhite">{text}</p>
      </div>
    </div>
  );
};

export default DetailCard;
