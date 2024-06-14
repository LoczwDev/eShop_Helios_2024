import React from "react";
import { ViewAll } from "../../../components/ViewAll";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Articles } from "./Articles";
import { BsPlusLg } from "react-icons/bs";

export const ProductHight = ({ className, dataProductHight, isLoading }) => {
  // const dataProductHight = [
  //   {
  //     title: "Đồng Hồ Hublot Big Bang One",
  //     img: "https://bizweb.dktcdn.net/thumb/medium/100/508/659/products/dong-ho-hublot-big-bang-ceramic-blue-diamonds-38mm-361-cm-7170-lr-1204-4-011d76a7-9a8a-480f-af6c-74cdec69fafe.jpg?v=1705932841980",
  //     priceOrigin: "49.900.000₫",
  //     priceVoucher: "46.000.000₫",
  //     voucher: "8%",
  //   },
  //   {
  //     title: "Đồng Hồ Zenith Chronomaster Sport",
  //     img: "https://bizweb.dktcdn.net/thumb/medium/100/508/659/products/zenith-chronomaster-open-033300360421c822-994207-800x.webp?v=1705932477450",
  //     priceOrigin: "28.990.000₫",
  //     priceVoucher: "24.500.000₫",
  //     voucher: "15%",
  //   },
  //   {
  //     title: "Đồng Hồ Rolex Day-Date 36",
  //     img: "https://bizweb.dktcdn.net/thumb/medium/100/508/659/products/rolex-day-date-36-everose-gold-eisenkiesel-roman-diamond-dial-128235-full-1-1.webp?v=1705932091343",
  //     priceOrigin: "79.900.000₫",
  //     priceVoucher: "79.000.000₫",
  //     voucher: "1%",
  //   },
  //   {
  //     title: "Patek Philippe Complications 5961P-001",
  //     img: "https://bizweb.dktcdn.net/thumb/medium/100/508/659/products/rose-gold-ladies-complications-38-mm.jpg?v=1705931789290",
  //     priceOrigin: "88.000.000₫",
  //     priceVoucher: "75.000.000₫",
  //     voucher: "15%",
  //   },
  //   {
  //     title: "Đồng Hồ Patek Philippe Complications",
  //     img: "https://bizweb.dktcdn.net/thumb/medium/100/508/659/products/patek-philippe-compications-5205r-011-rose-gold-moon-phases-green-last-edition.webp?v=1705931610183",
  //     priceOrigin: "99.000.000₫",
  //     priceVoucher: "96.000.000₫",
  //     voucher: "3%",
  //   },
  //   {
  //     title: "Đồng Hồ Hublot Big Bang",
  //     img: "https://bizweb.dktcdn.net/thumb/medium/100/508/659/products/511-ox-1181-lr.jpg?v=1705929803450",
  //     priceOrigin: "49.900.000₫",
  //     priceVoucher: "46.000.000₫",
  //     voucher: "8%",
  //   },
  // ];
  const options = {
    autoplay: false,
    responsiveClass: true,
    // dots: false,
    // nav: true,
    responsive: {
      0: {
        items: 2,
        dots: true,
        nav: false,
      },
      600: {
        items: 4,
        dots: false,
        nav: true,
      },
      1000: {
        items: 4,
        dots: false,
        nav: true,
      },
    },
  };
  return (
    <section className={`${className}`}>
      <div>
        <ViewAll subtitle={"Đồng hồ cao cấp"} />
      </div>
      <div className="relative">
        <div className="lg:w-[25%] md:w-[40%] w-full">
          <img
            className="w-full h-full"
            src="https://bizweb.dktcdn.net/100/508/659/themes/939030/assets/product_banner_01.jpg?1710404714890"
            alt=""
          />
        </div>
        {!isLoading && (
          <div className="lg:absolute md:absolute top-0 lg:w-[80%] md:w-[80%] w-full right-0">
            <OwlCarousel
              className="owl-theme py-5 owl_productNew"
              loop
              margin={15}
              {...options}
            >
              {dataProductHight?.map((item, index) => (
                <Articles className={"border"} data={item} key={index} />
              ))}
            </OwlCarousel>
          </div>
        )}
      </div>
    </section>
  );
};
