import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { SubItemDropdown } from "./SubItemDropdown";

export const ItemFIlterTool = ({ item }) => {
  const [dropDown, setDropDown] = useState(false);
  const dropDownHandle = () => {
    setDropDown((curState) => !curState);
  };
  return (
    <div>
      {item.type === "link" ? (
        <div className="flex items-center justify-between my-5 text-black hover:text-brown">
          <span className="text-sm">{item.name}</span>
        </div>
      ) : item.type === "dropDown" ? (
        <div className="w-full">
          <button
            onClick={dropDownHandle}
            className="flex justify-between w-full hover:text-brown text-black"
          >
            <span className="text-sm">{item.name}</span>
            <div
              className={`${
                dropDown ? "rotate-180" : "rotate-0"
              } duration-300 ease-in-out transition-all`}
            >
              {item.iconDropDown}
            </div>
          </button>
          <div className="w-full">
            <ul
              className={`${
                dropDown ? "block" : "hidden"
              } duration-300 transition-all ease-in-out p-2`}
            >
              {item?.dataDrop
                ?.filter((item) => item.noibat != 1)
                .map((item, index) => (
                  <li className="mt-3" key={index}>
                    {item.title}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="w-full">
          <button
            onClick={dropDownHandle}
            className="flex justify-between w-full hover:text-brown text-black"
          >
            <span className="text-sm">{item.name}</span>
            <div
              className={`${
                dropDown ? "rotate-180" : "rotate-0"
              } duration-300 ease-in-out transition-all`}
            >
              {item.iconDropDown}
            </div>
          </button>
          <div className="w-full">
            <ul
              className={`${
                dropDown ? "block" : "hidden"
              } duration-300 transition-all ease-in-out p-2 text-sm`}
            >
              {item?.dataDrop?.map((item, index) => (
                // <div className="w-full">
                //   <li className="mt-3 flex justify-between w-full" key={index}>
                //     {item.title}
                //     <div>
                //       {item?.items?.length > 0 && <IoChevronDownOutline />}
                //     </div>
                //   </li>
                //   <div>
                //     <ul className="text-sm p-2">
                //       {item?.items?.map((el, subIndex) => (
                //         <li key={subIndex} className="mt-3">
                //           <Link to={`${el.href}`}>{el.title}</Link>
                //         </li>
                //       ))}
                //     </ul>
                //   </div>
                // </div>
                <SubItemDropdown item={item} key={index} />
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
