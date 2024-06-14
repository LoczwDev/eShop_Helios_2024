import React, { useEffect, useState } from "react";
import { MainLayout } from "../../components/MainLayout";
import { BreadCrumbs } from "../../components/BreadCrumbs";

export const NotYetPage = () => {
  const [breadCrumbsData, setBreadCrumbsData] = useState([]);
  useEffect(() => {
    setBreadCrumbsData([
      {
        name: "Trang Chủ",
        link: "/",
      },
      {
        name: "Chưa phát triển",
        link: "/",
      },
    ]);
  }, []);
  return (
    <MainLayout>
      <section className="max-w-6xl mx-auto">
        <BreadCrumbs data={breadCrumbsData} />
        <div className="my-10 w-full text-center py-2.5 bg-[#fff3cd] border border-[#ffeeba] text-[#856404] text-base px-10 font-medium ">
          <p>Lộc giấu tên chưa phát triển page này</p>
        </div>
      </section>
    </MainLayout>
  );
};
