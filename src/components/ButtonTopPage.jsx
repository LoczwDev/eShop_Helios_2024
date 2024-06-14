import React, { useState, useEffect } from "react";
import { TbArrowNarrowUp } from "react-icons/tb";
import { Link } from "react-router-dom";

export const ButtonTopPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${
        isVisible ? "bottom-[160px] opacity-100" : "bottom-0 opacity-0"
      } flex justify-center duration-500 ease-in-out transition-all py-2 px-1 w-9 h-10 text-2xl bg-[#fff] rounded-full shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] text-black hover:text-brown fixed  lg:mr-9 lg:right-6 right-1  m-0 z-[999] `}
    >
      <button onClick={handleScrollToTop}>
        <TbArrowNarrowUp />
      </button>
    </div>
  );
};
