import React from "react";

export const ItemFilterRice = ({ data }) => {
  // console.log(data, "data");
  return (
    <div className={`${data.bg} text-center rounded-lg py-10`}>
      <div className={`${data.color}`}>
        <p className="text-2xl">Giá dưới</p>
        <span className="text-3xl font-bold">{data.title}</span>
      </div>
    </div>
  );
};
