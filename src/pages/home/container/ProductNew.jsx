import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Articles } from "./Articles";
import { BsPlusLg } from "react-icons/bs";
import { CountTimeContainer } from "./countTime/CountTimeContainer";
import { Link } from "react-router-dom";

export const ProductNew = ({ className, dataProductNews, isLoading }) => {
 
  const options = {
    autoplay: false,
    responsiveClass: true,
    dots: false,

    responsive: {
      0: {
        items: 2,
        nav: false,
        dots: true,
      },
      600: {
        items: 5,
      },
      1000: {
        items: 5,
        nav: true,
      },
    },
  };
  return (
    <section className={`bg-[#b61615] container rounded-lg ${className} `}>
      <CountTimeContainer />
      {!isLoading && (
        <OwlCarousel
          className="owl-theme p-4 owl_productNew"
          loop
          margin={15}
          {...options}
        >
          {dataProductNews?.map((item, index) => (
            <Articles data={item} key={index} />
          ))}
        </OwlCarousel>
      )}

      <div className="w-full flex justify-center items-center mt-10 pb-3">
        <Link to={"/products"} className="text-white bg-[#2a3f50] hover:bg-[#516f86] border border-[#ffffff] hover:border-[#516f86] text-base h-10 lg:w-[15%] w-[40%] duration-200 flex justify-center items-center gap-x-3">
          Xem tất cả{" "}
          <span>
            <BsPlusLg />
          </span>
        </Link>
      </div>
    </section>
  );
};
