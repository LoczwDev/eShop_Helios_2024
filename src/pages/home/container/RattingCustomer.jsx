import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FormRatting } from "./formRatting/FormRatting";

export const RattingCustomer = ({ className }) => {
  const options = {
    autoplay: false,
    responsiveClass: true,
    dots: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        dots: false,
        nav: false,
      },
      600: {
        items: 2,
        dots: true,
        nav: true,
      },
      1000: {
        items: 3,
        dots: true,
        nav: true,
      },
    },
  };
  return (
    <section className={`${className} mt-40`}>
      <div>
        <h2 className="text-2xl font-bold my-5 ">Đánh giá từ khách hàng</h2>
      </div>

      <div className="owlRatting">
        <OwlCarousel
          className="owl-theme owl_productNew"
          loop
          margin={15}
          {...options}
        >
          <FormRatting />
          <FormRatting />
          <FormRatting />
          <FormRatting />
        </OwlCarousel>
      </div>
    </section>
  );
};
