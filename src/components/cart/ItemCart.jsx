import React, { useEffect, useState } from "react";
import { stable } from "../../constants";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import {
  changeQuantityItemCard,
  checkItemCart,
} from "../../stores/actions/cart";

export const ItemCart = ({
  data,
  addItemPayCart,
  removeItemFromCart,
  totalPrice,
  setTotalPrice,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [displayCheck, setDisplayCheck] = useState(data?.check);
  const [curPrice, setCurPrice] = useState(data?.price);
  const dispatch = useDispatch();

  useEffect(() => {
    setQuantity(data?.soluong);
    setCurPrice(data?.soluong * data?.price);
  }, [data]);
  const handleQuantity = (action) => {
    if (action === "giam") {
      if (quantity > 1) {
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
        setCurPrice(newQuantity * data?.price);
        dispatch(changeQuantityItemCard(data?.id, newQuantity));
      } else {
        toast.error("Phải chọn ít nhất 1 sản phẩm");
      }
    } else {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      setCurPrice(newQuantity * data?.price);
      dispatch(changeQuantityItemCard(data?.id, newQuantity));
    }
  };

  const handlerChangeAddCart = (e) => {
    const check = e.target.checked;
    setDisplayCheck(check);
    const priceItem = check ? quantity * data?.price : 0;
    setCurPrice(priceItem);
    addItemPayCart(check ? priceItem : -curPrice);
    dispatch(checkItemCart(data?.id, check));
  };

  const handleRemoveItem = () => {
    removeItemFromCart(data, curPrice, quantity);
    setTotalPrice(totalPrice - curPrice);
  };

  return (
    <div className="flex justify-between lg:items-center md:items-start items-start border-b lg:py-0 md:py-0 py-3">
      <input
        type="checkbox"
        checked={displayCheck}
        data-price={quantity * data?.price}
        onChange={handlerChangeAddCart}
      />
      <div className="flex items-center gap-x-3 w-1/2">
        <img
          className="lg:w-32 md:w-32 w-20 h-auto"
          src={stable.UPLOAD_THUMBS_PRODUCT + data?.photo}
          alt=""
        />
        <div className="flex-col justify-normal lg:flex md:hidden hidden">
          <span>{data?.title}</span>
          <button
            onClick={handleRemoveItem}
            className="border-none outline-none hover:text-brown text-black"
          >
            Xóa
          </button>
        </div>
      </div>
      <div className="lg:flex lg:flex-row items-center lg:mr-0 md:mr-[50%] lg:text-wrap md:text-nowrap text-wrap lg:w-[440px] md:w-auto w-auto">
        <span className="lg:hidden md:block block ">{data?.title}</span>
        <div className="lg:mr-[155px] md:mr-0 mr-0">
          <span className="text-red-500">
            {(data?.price).toLocaleString()}{" "}
            <span className="text-xs relative top-[-7px] underline">đ</span>
          </span>
        </div>
        <div>
          <div className="flex items-center border w-[100px] justify-between lg:mr-0 md:mr-[320px] mr-0">
            <button
              onClick={() => handleQuantity("giam")}
              className="px-2 bg-white text-2xl hover:bg-[#2a3f50] hover:text-white w-full"
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
              onClick={() => handleQuantity("tang")}
              className="px-2 bg-white text-2xl hover:bg-[#2a3f50] hover:text-white w-full"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={handleRemoveItem}
        className="border-none outline-none hover:text-brown text-black lg:hidden md:flex flex"
      >
        Xóa
      </button>

      <div className="lg:block md:hidden hidden">
        <span className="text-red-500">
          {(quantity * data?.price).toLocaleString()}
          <span className="text-xs relative top-[-7px] underline">đ</span>
        </span>
      </div>
    </div>
  );
};
