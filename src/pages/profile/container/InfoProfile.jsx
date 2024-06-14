import React, { useEffect } from "react";

export const InfoProfile = ({ data }) => {
  return (
    <div>
      <h2 className="text-2xl mb-5">Thông tin tài khoản</h2>
      <div className="flex flex-col gap-y-3">
        <div>
          <span className="font-bold text-lg">
            Họ tên:{" "}
            <span className="font-normal">{data.ten}</span>
          </span>
        </div>
        <div>
          <span className="font-bold text-lg">
            Email:{" "}
            <span className="font-normal">{data.email}</span>
          </span>
        </div>
        <div>
          <span className="font-bold text-lg">
            Điện thoại:{" "}
            <span className="font-normal">{data.phone}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
