import React from "react";
// import { images } from "../constants";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import stable from "../constants/Stable";
import { useQuery } from "@tanstack/react-query";
import { getImgBanner } from "../services/bannerAPI";

export const Banner = () => {
  const { data: dataBanner, isLoading } = useQuery({
    queryFn: () => getImgBanner({}),
    queryKey: ["banner"],
    onSuccess: (data) => {},
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  const options = {
    autoplay: true,
    responsiveClass: true,
    dots: false,
    // nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  return (
    <section className="z-10">
      {!isLoading && (
        <OwlCarousel
          className="owl-theme owl_productNew"
          loop
          margin={15}
          {...options}
        >
          {dataBanner
            ?.filter((item) => item.type == "slide")
            .map((item, index) => (
              <div key={index} className="item">
                <img
                  className="object-center"
                  src={stable.UPLOAD_THUMBS_BANNER + item.photo}
                  alt=""
                />
              </div>
            ))}
        </OwlCarousel>
      )}
    </section>
  );
};
