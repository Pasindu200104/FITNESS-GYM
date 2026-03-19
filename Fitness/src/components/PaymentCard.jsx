import React from "react";
import toast from "react-hot-toast";

const PaymentCard = ({
  title,
  price,
  interval,
  description,
  allFeatures = [],
  availability = [],
}) => {

  const developing = (e) =>{
    e.preventDefault();
    toast.error("This feature is under development");
    return;
  }

  return (
    <div className="card w-full bg-cusgray text-cuswhite shadow-sm p-4 rounded-lg border-4 border-transparent hover:border-cusyellow transition-all duration-150">
      <div className="card-body">
        <div className="flex justify-center">
          <span className="text-3xl font-bold uppercase text-center">
            {title}
          </span>
        </div>
        <div className="flex justify-center mt-3">
          <span className="text-3xl font-bold text-center text-cusyellow">
            ${price}{" "}
            <span className="text-cuswhite text-sm font-light">{interval}</span>
          </span>
        </div>
        <div className="flex justify-center mt-5 mb-5">
          <p className="text-sm text-center px-2">{description}</p>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs p-4">
          {allFeatures.map((feature, index) => {
            const isAvailable = availability[index];
            return (
              <li
                key={index}
                className={`flex items-start gap-2 ${isAvailable ? "" : "opacity-50"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 mt-1 ${isAvailable ? "text-success" : "text-gray-400"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className={isAvailable ? "" : "line-through"}>
                  {feature}
                </span>
              </li>
            );
          })}
        </ul>
        <div className="mt-6 p-4">
          <button onClick={developing} className="btn bg-cusyellow text-cuswhite hover:bg-cusyellow/70 font-bold py-2 rounded-lg w-full">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
