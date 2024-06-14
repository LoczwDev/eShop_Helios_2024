import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MdOutlinePayment } from "react-icons/md";
import { ContainerOrderProduct } from "./container/ContainerOrderProduct";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { SelectAddressVN } from "../../components/selectAddressVN/SelectAddressVN";
import { Radio } from "antd";
import { ContainerButtonSubmit } from "./container/ContainerButtonSubmit";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

export const OrdersPage = () => {
  const [httt, setHttt] = useState(null);
  const dataInputClient = [
    {
      type: "input",
      label: "Email",
      brand: "email",
      id: "email",
    },
    {
      type: "input",
      label: "Họ và tên",
      brand: "text",
      id: "hoten",
    },
    {
      type: "inputComponent",
      label: "Số điện thoại",
      brand: "tel",
      id: "phone",
    },
    {
      type: "input",
      label: "Địa chỉ (tùy chọn)",
      brand: "text",
      id: "diachi",
    },
    {
      type: "select",
      label: "",
      brand: "component",
    },
    {
      type: "textarea",
      label: "Ghi chú tùy chọn",
      id: "ghichu",
    },
  ];
  const cartState = useSelector((state) => state.cart);
  const userState = useSelector((state) => state.user);
  useEffect(() => {
    setFormData((prevData) => ({ ...prevData, httt: httt }));
  }, [httt]);

  const onChange = (e) => {
    setHttt(e.target.value);
  };
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartState?.cartInfo?.forEach((item) => {
      totalPrice += item.price * item.soluong;
    });
    return totalPrice;
  };

  const totalPrice = calculateTotalPrice();

  const products = cartState?.cartInfo?.map((item) => ({
    id: item.id,
    ten: item.title,
    giamoi: item.price,
    soluong: item.soluong,
    photo: item.photo,
  }));

  const [formData, setFormData] = useState({
    email: "",
    hoten: "",
    phone: "",
    diachi: "",
    tamtinh: 0,
    phiship: 0,
    city: "",
    district: "",
    wards: "",
    ghichu: "",
    products: products,
    tonggia: totalPrice,
    tinhtrang: 1,
    userId: userState?.userInfo != null ? userState?.userInfo?.id : null,
  });
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div className="mx-auto lg:h-screen h-full ">
      <div className="flex lg:flex-row md:flex-row flex-col-reverse justify-between gap-x-5 h-full">
        <div className="lg:hidden md:hidden block">
          <ContainerButtonSubmit dataSubmit={formData} httt={httt} />
        </div>
        <div className="lg:w-3/4 md:w-full lg:pl-48 md:pl-24 lg:py-10 md:py-10 py-0">
          <h2 className="text-3xl font-medium text-[#2a9dcc] pb-3 lg:block md:block hidden">
            Ego Helios
          </h2>
          {/* <button onClick={handlerSubmit}>CHECKOUT</button> */}
          <div className="flex lg:flex-row md:flex-row flex-col justify-between gap-x-2">
            <div className="lg:w-[60%] md:w-[60%] w-full">
              <div className="flex w-full items-center justify-between">
                <h3 className="text-2xl font-medium">Thông tin nhận hàng</h3>
                {userState?.userInfo == null && (
                  <Link
                    to={"/login"}
                    className="text-nowrap border-[#2a9dcc] rounded-full flex items-center justify-center p-2 text-[#2a9dcc] cursor-pointer"
                  >
                    <CiUser className="color-[#2a9dcc] " />
                    <span>Đăng nhập</span>
                  </Link>
                )}
              </div>
              <div className="w-full">
                {dataInputClient.map((item, index) => (
                  <div key={index} className="relative w-full mb-3">
                    {item.type === "input" && (
                      <div>
                        <input
                          id={item.id}
                          type={item.brand}
                          onChange={handleInputChange}
                          className="rounded px-3 py-2.5 border border-[#d9d9d9] outline-none focus:border-[#66afe9] !focus:shadow-[0 0 0 1px #66afe9] peer w-full"
                        />
                        <label
                          htmlFor={item.id}
                          className={`text-[#999] text-[.84em] absolute text-sm left-3 ease-in-out duration-300 transition-all peer-focus:top-0 ${
                            formData[item.id] ? "top-0" : "top-[10px]"
                          }`}
                        >
                          {item.label}
                        </label>
                      </div>
                    )}
                    {item.type === "inputComponent" && (
                      <div>
                        <PhoneInput
                          country={"vn"}
                          className={
                            "peer !focus:border-[#66afe9] outline-none border border-[#d9d9d9] !focus:shadow-[0 0 0 1px #66afe9]"
                          }
                          value={formData.phone}
                          onChange={(phone) =>
                            setFormData({ ...formData, phone })
                          }
                        />
                      </div>
                    )}
                    {item.type === "select" && (
                      <div>
                        <SelectAddressVN
                          onSelectChange={(type, value) => {
                            setFormData({ ...formData, [type]: value });
                          }}
                          onWardChange={(value) => {
                            setFormData({ ...formData, wards: value });
                          }}
                        />
                      </div>
                    )}
                    {item.type === "textarea" && (
                      <div>
                        <textarea
                          id={item.id}
                          rows={2}
                          onChange={handleInputChange}
                          className="w-full py-4 border border-[#d9d9d9] outline-none px-3 peer focus:border-[#66afe9] focus:shadow-[0 0 0 1px #66afe9]"
                        ></textarea>
                        <label
                          htmlFor={item.id}
                          className={`text-[#999] text-[.84em] absolute left-3 ease-in-out duration-300 transition-all peer-focus:top-0  ${
                            formData[item.id] ? "top-0" : "top-[10px]"
                          }`}
                        >
                          {item.label}
                        </label>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-[40%] md:w-[40%] w-full">
              <div className="w-full">
                <h2 className="text-2xl font-medium">Vận chuyển</h2>
                <div className="bg-[#d1ecf1] w-full rounded-md py-2.5 text-[#0c5460] px-3">
                  <p>Vui lòng nhập thông tin giao hàng</p>
                </div>
              </div>
              <div className="my-16 w-full">
                <Radio.Group
                  onChange={onChange}
                  value={httt}
                  className="w-full"
                >
                  <h2 className="text-2xl font-medium">Thanh toán</h2>
                  <div className="py-3 px-2 flex items-center justify-between gap-x-3 border rounded-b w-full">
                    <Radio value={638} className="w-full">
                      <div className="flex items-center justify-normal w-[285px]">
                        <div className="lg:w-[145%] w-full text-nowrap">
                          Thu hộ (COD)
                        </div>
                        <MdOutlinePayment className="text-2xl" />
                      </div>
                    </Radio>
                  </div>
                  <div className="py-3 px-2 flex items-center gap-x-3 border rounded-b w-full">
                    <Radio value={639} className="w-full">
                      <div className="flex items-center justify-normal w-[285px]">
                        <div className="lg:w-[145%] w-full text-nowrap">
                          Chuyển khoản
                        </div>
                        <MdOutlinePayment className="text-2xl" />
                      </div>
                    </Radio>
                  </div>
                  <div className="py-3 px-2 flex items-center gap-x-3 border rounded-b w-full">
                    <Radio value={640} className="w-full">
                      <div className="flex items-center justify-normal w-[285px]">
                        <div className="lg:w-[145%] w-full text-nowrap">
                          Thu toán qua MoMo
                        </div>
                        <MdOutlinePayment className="text-2xl" />
                      </div>
                    </Radio>
                  </div>
                </Radio.Group>
              </div>
            </div>
          </div>
        </div>
        <ContainerOrderProduct
          dataProductOrder={cartState?.cartInfo}
          dataOrder={formData}
          httt={httt}
        />
      </div>
    </div>
  );
};
