import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../../../stores/reducers/cartReduce";

export const InfoProduct = ({ data, isLoading }) => {
  // console.log(data, "data");
  const [quantity, setQuantity] = useState(1);
  // console.log(quantity, "quantity");
  const handleQuantity = (el) => {
    if (el === "giam") {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      } else {
        toast.error("Phải chọn ít nhất 1 sản phẩm");
      }
    } else {
      setQuantity(quantity + 1);
    }
  };
  const dataService = [
    {
      icon: "https://bizweb.dktcdn.net/thumb/compact/100/508/659/themes/939030/assets/thumb_service_1.png?1710404714890",
      title: "5000+ mẫu đồng hồ",
    },
    {
      icon: "https://bizweb.dktcdn.net/thumb/compact/100/508/659/themes/939030/assets/thumb_service_2.png?1710404714890",
      title: "Miễn phí vận chuyển",
    },
    {
      icon: "https://bizweb.dktcdn.net/thumb/compact/100/508/659/themes/939030/assets/thumb_service_3.png?1710404714890",
      title: "Thanh toán COD, Online",
    },
    {
      icon: "https://bizweb.dktcdn.net/thumb/compact/100/508/659/themes/939030/assets/thumb_service_4.png?1710404714890",
      title: "Quà tặng thành viên",
    },
  ];

  const id = useSelector((state) => state.productId);
  const navigate = useNavigate();
  const [itemCart, setItemCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(itemCart));
  }, [itemCart]);
  const dispatch = useDispatch();
  // const [productId, setproductId] = useState(id);

  const handlerBuyToModel = (action) => {
    // e.preventDefault();
    const dataItem = {
      id: data.id,
      check: true,
      title: data.tenvi,
      photo: data.photo,
      price: data.giamoi,
      soluong: quantity,
    };
    console.log(dataItem);

    const dataCart = localStorage.getItem("cart");
    const obj = JSON.parse(dataCart);

    const existingItem = obj.find((cartItem) => cartItem.id === dataItem.id);

    if (!existingItem) {
      const updatedCart = [...obj, dataItem];
      dispatch(cartActions.setCartInfo(updatedCart));
      setItemCart(updatedCart);
      toast.success("Đã thêm vào giỏ hàng");
    } else {
      const updatedCart = obj.map((cartItem) => {
        if (cartItem.id === dataItem.id) {
          return {
            ...cartItem,
            soluong: cartItem.soluong + quantity,
          };
        }
        return cartItem;
      });
      setItemCart(updatedCart);
      dispatch(cartActions.setCartInfo(updatedCart));
      toast.success("Đã cập nhật vào giỏ hàng");
    }
    if (action === "buy") {
      navigate("/orders");
    }
  };
  return (
    <div className="w-full">
      <div className="countdown border border-red-500 rounded-md w-1/2 h-7"></div>
      {!isLoading && (
        <div className="border-b flex flex-col gap-y-6 pb-5">
          <p>
            Thương hiệu: <span className="text-red-500">{data.namebrand}</span>
          </p>
          <h2 className="text-xl">{data.tenvi}</h2>
          <div className="flex items-center gap-x-3">
            <div className="flex lg:flex-row md:flex-row flex-col items-center justify-center gap-x-3 px-4">
              {data?.gia && data.gia !== 0 ? (
                <div className="text-[#8C8C8C] text-base">
                  <span className="line-through">
                    {data.gia.toLocaleString()}
                  </span>
                  <span className="text-xs relative top-[-7px] underline">
                    đ
                  </span>
                </div>
              ) : (
                ""
              )}
              <div className="text-red-700 font-semibold">
                {data?.giamoi && data.giamoi !== "" ? (
                  <span className="relative">
                    <span className="text-3xl font-bold">
                      {data.giamoi.toLocaleString()}
                    </span>
                    <span className="text-xs relative top-[-7px] underline">
                      đ
                    </span>
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap w-[80%] justify-between gap-5">
            {dataService?.map((item, index) => (
              <div key={index} className="flex items-center gap-x-3">
                <img src={item?.icon} className="w-7 h-7" alt="" />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <form action="/" className=" w-full">
        <div className="flex flex-col gap-y-2 w-full my-5">
          <div className="flex lg:flex-row md:flex-row flex-col items-center justify-between lg:gap-y-0 md:gap-y-0 gap-y-2">
            <div className="flex items-center border w-[100px] justify-between lg:mr-0 md:mr-0 mr-[320px]">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleQuantity("giam");
                }}
                className="px-2 py-2 bg-white text-2xl hover:bg-[#2a3f50] w-full"
              >
                -
              </button>
              <input
                type="text"
                className="w-full outline-none border-none text-center focus:!outline-none focus:!border-none"
                min={1}
                value={quantity}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleQuantity("tang");
                }}
                className="px-2 py-2 bg-white text-2xl hover:bg-[#2a3f50] w-full"
              >
                +
              </button>
            </div>

            <div className="w-full lg:w-auto md:w-auto">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handlerBuyToModel("buy");
                }}
                type="button
            "
                className="lg:w-auto md:w-auto w-full uppercase text-lg font-bold bg-[#FF3E3E] hover:opacity-85 text-white px-10 py-3 rounded-lg"
              >
                mua ngay
              </button>
            </div>

            <div className="flex items-center justify-center lg:w-auto md:w-auto w-full">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handlerBuyToModel("addCart");
                }}
                type="submit
            "
                className="lg:w-auto md:w-auto w-full uppercase lg:text-md font-bold bg-[#2a3f50] hover:opacity-90 text-white lg:px-16 py-2 rounded-lg"
              >
                thêm vào giỏ
                <p className="font-normal text-[10px] uppercase">
                  Thêm trước thanh toán sau
                </p>
              </button>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <button className="w-full text-center text-white bg-[#2a3f50] font-bold rounded-lg py-2 hover:opacity-85">
              MUA QUA FUNFIN
              <p className="font-normal text-base">
                Đeo trước trả sau miễn lãi
              </p>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
