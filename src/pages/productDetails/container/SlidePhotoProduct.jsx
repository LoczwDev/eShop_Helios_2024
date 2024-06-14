import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { stable } from "../../../constants";

export const SlidePhotoProduct = ({ data, isLoading }) => {
  const options = {
    autoplay: false,
    responsiveClass: true,
    dots: false,

    responsive: {
      0: {
        items: 2,
        nav: false,
        dots: true,
      },
      600: {
        items: 5,
      },
      1000: {
        items: 5,
        nav: true,
        dots: true,
      },
    },
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const [tempIndex, setTempIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(tempIndex);
  }, [tempIndex]);

  const handleThumbnailClick = (index) => {
    setTempIndex(index);
  };

  // const images = [
  //   "https://bizweb.dktcdn.net/thumb/large/100/508/659/products/rolex-day-date-36-everose-gold-eisenkiesel-roman-diamond-dial-128235-full-1-1.webp?v=1705932091343",
  //   "https://bizweb.dktcdn.net/thumb/large/100/508/659/products/2022-09-02-17-33-30-04gup-800x.webp?v=1705932091343",
  //   "https://bizweb.dktcdn.net/thumb/large/100/508/659/products/rolex-day-date-36-18378-champagne-diamond-1.jpg?v=1705932091343",
  //   "https://bizweb.dktcdn.net/thumb/large/100/508/659/products/used-rolex-president-128238-diamond-dial-sku159674.webp?v=1705932091343",
  // ];

  return (
    <section className="w-full">
      {!isLoading && data && (
        <div className="w-full">
          <Carousel
            selectedItem={activeIndex}
            onChange={setActiveIndex}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            emulateTouch={true}
            swipeable={true}
            dynamicHeight={true}
          >
            {data
              .filter((item) => item.val == "san-pham")
              .map((image, index) => (
                <div key={index} className="border">
                  <img
                    className="object-cover"
                    src={stable.UPLOAD_THUMBS_PRODUCT + image.photo}
                    alt={`Image ${index}`}
                  />
                </div>
              ))}
          </Carousel>
          <OwlCarousel
            className="owl-theme p-4 owl_productNew"
            margin={15}
            {...options}
          >
            {data
              .filter((item) => item.val == "san-pham")
              .map((image, index) => (
                <div
                  key={index}
                  className={`thumbnail border ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <img
                    src={stable.UPLOAD_THUMBS_PRODUCT + image.photo}
                    alt={`Thumbnail ${index} object-cover `}
                    style={{
                      border:
                        activeIndex === index ? "2px solid black" : "none",
                    }}
                  />
                </div>
              ))}
          </OwlCarousel>
        </div>
      )}
    </section>
  );
};
