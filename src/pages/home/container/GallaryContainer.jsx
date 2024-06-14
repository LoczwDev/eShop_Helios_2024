import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { stable } from "../../../constants";
export const GallaryContainer = ({
  className,
  dataProductBrand,
  isLoading,
}) => {
  // const data = [
  //   "https://bizweb.dktcdn.net/100/508/659/collections/bb002.jpg?v=1705922985520",
  //   "https://bizweb.dktcdn.net/100/508/659/collections/bxn.png?v=1705922993997",
  //   "https://bizweb.dktcdn.net/100/508/659/collections/hhh.jpg?v=1705923854737",
  //   "https://bizweb.dktcdn.net/100/508/659/collections/rl.jpg?v=1705924103557",
  // ];
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
        items: 4,
      },
      1000: {
        items: 4,
      },
    },
  };
  return (
    <section className={`${className}`}>
      <div className="w-full bg_gallary lg:h-[400px] h-[300px] rounded-lg lg:py-48 py-32 lg:px-14 px-3">
        <div className="z-20 text-white">
          <h2 className="font-bold text-3xl text-nowrap">BỘ SƯU TẬP CAO CẤP</h2>
          <a
            href="#"
            className="no-underline hover:underline hover:text-[#930d18] duration-200"
          >
            Xem tất cả
          </a>
        </div>
        {!isLoading && (
          <OwlCarousel
            className="owl-theme py-5 owl_productNew"
            margin={15}
            {...options}
          >
            {dataProductBrand
              ?.filter((item) => item.noibat == 0)
              .map((item, index) => (
                <div key={index}>
                  <img
                    className="rounded-lg"
                    src={stable.UPLOAD_THUMBS_PRODUCT + item.photo}
                    alt=""
                  />
                </div>
              ))}
          </OwlCarousel>
        )}
      </div>

      {/* <div className="flex justify-between gap-x-2 items-center w-full px-10 -my-24 mb-10">
        <div className="w-1/4">
          <img
            className="rounded-lg"
            src="https://bizweb.dktcdn.net/100/508/659/collections/bb002.jpg?v=1705922985520"
            alt=""
          />
        </div>
        <div className="w-1/4">
          <img
            className="rounded-lg"
            src="https://bizweb.dktcdn.net/100/508/659/collections/bxn.png?v=1705922993997"
            alt=""
          />
        </div>
        <div className="w-1/4">
          <img
            className="rounded-lg"
            src="https://bizweb.dktcdn.net/100/508/659/collections/hhh.jpg?v=1705923854737"
            alt=""
          />
        </div>
        <div className="w-1/4">
          <img
            className="rounded-lg"
            src="https://bizweb.dktcdn.net/100/508/659/collections/rl.jpg?v=1705924103557"
            alt=""
          />
        </div>
      </div> */}
    </section>
  );
};
