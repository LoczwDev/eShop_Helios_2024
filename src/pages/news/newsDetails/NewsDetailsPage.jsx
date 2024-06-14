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

export const NewsDetailsPage = () => {
  const [breadCrumbsData, setBreadCrumbsData] = useState([]);
  const { newsId } = useParams();
  const { data: dataNewsById, isLoading } = useQuery({
    queryFn: () => getNewsById({ newsId }),
    queryKey: ["newsDetails", newsId],
    onSucssec: (data) => {},
    onError: (error) => {
      console.log(error);
    },
  });
  console.log(dataNewsById, "dataNewsById");
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
        name: "Tin tức",
        link: "/news",
      },
      {
        name: `${dataNewsById?.tenvi}`,
        link: `/news/${dataNewsById?.id}`,
      },
      //   {
      //     name: `${dataNews.title}`,
      //     link: `/news`,
      //   },
    ]);
  }, [dataNewsById]);
  return (
    <MainLayout>
      <section className="max-w-6xl mx-auto">
        <article>
          <BreadCrumbs data={breadCrumbsData} />
          <div className="flex lg:flex-row md:flex-row flex-col-reverse gap-x-2 justify-between">
            {!isLoadingNews && (
              <FilterToolNews
                className={"lg:w-1/4 md:w-1/4 w-full"}
                data={dataNews}
              />
            )}

            {!isLoading && (
              <div className="lg:w-3/4 md:w-3/4 w-full">
                <span className="block text-hard">
                  {new Date(dataNewsById.ngaytao *1000).toLocaleDateString("vi-VN", {
                    weekday: "short",
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <div className="my-5">
                  <h1 className="text-3xl font-bold text-black">
                    {dataNewsById?.tenvi}
                  </h1>
                </div>
                <div>
                  <div
                    className="text-justify"
                    dangerouslySetInnerHTML={{
                      __html: parse(dataNewsById.noidung),
                    }}
                  />
                </div>
                <SocialShare
                  url={encodeURI(window.location.href)}
                  title={encodeURIComponent(dataNewsById?.tenvi)}
                />
                <FormComment />
              </div>
            )}
          </div>
        </article>
      </section>
    </MainLayout>
  );
};
