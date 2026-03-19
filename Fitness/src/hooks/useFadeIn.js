import { useEffect, useRef, useState } from "react";

const useFadeIn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight - 50 && rect.bottom >= 0;
      if (isInView) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isVisible, elementRef };
};

export default useFadeIn;