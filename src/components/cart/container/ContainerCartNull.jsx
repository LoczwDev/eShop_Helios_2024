import React from "react";
import { SlHandbag } from "react-icons/sl";
import { Link } from "react-router-dom";
export const ContainerCartNull = ({ className }) => {
  return (
    <div className={`${className} mx-auto  px-14 py-4`}>
      <div className="mx-auto flex justify-center">
        <SlHandbag className="text-[60px]" />
      </div>
      <span className="block text-center text-sm font-normal my-2">Không có sản phẩm nào trong giỏ hàng của bạn</span>
      <div className="mt-5 flex justify-center">
        <Link
          to={"/"}
          className="text-sm text-white px-10 py-2 bg-blueDe hover:opacity-85 rounded font-normal"
        >
          Tiếp tục mua sắm
        </Link>
      </div>
    </div>
  );
};
