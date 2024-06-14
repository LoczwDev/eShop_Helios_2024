import React, { useState } from "react";
import { stable } from "../../../constants";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineChevronLeft } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { checkOutCart } from "../../../stores/actions/cart";
import { addOrder } from "../../../services/orderAPI";
import { ContainerButtonSubmit } from "./ContainerButtonSubmit";

export const ContainerOrderProduct = ({
  dataProductOrder,
  dataOrder,
  httt,
}) => {
  const userState = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  console.log(dataProductOrder, "dataProductOrder");

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    dataProductOrder?.forEach((item) => {
      totalPrice += item.price * item.soluong;
    });
    return totalPrice;
  };

  const totalPrice = calculateTotalPrice();

  // const products = dataProductOrder.map((item) => ({
  //   id: item.id,
  //   ten: item.title,
  //   giamoi: item.price,
  //   soluong: item.soluong,
  //   photo: item.photo,
  // }));

  // const updatedFormData = {
  //   ...dataOrder,
  //   products: products,
  //   tonggia: totalPrice,
  //   userId: userState?.userInfo != null ? userState.userInfo.id : null,
  // };

  // const { mutate: mutateOrder, isLoading } = useMutation({
  //   mutationFn: ({ formData }) => {
  //     return addOrder({
  //       formData: formData,
  //     });
  //   },
  //   onSuccess: (data) => {
  //     toast.success("Dat hang thanh cong");
  //     setTimeout(() => {
  //       dispatch(checkOutCart());
  //       navigate("/");
  //     }, 2000);
  //   },
  //   onError: (error) => {
  //     toast.error(error.message);
  //     console.log(error);
  //   },
  // });

  // // Xử lý khi nhấn nút đặt hàng
  // const handleSubmitOrder = () => {
  //   mutateOrder({ formData: updatedFormData });
  //   console.log(updatedFormData, "formData");
  // };

  return (
    <div className="border-l bg-[#e1e1e1] bg-opacity-20 lg:pr-28 ">
      <div className="flex flex-col items-start px-5 md:w-[275px] lg:w-auto w-auto">
        <div className="my-5 w-full">
          <h2 className="text-3xl font-medium text-[#2a9dcc] text-center lg:hidden md:hidden block">
            Ego Helios
          </h2>
        </div>
        <div className="my-5 pb-5">
          <h2 className="text-xl font-semibold">
            Đơn hàng{" "}
            <span>{`( ${
              dataProductOrder != null ? dataProductOrder?.length : "0"
            } sản phẩm)`}</span>
          </h2>
        </div>
        <div className="overflow-y-auto scrollbar scrollbar-w-1 scrollbar-thumb-slate-200 max-h-[200px] border-t">
          {dataProductOrder?.map((item, index) => (
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
                  {item.price.toLocaleString()}{" "}
                  <span className="text-xs relative top-[-7px] underline">
                    đ
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full my-3 border-t py-2">
          <div className="relative w-full mb-3 flex justify-between ">
            <input
              id="email"
              type="email"
              className="rounded-md px-2 py-2.5 border border-inputBor peer w-[65%]"
            />
            <button className="px-5 py-3 bg-[#357ebd] font-medium opacity-60 text-white rounded-md text-nowrap">
              Áp dụng
            </button>
            <label
              htmlFor="email"
              className="absolute text-sm top-[10px] left-3 ease-in-out duration-300 transition-all peer-focus:top-0"
            >
              Nhập mã giảm giá
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 w-full border-t py-3 text-[#717171">
          <div className="flex w-full justify-between">
            <span>Tạm tính</span>
            <span>
              {totalPrice.toLocaleString()}{" "}
              <span className="text-xs relative top-[-7px] underline">đ</span>
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
              {totalPrice.toLocaleString()}{" "}
              <span className="text-xs relative top-[-7px] underline">đ</span>
            </span>
          </div>
          <div className="lg:block md:block hidden">
            <ContainerButtonSubmit dataSubmit={dataOrder} httt={httt} />
          </div>
        </div>
      </div>
    </div>
  );
};
