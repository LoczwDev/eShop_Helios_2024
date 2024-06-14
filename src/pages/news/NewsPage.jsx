import React, { useEffect, useState } from "react";
import { MainLayout } from "../../components/MainLayout";
import { Breadcrumb } from "antd";
import { FilterToolNews } from "./container/FilterToolNews";
import { ArticlesNews } from "../home/container/ArticlesNews";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { BreadCrumbs } from "../../components/BreadCrumbs";
import { getPhotoNews } from "../../services/newsAPI";

export const NewsPage = () => {
  const [breadCrumbsData, setBreadCrumbsData] = useState([]);

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
      //   {
      //     name: `${dataNews.title}`,
      //     link: `/news`,
      //   },
    ]);
  }, []);
  return (
    <MainLayout>
      <section className="max-w-6xl mx-auto my-6">
        <article>
          <BreadCrumbs data={breadCrumbsData} />
          <div className="flex lg:flex-row md:flex-row flex-col-reverse gap-x-2 justify-between">
            <FilterToolNews
              className={"lg:w-1/4 md:w-1/4 w-full"}
              data={dataNews}
            />
            {!isLoadingNews && (
              <div className="lg:w-3/4 md:w-3/4 w-full">
                <h2 className="text-2xl font-bold mb-5">Tin Tức</h2>
                <div className="w-full flex items-center justify-between flex-wrap gap-3 ">
                  {dataNews
                    ?.filter((item) => item.type == "tin-tuc")
                    .map((item, index) => (
                      <ArticlesNews
                        key={index}
                        data={item}
                        className={"lg:w-[32%] md:w-[32%] w-full"}
                        displayContent={true}
                        check={true}
                      />
                    ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </section>
    </MainLayout>
  );
};
