import React from "react";

export const ButtonMessager = () => {
  return (
    <div className="fixed bottom-[35px] lg:right-[60px] right-1 flex items-center z-[999] gap-x-2">
      <div className="flex flex-col bg-white text-black text-[10px] w-[150px] p-1 px-2 rounded-2xl shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
        <p>Xin chào!</p>
        <p>Mình có thể giúp gì cho bạn</p>
      </div>
      <div className="w-10 h-10 rounded-full p-2 bg-white shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
        <img
          src="https://bizweb.dktcdn.net/100/494/472/files/messenger-icon.png?v=1705730138380"
          alt=""
        />
      </div>
    </div>
  );
};
