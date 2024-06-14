import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { stable } from "../../../constants";

export const BrandProduct = ({ className, dataImgBrand, isLoading }) => {
  // const dataImgBrand = [
  //   "https://bizweb.dktcdn.net/thumb/compact/100/508/659/themes/939030/assets/img_brand_1.jpg?1710404714890",
  //   "https://bizweb.dktcdn.net/thumb/compact/100/508/659/themes/939030/assets/img_brand_2.jpg?1710404714890",
  //   "https://bizweb.dktcdn.net/thumb/compact/100/508/659/themes/939030/assets/img_brand_3.jpg?1710404714890",
  //   "https://bizweb.dktcdn.net/thumb/compact/100/508/659/themes/939030/assets/img_brand_4.jpg?1710404714890",
  //   "https://bizweb.dktcdn.net/thumb/compact/100/508/659/themes/939030/assets/img_brand_5.jpg?1710404714890",
  //   "https://bizweb.dktcdn.net/thumb/compact/100/508/659/themes/939030/assets/img_brand_6.jpg?1710404714890",
  //   "https://bizweb.dktcdn.net/thumb/compact/100/508/659/themes/939030/assets/img_brand_7.jpg?1710404714890",
  //   "https://bizweb.dktcdn.net/thumb/compact/100/508/659/themes/939030/assets/img_brand_8.jpg?1710404714890",
  // ];
  const options = {
    autoplay: true,
    responsiveClass: true,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 2,
        dots: true,
        nav: false,
      },
      600: {
        items: 6,
        dots: false,
        nav: true,
      },
      1000: {
        items: 6,
        dots: false,
        nav: true,
      },
    },
  };

  return (
    <section className={`${className}`}>
      <div>
        <h2 className="text-3xl font-bold text-center">Thương hiệu nổi bật</h2>
        <div className="my-3">
          {!isLoading && (
            <OwlCarousel
              className="owl-theme owl_productNew"
              loop
              margin={15}
              {...options}
            >
              {dataImgBrand
                ?.filter((item) => item.noibat == 1)
                .map((item, index) => (
                  <div className="item" key={index}>
                    <div className="border border-[#F5F6F8] hover:shadow-lg rounded-xl p-3">
                      <img
                        src={stable.UPLOAD_THUMBS_PRODUCT + item.photo}
                        alt=""
                      />
                    </div>
                  </div>
                ))}
            </OwlCarousel>
          )}
        </div>
      </div>
    </section>
  );
};
