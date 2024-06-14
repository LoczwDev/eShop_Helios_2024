import React from "react";
import { stable } from "../../../constants";

export const Voucher = ({ dataNewsPhoto, isLoading, className }) => {

  return (
    <section className={`${className}`}>
      <div className="my-5">
        <h2 className="text-center font-bold text-2xl">Khuyến mãi nổi bật</h2>
      </div>
      {!isLoading && (
        <div className="flex lg:flex-row md:flex-row flex-col lg:gap-y-0 gap-y-3 justify-between gap-x-3">
          <div>
            {dataNewsPhoto
              ?.filter((item) => item.stt == 1)
              .map((item, index) => (
                <img
                  key={index}
                  className="rounded-lg w-full"
                  src={stable.UPLOAD_THUMBS_NEWS + item?.photo}
                  alt=""
                />
              ))}
          </div>
          <div className="flex flex-col justify-between lg:gap-y-2 gap-y-3">
            {dataNewsPhoto
              ?.filter((item) => item.stt != 1)
              .map((item, index) => (
                <div key={index}>
                  <img
                    className="rounded-lg w-full"
                    src={stable.UPLOAD_THUMBS_NEWS + item.photo}
                    alt=""
                  />
                </div>
              ))}
          </div>
        </div>
      )}
    </section>
  );
};
