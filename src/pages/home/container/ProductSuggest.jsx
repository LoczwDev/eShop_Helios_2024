import React from "react";
import { GoArrowRight } from "react-icons/go";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Articles } from "./Articles";
import { ViewAll } from "../../../components/ViewAll";
export const ProductSuggest = ({
  className,
  dataProductSuggest,
  isLoading,
}) => {
  
  const options = {
    autoplay: false,
    responsiveClass: true,

    responsive: {
      0: {
        items: 2,
        dots: true,
        nav: false,
      },
      600: {
        items: 5,
        dots: false,
        nav: true,
      },
      1000: {
        items: 5,
        dots: false,
        nav: true,
      },
    },
  };

  return (
    <section className={`${className}`}>
      <div className="w-full">
        <ViewAll subtitle={"Gợi ý cho bạn"} />
        {!isLoading && (
          <OwlCarousel
            className="owl-theme owl_productNew"
            loop
            margin={15}
            {...options}
          >
            {dataProductSuggest?.map((item, index) => (
              <Articles
                className={"border border-[#ebebeb]"}
                data={item}
                key={index}
              />
            ))}
          </OwlCarousel>
        )}
      </div>
    </section>
  );
};
