import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeQuantityItemCard } from "../../stores/actions/cart";
import { stable } from "../../constants";
import toast from "react-hot-toast";

export const ItemCartDropDown = ({
  data,
  addItemPayCart,
  removeItemFromCart,
  totalPrice,
  setTotalPrice,
}) => {
  console.log(data?.photo, "data");
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
    <div className="flex border-b py-2 px-2 ">
      <div>
        <input
          type="checkbox"
          checked={displayCheck}
          onChange={handlerChangeAddCart}
        />
      </div>
      <div className="w-[40%] ml-5">
        <img
          className="w-full"
          src={stable.UPLOAD_THUMBS_PRODUCT + data?.photo}
          alt=""
        />
      </div>
      <div className="flex-col w-full">
        <div className="flex justify-between">
          <span className="text-[13px] text-[#231f20] text-wrap w-[160px] line-clamp-2 hover:text-brown">
            {data.title}
          </span>
          <button
            onClick={handleRemoveItem}
            className="border-none outline-none text-sm text-[#30656b] hover:text-brown "
          >
            Xóa
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center border w-[100px] justify-between lg:mr-0 md:mr-0 mr-[320px]">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleQuantity("giam");
              }}
              className="px-2 py-1 bg-white text-xs hover:bg-[#2a3f50] w-full"
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
              className="px-2 py-1 bg-white text-xs hover:bg-[#2a3f50] w-full"
            >
              +
            </button>
          </div>
          <div className="text-price">
            <span className="text-sm font-bold ">
              {(data?.price).toLocaleString()}
            </span>
            <span className="text-sm relative top-[-7px] underline">đ</span>
          </div>
        </div>
      </div>
    </div>
  );
};
