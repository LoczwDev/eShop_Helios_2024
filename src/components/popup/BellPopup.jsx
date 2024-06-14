import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import { TitlePopup } from "./TitlePopup";

export const BellPopup = () => {
  const [checkPopup, setCheckPopup] = useState(false);
  const hanlderChangePopup = () => {
    setCheckPopup(false);
  };
  return (
    <div className="relative z-[1000]">
      <div className="w-12 h-12 text-2xl text-white p-3 lg:ml-10 ml-2  rounded-full bg-[#2a3f50] border z-[999] border-[#ffffff] fixed bottom-[35px] m-0  !top-auto ">
        <button
          className="animate-popup-hand"
          onClick={() => setCheckPopup(!checkPopup)}
        >
          <FaBell className="z-[1000]" />
        </button>
        {/* {checkPopup && ( */}
          <TitlePopup
            hanlderClick={hanlderChangePopup}
            checkPopup={checkPopup}
          />
        {/* )} */}
      </div>
    </div>
  );
};
