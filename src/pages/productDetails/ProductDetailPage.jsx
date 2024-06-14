import React, { useEffect, useState } from "react";
import { MainLayout } from "../../components/MainLayout";
import { BreadCrumbs } from "../../components/BreadCrumbs";
import { SlidePhotoProduct } from "./container/SlidePhotoProduct";
import { InfoProduct } from "./container/InfoProduct";
import { TabsInfo } from "./container/TabsInfo";
import { InfoExtra } from "./container/InfoExtra";
import { ProductRelate } from "./container/ProductRelate";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { getPhotoGallery, getProductById } from "../../services/productAPI";

export const ProductDetailPage = () => {
  const [breadCrumbsData, setBreadCrumbsData] = useState([]);
  const { productId } = useParams();
  const { data: dataProductId, isLoading } = useQuery({
    queryFn: () => getProductById({ productId }),
    queryKey: ["productById", productId],
    onSuccess: (data) => {},
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  console.log(dataProductId, "dataProductId");
  const { data: dataPhotoGallery, isLoading: isLoadingGallery } = useQuery({
    queryFn: () => getPhotoGallery({ productId }),
    queryKey: ["photoGallery", productId],
    onSuccess: (data) => {},
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  useEffect(() => {
    setBreadCrumbsData([
      {
        name: "Trang Chủ",
        link: "/",
      },
      {
        name: "Sản phẩm",
        link: "/products",
      },
      {
        name: `${
          dataProductId?.tenvi ? dataProductId?.tenvi : "Chưa có thông tin"
        }`,
        link: `/products/${dataProductId?.id ? dataProductId?.id : "/"}`,
      },
    ]);
  }, [dataProductId, isLoading]);
  return (
    <MainLayout>
      {dataPhotoGallery?.length <= 0 || !dataProductId ? (
        <section className="max-w-6xl mx-auto">
          <BreadCrumbs data={breadCrumbsData} />
          <div className="my-10 w-full text-center py-2.5 bg-[#fff3cd] border border-[#ffeeba] text-[#856404] text-base px-10 font-medium ">
            <p>Sản phẩm chưa được cập nhật</p>
          </div>
        </section>
      ) : (
        <section className="max-w-6xl mx-auto">
          <article>
            <BreadCrumbs data={breadCrumbsData} />
            <div className="flex lg:flex-row md:flex-row flex-col justify-between gap-x-5">
              <SlidePhotoProduct
                data={dataPhotoGallery}
                isLoading={isLoadingGallery}
              />
              <InfoProduct data={dataProductId} isLoading={isLoading} />
            </div>
          </article>
          <article className="flex lg:flex-row md:flex-row flex-col justify-between gap-x-5 my-10">
            {!isLoadingGallery && dataPhotoGallery && dataProductId && (
              <TabsInfo
                className={"lg:w-2/3 md:w-2/3 w-full"}
                data={dataProductId}
                isLoading={isLoading}
                datavideo={dataPhotoGallery}
              />
            )}

            <InfoExtra className={"lg:w-1/3 md:w-1/3 w-full"} />
          </article>
          <article className="my-10">
            <ProductRelate data={dataProductId} isLoading={isLoading} />
          </article>
        </section>
      )}
    </MainLayout>
  );
};
