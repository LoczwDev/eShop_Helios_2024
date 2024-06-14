import React from "react";
import { GrFavorite } from "react-icons/gr";
import { PiEyeLight } from "react-icons/pi";
import { SlBag } from "react-icons/sl";

import { Link } from "react-router-dom";
import { stable } from "../constants";

export const AriticelCol = ({ className, data }) => {
  return (
    <div className="w-full flex flex-col gap-y-5">
      {data.map((item, index) => (
        <div
        key={index}
          className={`bg-white item relative rounded-lg cursor-pointer py-4 group ${className} `}
        >
          {item?.giakm != "" && (
            <div className="absolute flex items-center justify-center top-4 left-3 p-4 rounded-full bg-[#eb0000] text-white font-bold z-10">
              <span className="absolute block">{item?.giakm}%</span>
            </div>
          )}

          <div className="flex">
            <div className="overflow-hidden rounded-lg bg-transparent h-[200px] relative w-1/5">
              <img
                className=" object-cover hover:scale-110 duration-500 ease-in-out w-full h-full"
                src={
                    item?.photo ? stable.UPLOAD_THUMBS_PRODUCT + item?.photo : ""
                }
                alt=""
              />
              <div
                style={{ height: "calc(100% - 20px)" }}
                className="flex duration-500 inset-y-full group-hover:inset-y-12 ease-in-out flex-col item-center absolute text-2xl right-7 gap-2"
              >
                <div className="w-8 h-8 p-2 flex justify-center items-center rounded-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:bg-[#b61615] hover:text-white duration-200 bg-white">
                  <GrFavorite />
                </div>
                <div className="w-8 h-8 p-2 flex justify-center items-center rounded-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:bg-[#b61615] hover:text-white duration-200 bg-white">
                  <PiEyeLight />
                </div>
                <div className="w-8 h-8 p-2 flex justify-center items-center rounded-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:bg-[#b61615] hover:text-white duration-200 bg-white">
                  <SlBag />
                </div>
              </div>
            </div>
            <div className="flex-col justify-start w-4/5 px-5">
              <div className="h-[50px] ">
                <Link
                  to={`/product/${item?.id}`}
                  className="font-normal text-base line-clamp-2"
                >
                  {item?.tenvi}
                </Link>
              </div>
              <div className="flex lg:flex-row items-center flex-col gap-x-3">
                {item?.gia && item.gia !== 0 ? (
                  <div className="text-[#8C8C8C] text-xs">
                    <span className="line-through">
                      {item.gia.toLocaleString()}
                    </span>
                    <span className="text-xs relative top-[-7px] underline">
                      đ
                    </span>
                  </div>
                ) : (
                  ""
                )}
                <div className="text-price font-semibold">
                  {item?.giamoi && item.giamoi !== "" ? (
                    <span className="relative">
                      <span className="text-md">
                        {item.giamoi.toLocaleString()}
                      </span>
                      <span className="text-xs relative top-[-7px] underline">
                        đ
                      </span>
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <p className="text-[14px] line-clamp-3">
                {item?.mota == "" ? "Hiện sản phẩm chưa có mô tả" : item?.mota}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
