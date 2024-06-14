import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getOrderByUser, getStatusOrder } from "../../../services/orderAPI";
import toast from "react-hot-toast";
import { OrderDetails } from "./OrderDetails";

export const OrderProfile = () => {
  const [checkViewOrder, setcheckViewOrder] = useState(false);
  const [checkmadonhang, setCheckmadonhang] = useState(null);
  const userState = useSelector((state) => state.user);
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    setUserId(userState?.userInfo?.id);
  }, [userState]);

  const { data: dataOrderById, isLoading: isLoadingOrderById } = useQuery({
    queryFn: () => getOrderByUser({ userId: userId }),
    queryKey: ["orderById", userId],
    onSuccess: (data) => {},
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const { data: dataStatus, isLoading: isLoadingStatus } = useQuery({
    queryFn: () => getStatusOrder(),
    queryKey: ["statusorder"],
    onSuccess: (data) => {},
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const dataTableHead = [
    {
      id: 1,
      title: "Đơn hàng",
      check: true,
    },
    {
      id: 2,
      title: "Ngày",
    },
    {
      id: 3,
      title: "Địa chỉ",
    },
    {
      id: 4,
      title: "Giá trị đơn hàng",
      check: true,
    },
    {
      id: 5,
      title: "TT thanh toán",
      check: true,
    },
    {
      id: 6,
      title: "TT vận chuyển",
    },
    {
      id: 7,
      title: "",
      check: true,
    },
  ];
  const handlerViewOrder = (item) => {
    setcheckViewOrder(!checkViewOrder);
    setCheckmadonhang(item ? item : null);
  };
  return (
    <div>
      <div className={`${!checkViewOrder ? "block" : "hidden"}`}>
        <h2 className="text-2xl font-medium mb-5">Đơn hàng của bạn</h2>
        <div className="overflow-x-auto">
          <table className="text-left w-full border table-auto lg:overflow-visible overflow-scroll">
            <thead className="bg-brown flex text-white w-full text-center text-nowrap">
              <tr className="flex w-full">
                {dataTableHead?.map((item) => (
                  <th
                    key={item?.id}
                    className={`${item?.check ? "" :"lg:block hidden"} lg:w-1/4 w-[30%] border-r border-hard text-sm`}
                  >
                    {item?.title}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="bg-grey-light flex flex-col items-center justify-between w-full max-h-96 overflow-y-auto scrollbar scrollbar-w-1 scrollbar-thumb-slate-400">
              {dataOrderById?.map((item, index) => (
                <tr
                  key={index}
                  className="flex w-full mb-4 text-center border-b py-2.5 text-sm"
                >
                  <td className=" w-1/4">{item.madonhang}</td>
                  <td className=" w-1/4 lg:block hidden">
                    {new Date(item.ngaytao).toLocaleString("vi-VN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                  <td className=" w-1/4 lg:block hidden">{item.diachi}</td>
                  <td className=" w-1/4 text-price font-bold">
                    {item.tonggia.toLocaleString()}{" "}
                    <span className="text-xs relative top-[-7px] underline">
                      đ
                    </span>
                  </td>
                  <td
                    className={` w-1/4 ${
                      item.httt === 639 ? "text-blue-500" : "text-green-500"
                    } font-bold`}
                  >
                    {item.httt == 639
                      ? "Chuyển khoản"
                      : "Thanh toán khi nhận hàng"}
                  </td>
                  <td className=" w-1/4 text-blue-700 lg:block hidden">
                    {dataStatus
                      ?.filter((itemStatus) => itemStatus.id == item.tinhtrang)
                      .map((el, index) => (
                        <span key={index}>{el.trangthai}</span>
                      ))}
                  </td>
                  <td className=" w-1/4 text-blue-500">
                    <button onClick={() => handlerViewOrder(item.madonhang)}>
                      Xem chi tiết
                    </button>
                  </td>
                </tr>
              ))}
              {dataOrderById?.length === 0 && (
                <tr className="flex w-full justify-center py-5">
                  <td className=" w-1/4 col-span-7 ">Không có đơn hàng nào</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className={`${checkViewOrder ? "block" : "hidden"}`}>
        <OrderDetails
          madonhang={checkmadonhang}
          handlerViewOrder={handlerViewOrder}
        />
      </div>
    </div>
  );
};
