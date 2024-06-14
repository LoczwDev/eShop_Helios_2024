import React, { useEffect, useState } from "react";
import { MainLayout } from "../../components/MainLayout";
import { BreadCrumbs } from "../../components/BreadCrumbs";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { AriticelsTabs } from "../home/container/Tabs/contentTabs/AriticelsTabs";
import { BiFilterAlt } from "react-icons/bi";
import { TbLayoutGrid } from "react-icons/tb";
import { GoColumns } from "react-icons/go";
import { AriticelCol } from "../../components/AriticelCol";
import { Slider, Switch } from "antd";
import { BsSliders } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import {
  getAllBrand,
  getAllProduct,
  getPerProduct,
  getSizeProduct,
  getTypeProduct,
} from "../../services/productAPI";
import { Articles } from "../home/container/Articles";
export const ProductFilterPage = () => {
  const [checkMenuFilter, setCheckMenuFilter] = useState(false);
  const [checkSortDisplay, setCheckSortDisplay] = useState(false);
  const [breadCrumbsData, setBreadCrumbsData] = useState([]);
  const [filters, setFilters] = useState("");
  const handleDisplayFilters = () => {
    setCheckMenuFilter(!checkMenuFilter);
  };
  const [checkView, setCheckView] = useState(false);
  const hanldeChangeView = () => {
    setCheckView(!checkView);
  };

  const {
    data: dataProductFilter,
    isLoading: isLoadingProductFilter,
    refetch,
  } = useQuery({
    queryFn: () => getAllProduct(filters),
    queryKey: ["productFilter", filters],
    onSuccess: (data) => {},
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  const { data: dataBrandProduct, isLoading: isLoadingBrandProduct } = useQuery(
    {
      queryFn: () => getAllBrand({}),
      queryKey: ["productBrand"],
      onSuccess: (data) => {},
      onError: (error) => {
        toast.error(error.message);
        console.log(error);
      },
    }
  );

  const { data: dataSizeProduct, isLoading: isLoadingSizeProduct } = useQuery({
    queryFn: () => getSizeProduct(),
    queryKey: ["sizeProduct"],
    onSuccess: (data) => {},
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  const { data: dataTypeProduct, isLoading: isLoadingType } = useQuery({
    queryFn: () => getTypeProduct(),
    queryKey: ["typeProduct"],
    onSuccess: (data) => {},
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  const { data: dataPerProduct, isLoading: isLoadingPer } = useQuery({
    queryFn: () => getPerProduct(),
    queryKey: ["perProduct"],
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
    ]);
  }, []);
  const dataFilter = [
    {
      title: "Thương Hiệu",
      type: "checkbox",
      items: dataBrandProduct,
    },

    {
      title: "Tìm Theo Loại",
      type: "type",
      items: dataTypeProduct,
    },
    {
      title: "Theo Khoảng Giá",
      type: "rangePrice",
    },
    {
      title: "Chức Năng Nổi Bật",
      type: "per",
      items: dataPerProduct,
    },
    {
      title: "Theo Kích Cỡ",
      type: "checkboxRow",
      items: dataSizeProduct,
    },
  ];

  const dataRaio = [
    { value: "new", title: "Hàng mới" },
    { value: "sortTop", title: "Giá thấp đến cao" },
    { value: "sortDown", title: "Giá cao xuống thấp" },
  ];

  const handlerChangeBrand = (e) => {
    const check = e.target.checked;
    if (check) {
      const value = e.target.value;
      setFilters({ ...filters, id_brand: value });
    } else {
      setFilters({ ...filters, id_brand: [] });
    }

    refetch();
  };
  const handlerChangeType = (e) => {
    const check = e.target.checked;
    if (check) {
      const value = e.target.value;
      setFilters({ ...filters, id_type: value });
    } else {
      setFilters({ ...filters, id_type: [] });
    }

    refetch();
  };
  const handlerChangePer = (e) => {
    const check = e.target.checked;
    if (check) {
      const value = e.target.value;
      setFilters({ ...filters, id_per: value });
    } else {
      setFilters({ ...filters, id_per: [] });
    }

    refetch();
  };

  const hanlderChangeSize = (e) => {
    const check = e.target.checked;
    if (check) {
      const value = e.target.value;
      setFilters({ ...filters, id_size: value });
    } else {
      setFilters({ ...filters, id_size: [] });
    }

    refetch();
  };
  const handlePriceChange = (priceRange) => {
    setFilters({
      ...filters,
      min_price: priceRange[0],
      max_price: priceRange[1],
    });
  };

  const handlerChangeView = (e) => {
    const check = e.target.checked;
    if (check) {
      const value = e.target.value;
      setFilters({ ...filters, sort: value });
    }
    refetch();
  };

  useEffect(() => {}, [refetch, filters]);
  return (
    <MainLayout checkFloat={checkMenuFilter}>
      <section className="max-w-6xl mx-auto my-10">
        <BreadCrumbs data={breadCrumbsData} />
        <article className="w-full lg:flex md:flex lg:gap-[20px] md:gap-[20px]">
          <div
            className={`lg:w-1/4 md:w-1/4 lg:bg-transparent md:bg-transparent bg-white lg:overflow-visible md:overflow-visible overflow-auto lg:max-h-full md:max-h-full max-h-screen z-[200] lg:top-auto md:top-auto top-0  lg:static md:static fixed transition-all duration-500 ease-in-out ${
              checkMenuFilter ? "right-0 w-4/5 p-3" : "-right-full w-full"
            }`}
          >
            <div>
              <h2 className="text-2xl font-bold uppercase">Bộ lọc sản phẩm</h2>
              <p className="text-nowrap text-sm text-gray-500">
                giúp lọc nhanh sản phẩm tìm kiếm
              </p>
            </div>
            {dataFilter?.map((item, index) => (
              <div key={index} className="my-5">
                <h2 className="text-lg font-bold">{item.title}</h2>
                {item.type === "checkbox" ? (
                  <div className="max-h-[225px] overflow-y-auto scrollbar-w-1 scrollbar scrollbar-thumb-slate-400">
                    {item?.items?.map((el, indexSub) => (
                      <div key={indexSub} class="flex items-center my-3">
                        <input
                          id={`checked-checkbox_${el.title}_${indexSub}`}
                          type="checkbox"
                          name={el.title}
                          onChange={handlerChangeBrand}
                          value={el.id}
                          class="w-4 h-4 text-blue-600 border-black rounded focus:ring-blue-500 focus:ring-2"
                        />
                        <label
                          for={`checked-checkbox_${el}_${indexSub}`}
                          class="ms-4 text-sm font-medium text-gray-900"
                        >
                          {el.title}
                        </label>
                      </div>
                    ))}
                  </div>
                ) : item.type === "type" ? (
                  <div className="max-h-[225px] overflow-y-auto scrollbar-w-1 scrollbar scrollbar-thumb-slate-400">
                    {item?.items?.map((el, indexSub) => (
                      <div key={indexSub} class="flex items-center my-3">
                        <input
                          id={`checked-checkbox_${el.title}_${indexSub}`}
                          type="checkbox"
                          name={el.title}
                          onChange={handlerChangeType}
                          value={el.id}
                          class="w-4 h-4 text-blue-600 border-black rounded focus:ring-blue-500 focus:ring-2"
                        />
                        <label
                          for={`checked-checkbox_${el}_${indexSub}`}
                          class="ms-4 text-sm font-medium text-gray-900"
                        >
                          {el.title}
                        </label>
                      </div>
                    ))}
                  </div>
                ) : item.type === "per" ? (
                  <div className="max-h-[225px] overflow-y-auto scrollbar-w-1 scrollbar scrollbar-thumb-slate-400">
                    {item?.items?.map((el, indexSub) => (
                      <div key={indexSub} class="flex items-center my-3">
                        <input
                          id={`checked-checkbox_${el.title}_${indexSub}`}
                          type="checkbox"
                          name={el.title}
                          onChange={handlerChangePer}
                          value={el.id}
                          class="w-4 h-4 text-blue-600 border-black rounded focus:ring-blue-500 focus:ring-2"
                        />
                        <label
                          for={`checked-checkbox_${el}_${indexSub}`}
                          class="ms-4 text-sm font-medium text-gray-900"
                        >
                          {el.title}
                        </label>
                      </div>
                    ))}
                  </div>
                ) : item.type === "checkboxRow" ? (
                  <div className="flex w-full  flex-wrap gap-2">
                    {item?.items?.map((el, indexSub) => (
                      <div key={indexSub} class="flex items-center">
                        {!isLoadingSizeProduct && (
                          <label
                            for={`checked_size_${indexSub}`}
                            class="text-sm font-medium text-gray-900 border rounded-md pr-3"
                          >
                            <input
                              id={`checked_size_${indexSub}`}
                              name="checkSize"
                              type="checkbox"
                              onChange={hanlderChangeSize}
                              value={el.id}
                              className="!border-none boxCheck_Size"
                            />

                            {el.nameSize}
                          </label>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    <Slider
                      range={{
                        draggableTrack: true,
                      }}
                      defaultValue={[0, 90000000]}
                      onChange={handlePriceChange}
                      max={90000000}
                      step={10}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div
            className={`fixed duration-500 ease-in-out transition-all z-[200] ${
              checkMenuFilter ? "right-[80%]" : "right-0"
            }`}
          >
            <button
              className="bg-blueDe text-2xl p-2 text-white font-bold lg:hidden md:hidden "
              onClick={handleDisplayFilters}
            >
              {checkMenuFilter ? <IoMdClose /> : <BsSliders />}
            </button>
          </div>

          <div className="lg:w-3/4 md:w-3/4 w-full">
            <div className="w-full">
              <h2 className="text-3xl font-semibold">Sản phẩm bán chạy</h2>
              <div className="flex items-center gap-x-3 justify-between py-4 border-b mb-5 ">
                <div className="flex items-center gap-x-3 text-base">
                  <button
                    className="flex gap-x-3 items-center"
                    onClick={() => setCheckSortDisplay(!checkSortDisplay)}
                  >
                    <BiFilterAlt />
                    <span>Sắp xếp theo</span>
                  </button>

                  <div
                    className={`items-center gap-x-3 lg:flex duration-200 ease-in-out transition-all ${
                      checkSortDisplay
                        ? "flex absolute flex-col bg-white border !items-start gap-y-3 px-3 py-3 z-[500] top-[245px]"
                        : "hidden"
                    }`}
                  >
                    {dataRaio?.map((item, index) => (
                      <div key={index} class="flex items-center">
                        <div class="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                          <input
                            aria-labelledby="label1"
                            type="radio"
                            name="radio"
                            onChange={handlerChangeView}
                            value={item.value}
                            class="checkbox appearance-none focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none cus_radio"
                          />
                          <div class="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1"></div>
                        </div>
                        <label
                          id="label1"
                          class="ml-2 leading-4 font-normal text-gray-800"
                        >
                          {item.title}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-x-3">
                  <span className="text-base">Xem</span>
                  <div className="flex w-full items-center">
                    <button
                      onClick={hanldeChangeView}
                      className={`flex items-center border px-3 py-2  rounded-lg hover:text-brown hover:border-brown gap-x-2 ${
                        checkView === false && "text-brown border-brown"
                      }`}
                    >
                      Lưới <TbLayoutGrid className="text-xl" />{" "}
                    </button>
                  </div>
                  <div className="flex w-full items-center">
                    <button
                      onClick={hanldeChangeView}
                      className={`flex items-center border px-3 py-2  rounded-lg hover:text-brown hover:border-brown gap-x-2 ${
                        checkView === true && "text-brown border-brown"
                      }`}
                    >
                      Cột <GoColumns className="rotate-90 text-xl" />
                    </button>
                  </div>
                </div>
              </div>

              {dataProductFilter?.length > 0 ? (
                <div>
                  {!isLoadingProductFilter && !checkView && (
                    <div className="flex flex-wrap gap-x-3">
                      {dataProductFilter?.map((item, index) => (
                        <Articles
                          data={item}
                          key={index}
                          className={
                            "lg:w-[203px] md:w-[203px] w-[181px] border"
                          }
                        />
                      ))}
                    </div>
                  )}
                  {!isLoadingProductFilter && checkView && (
                    <div className="flex flex-wrap gap-x-3">
                      {dataProductFilter?.map((item, index) => (
                        <Articles
                          data={item}
                          key={index}
                          checkCol={true}
                          className={"w-full  border border-[#f5f5f6]"}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-full text-center py-2.5 bg-[#fff3cd] border border-[#ffeeba] text-[#856404] text-base px-10 font-medium ">
                  <p>Không có sản phẩm nào trong danh mục này.</p>
                </div>
              )}
            </div>
          </div>
        </article>
        <article></article>
      </section>
    </MainLayout>
  );
};
