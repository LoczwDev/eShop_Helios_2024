import React from "react";
import { GoArrowRight } from "react-icons/go";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Articles } from "./Articles";
import { ViewAll } from "../../../components/ViewAll";

export const ProductSelling = ({
  className,
  dataProductSelling,
  isLoading,
}) => {
  // const dataProductSelling = [
  //   {
  //     tenvi: "Đồng Hồ Hublot Big Bang One",
  //     photo: "https://bizweb.dktcdn.net/thumb/medium/100/508/659/products/dong-ho-hublot-big-bang-ceramic-blue-diamonds-38mm-361-cm-7170-lr-1204-4-011d76a7-9a8a-480f-af6c-74cdec69fafe.jpg?v=1705932841980",
  //     gia: "49.900.000₫",
  //     giamoi: "46.000.000₫",
  //     giakm: "8",
  //   },
  //   {
  //     tenvi: "Đồng Hồ Zenith Chronomaster Sport",
  //     photo: "https://bizweb.dktcdn.net/thumb/medium/100/508/659/products/zenith-chronomaster-open-033300360421c822-994207-800x.webp?v=1705932477450",
  //     gia: "28.990.000₫",
  //     giamoi: "24.500.000₫",
  //     giakm: "15",
  //   },
  //   {
  //     tenvi : "Đồng Hồ Rolex Day-Date 36",
  //     photo: "https://bizweb.dktcdn.net/thumb/medium/100/508/659/products/rolex-day-date-36-everose-gold-eisenkiesel-roman-diamond-dial-128235-full-1-1.webp?v=1705932091343",
  //     gia: "79.900.000₫",
  //     giamoi: "79.000.000₫",
  //     giakm: "1",
  //   },
  //   {
  //     tenvi: "Patek Philippe Complications 5961P-001",
  //     photo: "https://bizweb.dktcdn.net/thumb/medium/100/508/659/products/rose-gold-ladies-complications-38-mm.jpg?v=1705931789290",
  //     gia: "88.000.000₫",
  //     giamoi: "75.000.000₫",
  //     giakm: "15",
  //   },
  //   {
  //     tenvi: "Đồng Hồ Patek Philippe Complications",
  //     photo: "https://bizweb.dktcdn.net/thumb/medium/100/508/659/products/patek-philippe-compications-5205r-011-rose-gold-moon-phases-green-last-edition.webp?v=1705931610183",
  //     gia: "99.000.000₫",
  //     giamoi: "96.000.000₫",
  //     giakm: "3",
  //   },
  //   {
  //     tenvi: "Đồng Hồ Hublot Big Bang",
  //     photo: "https://bizweb.dktcdn.net/thumb/medium/100/508/659/products/511-ox-1181-lr.jpg?v=1705929803450",
  //     gia: "49.900.000₫",
  //     giamoi: "46.000.000₫",
  //     giakm: "8",
  //   },
  // ];
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
        <ViewAll subtitle={"Sản phẩm bán chạy"} />
        {!isLoading && (
          <OwlCarousel
            className="owl-theme owl_productNew"
            loop
            margin={15}
            {...options}
          >
            {dataProductSelling?.map((item, index) => (
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
