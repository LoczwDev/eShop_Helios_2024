import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ItemFooter } from "./ItemFooter";


export const Footer = () => {
  const dataEgoHelios = [
    {
      subtitle: "về ego helios",
      dataItem: [
        {
          icon: <FaLocationDot />,
          title: "Xuân Thủy, Hà Nội",
          type: "text",
        },
        {
          icon: <MdEmail />,
          title: "support@sapo.vn",
          type: "link",
        },
        {
          icon: <FaPhoneAlt />,
          title: "0364199361",
          type: "link",
        },
        {
          icon: <FaLocationDot />,
          title: "Hệ thống cửa hàng",
          type: "link",
        },
      ],
    },
  ];
  const dataChinhSach = [
    {
      subtitle: "Chính sách",
      dataItem: [
        {
          href: "/",
          title: "Chính sách bán hàng",
        },
        {
          href: "/",
          title: "Chính sách mua hàng",
        },
        {
          href: "/",
          title: "Chính sách đổi trả",
        },
        {
          href: "/",
          title: "Chính sách đặt biệt",
        },
        {
          href: "/",
          title: "Chính sách Affiliate",
        },
        {
          href: "/",
          title: "Chính sách đại lý",
        },
      ],
    },
  ];
  const dataService = [
    {
      subtitle: "dịch vụ",
      dataItem: [
        {
          href: "/",
          title: "Dịch vụ bảo trì",
        },
        {
          href: "/",
          title: "Dịch vụ EgoCare",
        },
        {
          href: "/",
          title: "Dịch vụ vàng",
        },
        {
          href: "/",
          title: "Dịch vụ vận chuyển",
        },
        {
          href: "/",
          title: "Dịch vụ sau bán",
        },
        {
          href: "/",
          title: "Dịch vụ mua lại",
        },
      ],
    },
  ];
  return (
    <footer className="w-full bg-[#f7f7f7]">
      <div className="px-5 py-20 flex lg:flex-row md:flex-row flex-col lg:gap-y-0 md:gap-y-0 gap-y-5 items-start justify-between max-w-6xl mx-auto  p-3">
        <ItemFooter
          data={dataEgoHelios}
          className={"lg:w-1/3 md:w-1/3 w-full"}
          footer_one={true}
        />
        <ItemFooter data={dataChinhSach} className={"lg:w-1/4 md:w-1/4 w-full"} />
        <ItemFooter data={dataService} className={"lg:w-1/4 md:w-1/4 w-full"} />
        {/* Footer PhoneInput */}
        <div className="flex flex-col lg:w-1/4 md:w-1/4 w-full">
          <div>
            <h2 className="text-[#2a3f50] uppercase text-xl font-bold">
              giờ mở cửa
            </h2>
            <div className="flex flex-col gap-y-2 my-5">
              <p className="">
                Từ 9:00 - 21:30 tất cả các ngày trong tuần (bao gồm cả các ngày
                lễ, ngày Tết).
              </p>
            </div>
          </div>
          <div className="mb-5">
            <h2 className="text-[#2a3f50] uppercase text-xl font-bold">
              GÓP Ý, KHIẾU NẠI
            </h2>
            <div className="flex flex-row items-center  gap-x-5">
              <span className="text-xl">
                <FaPhoneAlt />
              </span>
              <Link
                to={"/"}
                className="text-[#2a3f50] uppercase text-2xl font-bold"
              >
                1900 6750
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-[#2a3f50] uppercase text-xl font-bold">
              NHẬN TIN KHUYẾN MÃI
            </h2>
            <div className="flex flex-row lg:w-auto md:w-1/3 ">
              <div className="">
                <input
                  className="md:w-[100px] lg:w-auto py-2 px-3 border rounded-l-md outline-none focus:outline-none"
                  type="text"
                  placeholder="Nhập email của bạn"
                />
              </div>
              <button className="rounded-r-md text-nowrap py-2 px-3 text-white bg-[#2a3f50] hover:bg-[#516f86] border-[#516f86] text-base duration-200 font-bold">
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-5 border-t w-full">
        <p>
          @ Bản quyền thuộc về Ego Corp | Cung cấp bởi{" "}
          <span className="font-semibold">Sapo</span>
        </p>
      </div>
    </footer>
  );
};
