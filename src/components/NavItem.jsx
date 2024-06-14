import React, { useState } from "react";
import { Link } from "react-router-dom";

export const NavItem = ({ item }) => {
  const [dropDown, setDropDown] = useState(false);
  const dropDownHandle = () => {
    setDropDown((curState) => !curState);
  };

  return (
    <li className="group lg:m-0 font-semibold transition-all duration-200  w-full lg:w-auto lg:px-0 px-3 lg:my-0 my-2 text-nowrap  ">
      {item.type === "link" ? (
        <Link
          to={`${item.href}`}
          className={`lg:p-2 lg:h-[64px] lg:leading-[64px] hover:text-brown text-[16px]  ${
            item.check && "text-brown"
          }`}
          href="#"
        >
          {item.name}
        </Link>
      ) : item.type === "dropDown" ? (
        <div className="flex flex-col gap-2 lg:justify-center justify-between lg:items-center items-start">
          <button
            className="flex gap-1 items-center lg:w-auto w-full lg:justify-normal justify-between text-[16px]"
            onClick={dropDownHandle}
          >
            <span className="lg:h-[64px] lg:leading-[64px]">{item.name}</span>
            <span className="group-hover:-rotate-45">{item.iconDropDown}</span>
          </button>
          {item?.dataDrop && (
            <div
              className={`${
                dropDown ? "block" : "hidden"
              } overflow-visible z-30 lg:hidden transition-all duration-500 pt-4 lg:top-[-172px] lg:left-[298px] w-max lg:absolute lg:transform lg:translate-y-full lg:group-hover:block`}
            >
              <ul className="flex flex-col overflow-hidden lg:shadow-xl bg-white text-start z-30 list-none w-[166px]">
                {item.dataDrop?.map((subItem) => (
                  <Link
                    to={`/search/?id_brand=${subItem?.id}`}
                    key={subItem.title}
                    className="px-2 py-2 hover:bg-violet hover:text-black text-black lg:text-dark-soft border-b lg:border-none md:border-none"
                  >
                    <span className="hover:text-brown text-sm font-normal lg:uppercase">
                      {subItem.title}
                    </span>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-2 lg:justify-center justify-between lg:items-center items-start">
          <button
            className="flex gap-1 items-center lg:w-auto w-full lg:justify-normal justify-between text-[16px]"
            onClick={dropDownHandle}
          >
            <span className="lg:h-[64px] lg:leading-[64px]">{item.name}</span>
            <span className="group-hover:-rotate-45">{item.iconDropDown}</span>
          </button>
          <div
            className={`${
              dropDown ? "block" : "hidden"
            } lg:left-auto left-0 lg:w-[720px] w-full z-30 absolute overflow-hidden lg:hidden md:hidden transition-all duration-500 lg:pt-4 lg:mt-0 mt-10 lg:top-[-221px] lg:right-[240px] lg:absolute md:absolute lg:transform md:transform lg:translate-y-full md:translate-y-full lg:group-hover:block md:group-hover:block`}
          >
            <ul className=" w-full p-2 flex lg:flex-row flex-col overflow-hidden lg:shadow-xl bg-white text-start z-30 list-none justify-between text-nowrap flex-wrap">
              {item?.dataDrop.map((subItem, index) => (
                <div key={index} className="lg:w-1/4 w-full">
                  <Link
                    to={`/search/id_list=${subItem.id}`}
                    key={subItem.title}
                    className="lg:w-auto block w-full px-2 py-2 hover:bg-violet hover:text-black text-black lg:text-dark-soft border-b"
                  >
                    <span className="hover:text-brown text-sm font-bold lg:uppercase">
                      {subItem.title}
                    </span>
                  </Link>
                  <div className="flex flex-col justify-center gap-y-1 py-2 px-2">
                    {subItem?.items?.map((el, index) => {
                      return (
                        <Link
                          to={`/search/?id_cat=${el?.id}`}
                          className="font-normal text-sm lg:border-none md:border-none border-b py-2 lg:py-1 md:py-1"
                          key={index}
                        >
                          {el?.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};
