import React from "react";
import { GoArrowRight } from "react-icons/go";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Articles } from "./Articles";
import { ViewAll } from "../../../components/ViewAll";

export const ProductAccess = ({ className, dataProductAccess, isLoading }) => {
  // const dataProductAccess = [
  //   {
  //     title: "Dây da MVW mặt 44mm M07-02-44",
  //     img: "https://bizweb.dktcdn.net/thumb/medium/100/508/659/products/day-dong-ho-size-40mm-m02-02-40-thumbnew-600x600.jpg?v=1705973725617",
  //     priceOrigin: "",
  //     priceVoucher: "89.000₫",
  //     voucher: "",
  //   },
  //   {
  //     title: "Dây silicone MVW mặt 40mm M01-01-40",
  //     img: "https://bizweb.dktcdn.net/thumb/medium/100/508/659/products/day-dong-ho-size-44mm-m02-03-44-thumbnew-600x600.jpg?v=1705973665123",
  //     priceOrigin: "120.000₫",
  //     priceVoucher: "70.000₫",
  //     voucher: "42%",
  //   },
  //   {
  //     title: "Dây da đồng hồ 12mm L012-01-12",
  //     img: "https://bizweb.dktcdn.net/thumb/medium/100/508/659/products/day-da-dong-ho-size-22mm-xanh-duong-ls041-02-thumbnew-600x600.jpg?v=1705973454757",
  //     priceOrigin: "680.000₫",
  //     priceVoucher: "499.000₫",
  //     voucher: "27%",
  //   },
  //   {
  //     title: "Dây da đồng hồ 18mm L015-04-18",
  //     img: "https://bizweb.dktcdn.net/thumb/medium/100/508/659/products/day-da-dong-ho-l010-03-16-nau-size-16mm-thumbnew-600x600.jpg?v=1705973383907",
  //     priceOrigin: "",
  //     priceVoucher: "256.000₫",
  //     voucher: "",
  //   },
  //   {
  //     title: "Dây da đồng hồ 18mm L013-04-18",
  //     img: "https://bizweb.dktcdn.net/thumb/medium/100/508/659/products/day-da-dong-ho-l018-04-18-nau-bo-size-18mm-thumbnew-600x600.jpg?v=1705973309657",
  //     priceOrigin: "190.000₫",
  //     priceVoucher: "135.000₫",
  //     voucher: "29%",
  //   },
  //   {
  //     title: "Dây da đồng hồ 18mm SL101-01 Nâu",
  //     img: "https://bizweb.dktcdn.net/thumb/medium/100/508/659/products/35139bb99d34edc76793dd41ba3a9146-jpg-960x960q80-jpg.webp?v=1705973097183",
  //     priceOrigin: "250.000₫",
  //     priceVoucher: "109.000₫",
  //     voucher: "56%",
  //   },
  // ];
  const options = {
    autoplay: false,
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
    <section className={`${className} mt-20`}>
      <div className="w-full">
        <ViewAll subtitle={"Phụ kiện hot"} />
        {!isLoading && (
          <OwlCarousel
            className="owl-theme owl_productNew"
            loop
            margin={15}
            nav
            {...options}
          >
            {dataProductAccess
              ?.filter((item) => item.id_list == 111)
              .map((item, index) => (
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
