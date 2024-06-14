import React, { useEffect, useState } from "react";
import { ItemCart } from "./ItemCart";
import { useDispatch, useSelector } from "react-redux";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { removeItem } from "../../stores/actions/cart";

export const ModalCart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [dataCartDisplay, setDataCartDisplay] = useState([]);
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    setDataCartDisplay(cartState?.cartInfo);
    calculateTotalPrice(cartState?.cartInfo);
  }, [cartState?.cartInfo]);

  const calculateTotalPrice = (cartItems) => {
    let total = 0;
    if (cartItems && cartItems.length > 0) {
      cartItems.forEach((item) => {
        total += item.soluong * item.price;
      });
    }
    setTotalPrice(total);
  };

  const addItemPayCart = (price) => {
    setTotalPrice((prevTotalPrice) => prevTotalPrice + price);
  };

  const handleRemoveItem = (dataItem, curPrice, quantity) => {
    dispatch(removeItem(dataItem.id));
    const priceItem = -quantity * curPrice;
    addItemPayCart(priceItem);
  };

  return (
    <div>
      {/* <label htmlFor="my_modal_6" className="btn">
        open modal
      </label> */}
    
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box !p-0 !max-w-[1000px] w-full !overflow-y-visible">
          <div className="text-white py-2 bg-blueDe px-3 flex gap-x-2 items-center">
            <IoIosCheckmarkCircleOutline className="text-2xl" />
            <span> Thêm vào giỏ hàng thành công!</span>
          </div>
          <div className="px-3 my-5">
            <Link to={"/cart"} className="text-black hover:text-brown">
              <span>
                Giỏ hàng của bạn hiện có{" "}
                <span className="pr-2 inline-block">
                  {cartState?.cartInfo != null
                    ? cartState?.cartInfo.length
                    : "0"}
                </span>
                sản phẩm
              </span>
            </Link>
          </div>

          <div className=" px-3">
            <div className="border">
              <div className=" bg-white z-[2000] border py-2 text-base font-bold">
                <div className="flex items-center justify-between">
                  <span className="block ml-28">Thông tin sản phẩm</span>
                  <span className="ml-56">Đơn giá</span>
                  <span>Số lượng</span>
                  <span>Thành tiền</span>
                </div>
              </div>
              <div className="overflow-y-auto scrollbar scrollbar-thumb-slate-200 scrollbar-w-1 h-full max-h-[275px] px-2">
                {dataCartDisplay?.map((item, index) => (
                  <ItemCart
                    data={item}
                    key={index}
                    addItemPayCart={addItemPayCart}
                    removeItemFromCart={handleRemoveItem}
                    totalPrice={totalPrice}
                    setTotalPrice={setTotalPrice}
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-end w-full gap-x-40 mt-5">
              <span>Tổng tiền:</span>
              <span className="text-price font-bold">
                {totalPrice.toLocaleString()}{" "}
                <span className="text-xs relative top-[-7px] underline">đ</span>
              </span>
            </div>
            <div className="flex justify-end w-full my-3">
              <button
                disabled={totalPrice === 0 ? true : false}
                className="w-1/3  duration-200 px-3 py-2 rounded border-[#516f86] border bg-[#516f86] hover:bg-white hover:text-[#516f86] text-white font-semibold"
              >
                <Link to={"/orders"}>Thanh Toán</Link>
              </button>
            </div>
          </div>

          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">
              Đóng
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
