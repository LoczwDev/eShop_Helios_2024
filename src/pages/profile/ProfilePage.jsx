import React, { useEffect, useRef, useState } from "react";
import { MainLayout } from "../../components/MainLayout";
import { InfoProfile } from "./container/InfoProfile";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { OrderProfile } from "./container/OrderProfile";
import { ChangePasswordProfile } from "./container/ChangePasswordProfile";
import { AddressProfile } from "./container/AddressProfile";
import { BreadCrumbs } from "../../components/BreadCrumbs";
import { ModalCart } from "../../components/cart/ModalCart";

export const ProfilePage = () => {
  const userState = useSelector((state) => state.user);
  const dataUser = userState?.userInfo;
  const [breadCrumbsData, setBreadCrumbsData] = useState([]);
  const navigate = useNavigate();
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const tabsData = [
    {
      title: "Thông tin tài khoản",
      content: <InfoProfile data={dataUser} />,
    },
    {
      title: "Đơn hàng của bạn",
      content: <OrderProfile />,
    },
    {
      title: "Đổi mật khẩu",
      content: <ChangePasswordProfile />,
    },
    {
      title: "Sổ địa chỉ (0)",
      content: <AddressProfile />,
    },
  ];
  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  useEffect(() => {
    if (!userState?.userInfo) {
      setTimeout(() => {
        navigate("/");
        toast.error("Bạn chưa có tài khoản");
      }, 1000);
    }
  }, [userState]);
  useEffect(() => {
    setBreadCrumbsData([
      {
        name: "Trang Chủ",
        link: "/",
      },
      {
        name: "Trang khách hàng",
        link: "/profile",
      },
    ]);
  }, []);
  return (
    <MainLayout>
      <section className="max-w-6xl mx-auto">
        <BreadCrumbs data={breadCrumbsData} />
        <ModalCart />
        <article className="flex lg:flex-row flex-col gap-x-5 my-5">
          <div className="lg:w-1/5 w-full">
            <div className="mb-5">
              <h2 className="text-2xl font-medium">Trang tài khoản</h2>
              <p className="font-bold">
                Xin chào,{" "}
                <span className="text-red-500">{dataUser?.ten} !</span>
              </p>
            </div>

            {/* tabs */}
            <div className="relative">
              <div className="flex lg:flex-col flex-row lg:gap-0 gap-x-5 w-full lg:overflow-y-visible overflow-y-auto">
                {tabsData.map((tab, idx) => {
                  return (
                    <button
                      key={idx}
                      ref={(el) => (tabsRef.current[idx] = el)}
                      className={`pb-4 lg:text-nowrap md:text-wrap text-nowrap text-[16px] hover:text-brown text-start ${
                        idx == activeTabIndex ? " text-brown" : "text-black"
                      }`}
                      onClick={() => setActiveTabIndex(idx)}
                    >
                      {tab.title}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="lg:w-4/5 w-full">{tabsData[activeTabIndex].content}</div>
          {/* <InfoProfile data={dataUser} /> */}
        </article>
      </section>
    </MainLayout>
  );
};
