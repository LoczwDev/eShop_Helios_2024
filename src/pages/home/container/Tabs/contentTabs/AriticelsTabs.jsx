import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";
import { PiEyeLight } from "react-icons/pi";
import { SlBag } from "react-icons/sl";
import { stable } from "../../../../../constants";
import { Link } from "react-router-dom";

export const AriticelsTabs = ({ data, className }) => {
  console.log(data, "dattaTabs");
  return (
    <div className="flex items-center flex-wrap gap-y-3 gap-x-3 md:justify-normal lg:justify-normal justify-between ">
      {data?.map((item, index) => (
        <div
          key={index}
          className={`bg-white item relative rounded-lg cursor-pointer py-4 group ${className}`}
        >
          {item?.giakm != "" && (
            <div className="absolute flex items-center justify-center top-4 left-3 p-4 rounded-full bg-[#eb0000] text-white font-bold z-10">
              <span className="absolute block">{item?.giakm}%</span>
            </div>
          )}

          <div className="flex flex-col">
            <div className="overflow-hidden rounded-lg bg-transparent h-[200px] relative w-full">
              <img
                className=" object-cover hover:scale-110 duration-500 ease-in-out w-full h-full"
                src={stable.UPLOAD_THUMBS_PRODUCT + item.photo}
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
            <div className="text-center px-4 h-[50px] ">
              <Link
                to={`/product/${item.id}`}
                className="font-normal text-base line-clamp-2 hover:text-brown"
              >
                {item?.tenvi}
              </Link>
            </div>
            <div className="flex lg:flex-row flex-col items-center justify-center gap-x-3 px-4">
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
              <div className="text-red-700 font-semibold">
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
          </div>
        </div>
      ))}

      <div className="w-full flex justify-center items-center mt-10 pb-3">
        <button className="text-white bg-[#2a3f50] hover:bg-[#516f86] border border-[#ffffff] hover:border-[#516f86] text-base h-10 lg:w-[15%] w-[40%] duration-200 flex justify-center items-center gap-x-3">
          Xem tất cả{" "}
          <span>
            <BsPlusLg />
          </span>
        </button>
      </div>
    </div>
  );
};
