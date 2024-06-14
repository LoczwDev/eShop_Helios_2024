import React from "react";

export const ButtontTab = ({ img, title, active }) => {
  return (
    <div
      className={` ${
        active && "bg-brown text-white"
      } text-nowrap hover:bg-brown border-[#ebebeb] flex justify-center gap-x-3 items-center group hover:text-white text-black border rounded-e-full rounded-s-full py-1  px-3`}
    >
      <div className="w-10 h-10 rounded-full">
        <img className="w-full h-full object-cover" src={img} alt="" />
      </div>
      <span className="text-lg">{title}</span>
    </div>
  );
};
