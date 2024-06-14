import React, { useEffect, useState } from "react";
import { MainLayout } from "../../components/MainLayout";
import { BreadCrumbs } from "../../components/BreadCrumbs";
// import { useQuery } from "@tanstack/react-query";
// import { getPolicyNews } from "../../services/newsAPI";
import toast from "react-hot-toast";
import parse from "html-react-parser";
import { MainPolicy } from "./container/MainPolicy";

export const PolicyPage = () => {
  const [breadCrumbsData, setBreadCrumbsData] = useState([]);
  // const { data: dataPolicy, isLoading: isLoadingPolicy } = useQuery({
  //   queryFn: () => getPolicyNews({}),
  //   queryKey: ["policy"],
  //   onSuccess: (data) => {},
  //   onError: (error) => {
  //     toast.error(error.message);
  //     console.log(error);
  //   },
  // });
  useEffect(() => {
    setBreadCrumbsData([
      {
        name: "Trang Chủ",
        link: "/",
      },
      {
        name: "Chính sách bán hàng",
        link: "/policy",
      },
    ]);
  }, []);
  return (
    <MainLayout>
      <section className="max-w-6xl mx-auto">
        <div>
          <BreadCrumbs data={breadCrumbsData} />
          {/* <div>
              {dataPolicy?.map((item, index) => (
                <div key={index}>
                  <h2 className="text-3xl font-bold my-3">{item.title}</h2>
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: parse(item.noidung),
                      }}
                    />
                  </div>
                </div>
              ))}
            </div> */}
          <MainPolicy className={"mb-10"} />
        </div>
      </section>
    </MainLayout>
  );
};
