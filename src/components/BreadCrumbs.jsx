import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export const BreadCrumbs = ({ data, className }) => {
  return (
    <div
      className={`w-full flex items-center py-4 overflow-x-auto font-bold whitespace-nowrap `}
    >
      {data.map((item, index) => (
        <div
          key={index}
          className={`flex items-center text-black dark:text-white opacity-50 text-base z-10 ${className} `}
        >
          <Link to={item.link}>{item.name}</Link>
          {index !== data.length - 1 && <span className="px-3"><MdKeyboardDoubleArrowRight/></span>}
        </div>
      ))}
    </div>
  );
};
