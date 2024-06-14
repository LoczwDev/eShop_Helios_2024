import React, { useEffect, useState } from "react";
import { MainLayout } from "../../components/MainLayout";
import { BreadCrumbs } from "../../components/BreadCrumbs";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { stable } from "../../constants";
import { FormClientContact } from "./container/FormClientContact";

export const ContactPage = () => {
  const [breadCrumbsData, setBreadCrumbsData] = useState([]);
  const dataItem = [
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
  ];
  useEffect(() => {
    setBreadCrumbsData([
      {
        name: "Trang Chủ",
        link: "/",
      },
      {
        name: "Liên hệ",
        link: "/contacts",
      },
    ]);
  }, []);
  return (
    <MainLayout>
      <section className="max-w-6xl mx-auto">
        <article>
          <BreadCrumbs data={breadCrumbsData} />
          <h2 className="text-3xl font-bold my-10">Liên hệ với chúng tôi</h2>
          <div className="flex lg:flex-row md:flex-row flex-col-reverse lg:gap-y-0 md:gap-y-0 gap-y-3 items-start gap-x-5">
            <div>
              <div className="googlemap">
                <iframe
                  className="google-iframe"
                  src={stable.IFFRAME_MAP}
                  height={450}
                  width={750}
                  allowFullScreen
                  // aria-hidden="false"
                  // tabIndex="0"
                ></iframe>
              </div>
              <FormClientContact className={"w-full my-7"} />
            </div>

            <div className="flex flex-col gap-y-3">
              <div>
                <img
                  className="w-[150px]"
                  src={stable.UPLOAD_THUMBS_BANNER + stable.STABLE_LOGO}
                  alt=""
                />
              </div>
              {dataItem?.map((item, index) => (
                <div key={index} className="flex items-center gap-x-3">
                  <div className="text-xl">{item?.icon}</div>
                  <span>{item?.title}</span>
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>
    </MainLayout>
  );
};
