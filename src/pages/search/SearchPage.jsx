import React, { useEffect, useState } from "react";
import { MainLayout } from "../../components/MainLayout";
import { BreadCrumbs } from "../../components/BreadCrumbs";
import { useQuery } from "@tanstack/react-query";
import { getAllProduct } from "../../services/productAPI";
import { Articles } from "../home/container/Articles";
import { AriticelsTabs } from "../home/container/Tabs/contentTabs/AriticelsTabs";

export const SearchPage = () => {
  const [breadCrumbsData, setBreadCrumbsData] = useState([]);
  const [filters, setFilters] = useState();
  const searchValue = new URLSearchParams(location.search).get("timkiem");
  const listValue = new URLSearchParams(location.search).get("id_list");
  const brandValue = new URLSearchParams(location.search).get("id_brand");
  const catValue = new URLSearchParams(location.search).get("id_cat");
  console.log(searchValue, "searchValue");
  useEffect(() => {
    setFilters({
      ...filters,
      search: searchValue,
      id_list: listValue,
      id_brand: brandValue,
      id_cat: catValue,
    });
  }, [searchValue, listValue, brandValue, catValue]);

  const { data: dataSearch, isLoading: isLoadingSearch } = useQuery({
    queryFn: () => getAllProduct(filters),
    queryKey: ["productSearch", filters],
    onSuccess: (data) => {},
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  console.log(dataSearch, "dataSearch");

  useEffect(() => {
    setBreadCrumbsData([
      {
        name: "Trang Chủ",
        link: "/",
      },
      {
        name: "Tìm kiếm",
        link: "/search",
      },
    ]);
  }, []);
  return (
    <MainLayout>
      <section className="max-w-6xl mx-auto">
        <BreadCrumbs data={breadCrumbsData} />
        {!isLoadingSearch && dataSearch?.length > 0 && (
          <article>
            <div className="flex flex-wrap gap-x-2">
              {dataSearch?.map((item, index) => (
                <Articles data={item} key={index} className={"w-1/5"} />
              ))}
            </div>
          </article>
        )}
        {dataSearch?.length <= 0 && (
          <div className="my-10 w-full text-center py-2.5 bg-[#fff3cd] border border-[#ffeeba] text-[#856404] text-base px-10 font-medium ">
            <p>Không có sản phẩm nào trong danh mục này.</p>
          </div>
        )}
      </section>
    </MainLayout>
  );
};
