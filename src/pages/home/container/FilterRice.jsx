import React from "react";
import { ItemFilterRice } from "../../../components/ItemFilterRice";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export const FilterRice = ({ className }) => {
  const options = {
    autoplay: false,
    responsiveClass: true,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 5,
      },
      1000: {
        items: 5,
      },
    },
  };
  const dataFilterRice = [
    {
      id: 1,
      title: "1 Triệu",
      bg: "bg-[#dfe3ee]",
      color: "text-[#375b7e]",
    },
    {
      id: 2,
      title: "2 Triệu",
      bg: "bg-[#d0e9fa]",
      color: "text-[#3e98ce]",
    },
    {
      id: 3,
      title: "5 Triệu",
      bg: "bg-[#fff1d9]",
      color: "text-[#b96669]",
    },
    {
      id: 4,
      title: "10 Triệu",
      bg: "bg-[#f6e5c8]",
      color: "text-[#930d18]",
    },
    {
      id: 5,
      title: "50 Triệu",
      bg: "bg-[#f5f5f5]",
      color: "text-[#092e4d]",
    },
  ];
  return (
    <section className={`${className}`}>
      <div>
        <h1 className="text-2xl font-bold mb-3">Theo khoảng giá</h1>
      </div>
      <OwlCarousel
        className="owl-theme py-5 owl_productNew"
        margin={10}
        {...options}
      >
        {dataFilterRice?.map((item, index) => (
          <div key={index} className="h-full">
            <ItemFilterRice data={item} />
          </div>
        ))}
      </OwlCarousel>
      {/* <div className="flex items-center justify-between gap-x-3">
        {dataFilterRice?.map((item, index) => (
          <div key={index} className="w-1/5 h-full">
            <ItemFilterRice data={item} />
          </div>
        ))}
      </div> */}
    </section>
  );
};
