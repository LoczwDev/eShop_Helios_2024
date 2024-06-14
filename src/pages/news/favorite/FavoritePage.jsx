import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainLayout } from "../../../components/MainLayout";
import { BreadCrumbs } from "../../../components/BreadCrumbs";
import { FilterToolNews } from "../container/FilterToolNews";
import toast from "react-hot-toast";
import parse from "html-react-parser";
import { SocialShare } from "../container/SocialShare";
import { FormComment } from "../container/FormComment";
import { getNewsById, getPhotoNews } from "../../../services/newsAPI";
import { Articles } from "../../home/container/Articles";

export const FavoritePage = () => {
  const [breadCrumbsData, setBreadCrumbsData] = useState([]);
  const [dataFavorite, setDataFavorite] = useState(
    JSON.parse(localStorage.getItem("favorite")) || []
  );
  const { data: dataNews, isLoading: isLoadingNews } = useQuery({
    queryFn: () => getPhotoNews({}),
    queryKey: ["news"],
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
        name: "Sản phẩm yêu thích",
        link: `/favorite`,
      },
      //   {
      //     name: `${dataNews.title}`,
      //     link: `/news`,
      //   },
    ]);
  }, []);
  return (
    <MainLayout>
      <section className="max-w-6xl mx-auto">
        <article>
          <BreadCrumbs data={breadCrumbsData} />
          <div className="flex lg:flex-row md:flex-row flex-col-reverse gap-x-3 justify-between">
            {!isLoadingNews && (
              <FilterToolNews
                className={"lg:w-1/4 md:w-1/4 w-full"}
                data={dataNews}
              />
            )}
            <div className="lg:w-3/4 md:w-3/4 w-full">
              <h2 className="text-2xl font-bold mb-5">Sản phẩm yêu thích</h2>
              <div className="w-full flex items-center flex-wrap gap-3 ">
                {dataFavorite.map((item, index) => (
                  <div key={index} className="border rounded w-[23%]">
                    <Articles data={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </section>
    </MainLayout>
  );
};
