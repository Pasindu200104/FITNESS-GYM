import React, { useEffect, useRef, useState } from "react";

const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible && !hasAnimated) {
        setHasAnimated(true);
        let startTime = null;
        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }

      if (!isVisible) {
        setHasAnimated(false); // reset when out of view
        setCount(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check on mount too

    return () => window.removeEventListener("scroll", handleScroll);
  }, [end, duration, hasAnimated]);

  return { count, elementRef };
};

const DetailCard = ({ number, text }) => {
    const numericValue = parseInt(number);
  const { count, elementRef } = useCountUp(numericValue);

  return (
    <div ref={elementRef} className="card w-64 bg-cusgray rounded-xl p-2 py-2 mx-auto card-xl shadow-sm">
      <div className="card-body">
         <h2 className="card-title text-cusyellow text-5xl font-bold">
           {count}+
        </h2>
        <p className="text-sm font-bold text-cuswhite">{text}</p>
      </div>
    </div>
  );
};

export default DetailCard;
