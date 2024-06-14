import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Articles } from "../../home/container/Articles";
import { ViewAll } from "../../../components/ViewAll";
import { getAllProduct } from "../../../services/productAPI";

export const ProductRelate = ({ data, isLoading }) => {
  // console.log(data?.is);
  const { data: dataProductRelate, isLoading: isLoadingProductRelate } =
    useQuery({
      queryFn: () => getAllProduct({}),
      queryKey: ["productAll"],
      onSuccess: (data) => {},
      onError: (error) => {
        toast.error(error.message);
        console.log(error);
      },
    });

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
        items: 4,
        // nav: true,
      },
      1000: {
        items: 5,
        nav: true,
      },
    },
  };
  return (
    <section className={``}>
      <div className="w-full">
        <ViewAll subtitle={"Sản phẩm tương tự"} />
        {!isLoadingProductRelate && !isLoading && (
          <OwlCarousel
            className="owl-theme owl_productNew"
            loop
            margin={15}
            {...options}
          >
            {dataProductRelate
              ?.filter((item) => item.id_list == data?.id_list)
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
