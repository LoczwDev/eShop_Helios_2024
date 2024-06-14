import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

export const ViewAll = ({ subtitle }) => {
  return (
    <div className="flex justify-between items-center my-3 cursor-pointer">
      <h1 className="font-bold text-2xl">{subtitle}</h1>
      <div className="flex justify-center gap-x-3 items-center">
        <Link to={"/products"}>Xem tất cả</Link>
        <span>
          <GoArrowRight />
        </span>
      </div>
    </div>
  );
};
