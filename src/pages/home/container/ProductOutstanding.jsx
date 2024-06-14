import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { ArticlesBrand } from "./ArticlesBrand";

export const ProductOutstanding = ({ dataOuts, isLoading }) => {

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
      },
      1000: {
        items: 5,
        dots: false,
        nav: true,
      },
    },
  };
  return (
    <section className="max-w-6xl mx-auto">
      <div>
        <h1 className="text-center font-bold text-2xl">Danh mục nổi bật</h1>
        <div className="my-4">
          {!isLoading && (
            <OwlCarousel
              className="owl-theme owl_productNew"
              loop
              margin={15}
              nav
              {...options}
            >
              {dataOuts
                ?.filter((item) => item.photo != "")
                .map((item, index) => (
                  <ArticlesBrand data={item} key={index} />
                ))}
            </OwlCarousel>
          )}
        </div>
      </div>
    </section>
  );
};
