import React from "react";

export const FormClientContact = ({ className }) => {
  return (
    <div className={`${className}`}>
      <h2 className="uppercase text-2xl font-bold">Thông tin liên hệ</h2>
      <p className="text-hard text-xs">
        Bạn hãy điền nội dung tin nhắn vào form dưới đây và gửi cho chúng tôi.
        <br />
        Chúng tôi sẽ trả lời bạn sau khi nhận được.
      </p>
      <form className="w-[65%] flex flex-col gap-y-3 my-10">
        <input
          type="text"
          placeholder="Họ và tên"
          className="text-black pl-3 py-2 focus:outline-none border border-inputBor rounded-sm"
        />
        <div className="flex lg:flex-row md:flex-row flex-col lg:gap-y-0 md:gap-y-0 gap-y-3 w-full gap-x-3">
          <div className="lg:w-1/2 md:w-1/2 w-full">
            <input
              type="number"
              placeholder="Số điện thoại"
              className="w-full text-black pl-3 py-2 focus:outline-none border border-inputBor rounded-sm"
            />
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full">
            <input
              type="email"
              placeholder="Email"
              className="w-full text-black pl-3 py-2 focus:outline-none border border-inputBor rounded-sm"
            />
          </div>
        </div>
        <div className="w-full">
          <textarea
            name=""
            className="w-full border border-inputBor resize-none pl-3 pt-2 focus:outline-none"
            placeholder="Nội dung"
            rows={5}
            id=""
          ></textarea>
        </div>
        <div className="w-1/3">
          <button
            type="submit"
            className="w-full text-white bg-[#516f86] px-5 py-2.5 hover:bg-blueDe duration-200 rounded-sm"
          >
            Gửi tin nhắn
          </button>
        </div>
      </form>
    </div>
  );
};
