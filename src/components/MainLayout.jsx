import React, { useState } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { BellPopup } from "./popup/BellPopup";
import { ButtonTopPage } from "./ButtonTopPage";
import { ButtonMessager } from "./ButtonMessager";
import { ModalProductDetails } from "./product/ModalProductDetails";

export const MainLayout = ({ children, checkFloat }) => {
  const [curStateFloat, setCurStateFloat] = useState(false);
  const hanlderShowMenu = () => {
    setCurStateFloat(!curStateFloat);
  };
  return (
    // lg:px-0 px-2
    <div className="mx-auto relative">
      <div
        className={` absolute w-full h-full bg-black z-[100] top-0 bg-opacity-50 duration-200 transition-all ease-in-out ${
          checkFloat || curStateFloat ? "block" : "hidden"
        }`}
      ></div>
      <Header
        className={"max-w-6xl mx-auto h-[64px]"}
        hanlderShowMenu={hanlderShowMenu}
      />
      {children}
      <BellPopup />
      <ButtonTopPage />
      <ButtonMessager />
      <ModalProductDetails />
      <Footer />
    </div>
  );
};
