import React from "react";
import { MainLayout } from "../../components/MainLayout";
import { Banner } from "../../components/Banner";
import { ProductNew } from "./container/ProductNew";
import { ProductOutstanding } from "./container/ProductOutstanding";
import { ProductSelling } from "./container/ProductSelling";
import { FilterRice } from "./container/FilterRice";
import { ProductType } from "./container/ProductType";
import { Voucher } from "./container/Voucher";
import { GallaryContainer } from "./container/GallaryContainer";
import { TabsProductSelling } from "./container/Tabs/TabsProductSelling";
import { Tabs } from "./container/Tabs/Tabs";
import { BrandExtra } from "./container/BrandExtra";
import { ProductHight } from "./container/ProductHight";
import { RattingCustomer } from "./container/RattingCustomer";
import { BrandProduct } from "./container/BrandProduct";
import { InfoService } from "./container/InfoService";
import { NewsContainer } from "./container/NewsContainer";
import { ProductAccess } from "./container/ProductAccess";
import { TestPage } from "../TestPage/TestPage";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ProductSuggest } from "./container/ProductSuggest";
import { ModalCart } from "../../components/cart/ModalCart";
import { ModalProductDetails } from "../../components/product/ModalProductDetails";
import { getAllBrand, getAllProduct } from "../../services/productAPI";
import { getAllCate } from "../../services/categoryAPI";
import { getPhotoNews } from "../../services/newsAPI";

export const HomePage = () => {
  const { data: dataProductNews, isLoading: isLoadingProductNew } = useQuery({
    queryFn: () => getAllProduct({}),
    queryKey: ["productAll"],
    onSuccess: (data) => {},
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  const { data: dataOuts, isLoading: isLoadingOuts } = useQuery({
    queryFn: () => getAllCate({}),
    queryKey: ["category"],
    onSuccess: (data) => {},
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  const { data: dataNewsPhoto, isLoading: isLoadingNews } = useQuery({
    queryFn: () => getPhotoNews({}),
    queryKey: ["newsPhoto"],
    onSuccess: (data) => {},
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  const { data: dataProductBrand, isLoading: isLoadingBrand } = useQuery({
    queryFn: () => getAllBrand({}),
    queryKey: ["brand"],
    onSuccess: (data) => {
      setDataBrand(data);
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  return (
    <MainLayout>
      <Banner />
      <ProductNew
        className={"max-w-6xl mx-auto my-10"}
        dataProductNews={dataProductNews}
        isLoading={isLoadingProductNew}
      />
      <ProductOutstanding dataOuts={dataOuts} isLoading={isLoadingOuts} />
      <ProductSelling
        className={"max-w-6xl mx-auto my-10"}
        dataProductSelling={dataProductNews}
        isLoading={isLoadingProductNew}
      />
      <FilterRice className={"max-w-6xl mx-auto my-10"} />
      <ProductType />
      {/* <ProductSelling className={"max-w-6xl mx-auto my-10"} /> */}
      <ProductSuggest
        className={"max-w-6xl mx-auto my-10"}
        dataProductSuggest={dataProductNews}
        isLoading={isLoadingNews}
      />
      <Voucher
        className={"max-w-6xl mx-auto my-10"}
        dataNewsPhoto={dataNewsPhoto?.filter((item) => item.noibat != 1)}
        isLoading={isLoadingNews}
      />
      <GallaryContainer
        className={"max-w-6xl mx-auto my-10"}
        dataProductBrand={dataProductBrand}
        isLoading={isLoadingBrand}
      />
      <ProductAccess
        className={"max-w-6xl mx-auto my-10"}
        dataProductAccess={dataProductNews}
        isLoading={isLoadingProductNew}
      />
      <Tabs
        className={"max-w-6xl mx-auto my-10"}
        dataProductNews={dataProductNews}
        isLoading={isLoadingNews}
      />
      <BrandExtra className={"max-w-6xl mx-auto my-10"} />
      <ProductHight
        className={"max-w-6xl mx-auto my-10"}
        dataProductHight={dataProductNews}
        isLoading={isLoadingProductNew}
      />
      <RattingCustomer className={"max-w-6xl mx-auto my-10"} />
      <BrandProduct
        className={"max-w-6xl mx-auto my-10"}
        dataImgBrand={dataProductBrand}
        isLoading={isLoadingBrand}
      />
      <NewsContainer
        data={dataNewsPhoto?.filter((item) => item.noibat == 1)}
        isLoading={isLoadingNews}
        className={"max-w-6xl mx-auto my-10"}
      />
      <InfoService className={"max-w-6xl mx-auto my-10"} />
      <div className="">
        <ModalCart />
      </div>
      {/* <label htmlFor="my_modal_6" className="btn">
        open modalsasasa
      </label> */}
      {/* <ModalProductDetails /> */}
    </MainLayout>
  );
};
