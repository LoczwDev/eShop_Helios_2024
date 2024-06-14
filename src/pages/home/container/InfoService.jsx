import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
export const InfoService = ({ className }) => {
  const options = {
    autoplay: false,
    responsiveClass: true,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 1,
        margin: 10
      },
      600: {
        items: 4,
        margin: 30
      },
      1000: {
        items: 4,
        margin: 30
      },
    },
  };
  const dataService = [
    {
      icon: "https://bizweb.dktcdn.net/thumb/compact/100/508/659/themes/939030/assets/thumb_service_1.png?1710404714890",
      title: "5000+ mẫu đồng hồ",
    },
    {
      icon: "https://bizweb.dktcdn.net/thumb/compact/100/508/659/themes/939030/assets/thumb_service_2.png?1710404714890",
      title: "Miễn phí vận chuyển",
    },
    {
      icon: "https://bizweb.dktcdn.net/thumb/compact/100/508/659/themes/939030/assets/thumb_service_3.png?1710404714890",
      title: "Thanh toán COD, Online",
    },
    {
      icon: "https://bizweb.dktcdn.net/thumb/compact/100/508/659/themes/939030/assets/thumb_service_4.png?1710404714890",
      title: "Quà tặng thành viên",
    },
  ];
  return (
    <section className={`${className}`}>
      <div className="flex items-center justify-between">
        <OwlCarousel className="owl-theme py-5 owl_productNew" {...options}>
          {dataService?.map((item, index) => (
            <div
              key={index}
              className={` flex items-center gap-x-2 item_infoService ${
                index != 3 && "border-r"
              }`}
            >
              <img src={item.icon} className="max-w-12" alt="" />
              <span>{item.title}</span>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};
