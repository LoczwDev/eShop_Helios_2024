import React from "react";
import { GoArrowRight } from "react-icons/go";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Articles } from "./Articles";
import { ViewAll } from "../../../components/ViewAll";
import { ArticlesNews } from "./ArticlesNews";

export const NewsContainer = ({ className, data, isLoading }) => {
  // const data = [
  //   {
  //     img: "https://bizweb.dktcdn.net/100/508/659/articles/vipx.jpg?v=1705977539800",
  //     time: "Thứ Ba ,23/01/2024",
  //     title: "Đồng hồ Vacheron Constantin ra mắt phiên bản màu mới",
  //   },
  //   {
  //     img: "https://bizweb.dktcdn.net/100/508/659/articles/tourbilon.jpg?v=1705977463793",
  //     time: "Thứ Ba ,23/01/2024",
  //     title: "Đồng hồ nữ Vacheron Constantin đầu tiên gắn tourbillon",
  //   },
  //   {
  //     img: "https://bizweb.dktcdn.net/100/508/659/articles/vipx.jpg?v=1705977539800",
  //     time: "Thứ Ba ,23/01/2024",
  //     title:
  //       "Vacheron Constantin giới thiệu 5 mẫu Overseas tại triển lãm đồng hồ",
  //   },
  //   {
  //     img: "https://bizweb.dktcdn.net/100/508/659/articles/vip.jpg?v=1705977286493",
  //     time: "Thứ Ba ,23/01/2024",
  //     title: "Loạt đồng hồ trang sức của Piaget tại Watches & Wonders 2023",
  //   },
  //   {
  //     img: "https://bizweb.dktcdn.net/100/508/659/articles/vw.jpg?v=1705977122597",
  //     time: "Thứ Ba ,23/01/2024",
  //     title: "5 mẫu Chopard đồng hành cuộc đua xe cổ ở Italy",
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
      <div className="w-full">
        <ViewAll subtitle={"Tin mới cập nhật"} />
        {!isLoading && (
          <OwlCarousel
            className="owl-theme owl_productNew"
            loop
            margin={15}
            {...options}
          >
            {data?.map((item) => (
              <ArticlesNews
                data={item}
                key={item.title}
                className={"w-full"}
                displayContent={true}
                check={false}
              />
            ))}
          </OwlCarousel>
        )}
      </div>
    </section>
  );
};
