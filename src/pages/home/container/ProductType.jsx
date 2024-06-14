import React from "react";
import { GoArrowRight } from "react-icons/go";

export const ProductType = () => {
  return (
    <div className="max-w-6xl mx-auto flex lg:flex-row md:flex-row  flex-col lg:gap-y-0 gap-y-3 justify-between items-center gap-x-5">
      <div className="lg:w-1/2 md:1/2 w-full rounded-xl relative">
        <img
          className="rounded-md w-full "
          src="https://bizweb.dktcdn.net/100/508/659/themes/939030/assets/banner_watch_01.jpg?1710404714890"
          alt=""
        />
        <div className="flex justify-between items-center text-white bg-[#212529] bg-opacity-50 bottom-0 w-full absolute z-20 px-3 py-2">
          <div className="flex justify-center gap-x-3 items-center ">
            <p>Xem tất cả</p>
            <span>
              <GoArrowRight />
            </span>
          </div>
          <h2 className="font-bold text-xl">Đồng hồ cho nam</h2>
        </div>
      </div>
      <div className="lg:w-1/2 w-full rounded-xl relative">
        <img
          className="rounded-md w-full "
          src="https://bizweb.dktcdn.net/100/508/659/themes/939030/assets/banner_watch_02.jpg?1710404714890"
          alt=""
        />
        <div className="flex justify-between items-center text-white bg-[#212529] bg-opacity-50 bottom-0 w-full absolute z-20 px-3 py-2">
          <div className="flex justify-center gap-x-3 items-center ">
            <p>Xem tất cả</p>
            <span>
              <GoArrowRight />
            </span>
          </div>
          <h2 className="font-bold text-xl">Đồng hồ cho nữ</h2>
        </div>
      </div>
    </div>
  );
};
