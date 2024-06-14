import React, { useState } from "react";
import { SlSocialFacebook } from "react-icons/sl";
import { LiaFacebookMessenger } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoChevronDownOutline } from "react-icons/io5";

export const ItemFooter = ({ data, footer_one, className }) => {
  const [checkItemFooterShow, setCheckItemFooterShow] = useState(false);
  const handleShowDataItem = () => {
    setCheckItemFooterShow(!checkItemFooterShow);
  };

  return (
    <>
      {data?.map((item, index) => (
        <div key={index} className={`flex flex-col ${className}`}>
          <div className="flex justify-between" onClick={handleShowDataItem}>
            <h2 className="text-[#2a3f50] uppercase text-xl font-bold">
              {item?.subtitle}
            </h2>
            {item?.subtitle != "về ego helios" && <IoChevronDownOutline className="lg:hidden md:hidden" />}
          </div>

          <div
            className={`flex-col lg:flex md:flex  gap-y-3 my-5 duration-200 ${
              checkItemFooterShow ? "flex" : "hidden"
            }`}
          >
            {item?.dataItem?.map((el, index) => (
              <div key={index}>
                <div className="flex justify-start items-center">
                  <span className="pr-2">{el?.icon}</span>
                  <span className="hover:text-brown duration-200 cursor-pointer">
                    {el?.title}
                  </span>
                </div>
              </div>
            ))}

            {footer_one && (
              <div className="flex flex-row gap-x-2">
                <div className="bg-[#2a3f50] p-2 text-white hover:rotate-45 duration-500 ease-in-out delay-150 transition-all text-3xl rounded-full">
                  <SlSocialFacebook />
                </div>
                <div className="bg-[#2a3f50] p-2 text-white hover:rotate-45 duration-500 ease-in-out delay-150 transition-all text-3xl rounded-full">
                  <LiaFacebookMessenger />
                </div>
                <div className="bg-[#2a3f50] p-2 text-white hover:rotate-45 duration-500 ease-in-out delay-150 transition-all text-3xl rounded-full">
                  <FaInstagram />
                </div>
                <div className="bg-[#2a3f50] p-2 text-white hover:rotate-45 duration-500 ease-in-out delay-150 transition-all text-3xl rounded-full">
                  <AiOutlineYoutube />
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};
