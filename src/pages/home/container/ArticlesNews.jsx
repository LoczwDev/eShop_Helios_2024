import React from "react";
import { stable } from "../../../constants";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

export const ArticlesNews = ({ data, className, displayContent, check }) => {
  // console.log(data, "datanew");
  return (
    <div
      className={`${className} ${
        !displayContent ? "flex items-start gap-x-3  " : ""
      } `}
    >
      <div className={``}>
        <div className={`${!displayContent ? "w-[100px]" : "w-full"}`}>
          <img
            src={stable.UPLOAD_THUMBS_NEWS + data?.photo}
            className={`w-full`}
            alt=""
          />
        </div>
      </div>
      <div>
        {!displayContent ? (
          ""
        ) : (
          <p className="text-[#8C8C8C] text-[14px]">
            {new Date(data.ngaytao * 1000).toLocaleDateString("vi-VN", {
              weekday: "short",
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
        )}

        <Link
          to={`/news/${data.id}`}
          className={`text-sm  ${
            !displayContent
              ? "line-clamp-2 text-hard font-normal"
              : "font-semibold text-black "
          }`}
        >
          {data?.title}
        </Link>
        {displayContent && check && (
          <p className="line-clamp-2 text-hard mt-3 text-sm">
            {" "}
            <div
              className="text-justify"
              dangerouslySetInnerHTML={{
                __html: parse(data.noidung),
              }}
            />
          </p>
        )}
      </div>
    </div>
  );
};
