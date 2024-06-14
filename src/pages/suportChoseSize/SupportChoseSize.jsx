import React, { useEffect, useState } from "react";
import { MainLayout } from "../../components/MainLayout";
import { BreadCrumbs } from "../../components/BreadCrumbs";
import { MainSupportChoseSize } from "./container/MainSupportChoseSize";

export const SupportChoseSize = () => {
  const [breadCrumbsData, setBreadCrumbsData] = useState([]);

  useEffect(() => {
    setBreadCrumbsData([
      {
        name: "Trang Chủ",
        link: "/",
      },
      {
        name: "Hướng dẫn chọn size",
        link: "/supportSize",
      },
    ]);
  }, []);
  return (
    <MainLayout>
      <section className="max-w-6xl mx-auto">
        <article>
          <BreadCrumbs data={breadCrumbsData} />
          <MainSupportChoseSize checkTitle={true} />
        </article>
      </section>
    </MainLayout>
  );
};
