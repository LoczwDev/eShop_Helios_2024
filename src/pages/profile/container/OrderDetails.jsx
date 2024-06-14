import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import { getDetailsOrder } from "../../../services/orderAPI";
import { stable } from "../../../constants";
import axios from "axios";
import apiLink from "../../../constants/apiLink";
import { GoArrowLeft } from "react-icons/go";

export const OrderDetails = ({ madonhang, handlerViewOrder }) => {
  const [dataOrderDetails, setdataOrderDetails] = useState(null);
  useEffect(() => {
    axios
      .get(`${apiLink.link}/order.php?madonhang=${madonhang}`)
      .then((response) => {
        setdataOrderDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [madonhang]);
  //   const { data: dataOrderDetails, isLoading } = useQuery({
  //     queryFn: () => getDetailsOrder({ madonhang }),
  //     queryKey: ["orderDetails"],
  //     onSuccess: (data) => {},
  //     onError: (error) => {
  //       toast.error(error.message);
  //       console.log(error);
  //     },
  //   });
  console.log(dataOrderDetails?.products, "dataOrderDetails");

  const dataInfo = [
    {
      title: "Thông tin mua hàng",
      items: [
        `${dataOrderDetails?.hoten}`,
        `${dataOrderDetails?.email}`,
        `${dataOrderDetails?.phone}`,
      ],
    },
    {
      title: "Địa chỉ giao hàng",
      items: [
        `${dataOrderDetails?.hoten}`,
        `${dataOrderDetails?.diachi}`,
        "Sadec, chau thanh,dong thap ",
        `${dataOrderDetails?.phone}`,
      ],
    },
    {
      title: "Phương thức thanh toán",
      items: [
        `${
          dataOrderDetails?.httt == 648
            ? "Thanh toán khi nhận hàng"
            : "Chuyển khoản"
        }`,
      ],
    },
    {
      title: "Phương thức vận chuyển",
      items: ["Giao hàng tận nơi"],
    },
  ];
  return (
    <section>
      <div>
        <h2 className="text-2xl font-medium text-green-500">Ego Helios</h2>
      </div>
      <div className="flex lg:flex-row flex-col-reverse items-start gap-x-3">
        <div className="lg:w-[60%] w-full">
          <div className="flex items-center gap-x-3">
            <div className="lg:w-16 lg:h-16 w-32 h-auto rounded-full border border-green-500 flex items-center justify-center">
              <IoCheckmark className="w-full h-full text-green-500" />
            </div>
            <div className="flex flex-col justify-between">
              <h3 className="text-lg font-bold">Cảm ơn bạn đã đặt hàng</h3>
              <p>Một email xác nhận đã gửi tới loczw17120@gmail.com.</p>
              <p>Xin vui lòng kiểm tra email của bạn</p>
            </div>
          </div>
          <div className="border rounded-md grid grid-cols-2 gap-5 p-4 mt-5 ">
            {dataInfo?.map((item, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold">{item.title}</h3>
                {item?.items.map((el, index) => (
                  <p key={index}>{el}</p>
                ))}
              </div>
            ))}
          </div>
          <div className="w-full flex justify-end items-center mt-10 pb-3">
            <button
              onClick={handlerViewOrder}
              className="text-white bg-[#2a3f50] hover:bg-[#516f86] border border-[#ffffff] hover:border-[#516f86] text-base h-10 w-1/2 duration-200 flex justify-center items-center gap-x-3"
            >
              <span>
                <GoArrowLeft />
              </span>
              Quay về
            </button>
          </div>
        </div>
        {/* {!isLoading && ( */}
        <div className="lg:w-[40%] w-full border-l bg-[#e1e1e1] bg-opacity-20 px-4">
          <div className="flex flex-col items-start md:w-[275px] lg:w-auto w-auto">
            <div className="my-5 pb-5">
              <h2 className="text-xl font-semibold">
                Đơn hàng{" "}
                <span>{`( ${
                  dataOrderDetails?.products
                    ? dataOrderDetails?.products?.length
                    : "0"
                } sản phẩm)`}</span>
              </h2>
            </div>

            <div className="overflow-y-auto scrollbar scrollbar-w-1 scrollbar-thumb-slate-200 max-h-[200px] border-t">
              {dataOrderDetails?.products?.map((item, index) => (
                <div
                  key={index}
                  className="flex w-full justify-between my-2 gap-x-3"
                >
                  <div className="flex gap-x-3 w-[70%] relative">
                    <img
                      className="w-12 h-12 object-cover rounded-lg border"
                      src={stable.UPLOAD_THUMBS_PRODUCT + item.photo}
                      alt=""
                    />
                    <div className="absolute flex justify-center items-center p-2 text-center -top-1 tex-red-500 text-xs text-white bg-[#2a9dcc] w-3 h-3 rounded-full right-[180px]">
                      <p className="block">{item?.soluong}</p>
                    </div>
                    <div className="w-full">
                      <span className="lg:text-sm text-xs">{item?.title}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm">
                      {item?.price.toLocaleString()}{" "}
                      <span className="text-xs relative top-[-7px] underline">
                        đ
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-y-2 w-full border-t py-3 text-[#717171">
              <div className="flex w-full justify-between">
                <span>Tạm tính</span>
                <span>
                  {dataOrderDetails?.tonggia?.toLocaleString()}
                  <span className="text-xs relative top-[-7px] underline">
                    đ
                  </span>
                </span>
              </div>
              <div className="flex w-full justify-between">
                <span>Phí vận chuyển</span>
                <span>-</span>
              </div>
            </div>
            <div className="w-full border-t my-3">
              <div className="flex justify-between w-full text-[#717171] my-3">
                <span>Tổng cộng</span>
                <span className="text-xl text-[#2a9dcc]">
                  {dataOrderDetails?.tonggia?.toLocaleString()}{" "}
                  <span className="text-xs relative top-[-7px] underline">
                    đ
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* )} */}
      </div>
    </section>
  );
};
