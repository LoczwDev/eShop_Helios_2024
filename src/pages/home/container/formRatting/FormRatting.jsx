import React from "react";

export const FormRatting = () => {
  return (
    <div className="relative shadow-md rounded-xl">
      <div className="w-14 h-14 rounded-full absolute -top-6 left-5  overflow-hidden border">
        <img
          className="w-full h-full rounded-full object-cover p-1"
          src="https://bizweb.dktcdn.net/thumb/thumb/100/508/659/themes/939030/assets/thumb_review_2.jpg?1710404714890"
          alt=""
        />
      </div>
      <div className="pt-10 pb-2 px-3">
        <h2 className="text-lg font-bold">Người mẫu: Trang Helio</h2>
        <p className="text-[#777] text-[14px] title_decs relative py-4">
          Công việc của mình rất bận rộn, vấn đề thời gian đối với mình thật sự
          quan trọng, nên mình cần những chiếc đồng hồ thực sự ổn định
        </p>
      </div>
    </div>
  );
};
