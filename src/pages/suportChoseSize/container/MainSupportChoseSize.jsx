import React, { useEffect, useState } from "react";

export const MainSupportChoseSize = ({ checkTitle }) => {
  const dataSuport = [
    {
      title: "Đo size cổ tay (chu vi cổ tay)",
      img: "https://bizweb.dktcdn.net/100/508/659/files/q9lyddn.png?v=1705977764558",
    },
    {
      title:
        "Tham chiếu size cổ tay của bạn để chọn size mặt đồng hồ phù hợp dưới đây",
      img: "https://bizweb.dktcdn.net/100/508/659/files/vaolz7d.png?v=1705977777038",
    },
  ];
  return (
    <div>
      {checkTitle && (
        <h2 className="text-2xl font-bold  my-5">Hướng dẫn chọn size</h2>
      )}
      <span>
        Sở thích của mỗi người là khác nhau, có người tay nhỏ nhưng lại thích
        đeo đồng hồ size to, có người tay to nhưng lại thích đeo đồng hồ size
        nhỏ, nhưng để đeo 1 chiếc đồng hồ mang tính thẩm mỹ nhất thì bạn cũng
        nên tham khảo cách lựa size đồng hồ dưới đây nhé:
      </span>
      {dataSuport?.map((item, index) => (
        <div key={index}>
          <span className="font-bold">
            Bước {index + 1}: <span className="font-normal">{item.title}</span>
          </span>
          <div className="my-3">
            <img src={item.img} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};
