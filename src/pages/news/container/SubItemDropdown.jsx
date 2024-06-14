import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const SubItemDropdown = ({ item }) => {
  const [dropDown, setDropDown] = useState(false);
  const dropDownHandle = () => {
    setDropDown((curState) => !curState);
  };
  return (
    <div className="w-full">
      <button
        onClick={dropDownHandle}
        className="mt-3 flex justify-between w-full"
      >
        {item.title}
        <div
          className={`${
            dropDown ? "rotate-180" : "rotate-0"
          } duration-200 ease-in-out transition-all`}
        >
          {item?.items?.length > 0 && <IoChevronDownOutline />}
        </div>
      </button>
      <div
        className={`${
          dropDown ? "block" : "hidden"
        } duration-200 ease-in-out transition-all`}
      >
        <ul className="text-sm p-2">
          {item?.items?.map((el, subIndex) => (
            <li key={subIndex} className="mt-3">
              <Link to={`${el.href}`}>{el.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
