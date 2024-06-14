import React, { useEffect, useState } from "react";
import { ItemCartDropDown } from "./ItemCartDropDown";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../stores/actions/cart";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { ContainerCartNull } from "./container/ContainerCartNull";
import { Link } from "react-router-dom";
export const CartDropdown = () => {
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
  // console.log(dataCartDisplay, "dataCartDisplay");
  return (
    <div>
      {dataCartDisplay?.length > 0 ? (
        <div className="flex flex-col w-[350px] z-[1000] bg-white text-black ">
          <div className="flex flex-col justify-start scrollbar-w-1 scrollbar scrollbar-thumb-slate-400 overflow-auto max-h-[360px]">
            {dataCartDisplay?.map((item, index) => (
              <ItemCartDropDown
                data={item}
                key={index}
                addItemPayCart={addItemPayCart}
                removeItemFromCart={handleRemoveItem}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
              />
            ))}
          </div>
          <div className="pt-5">
            <div className="flex justify-between px-2">
              <p>Tổng tiền</p>
              <p className="text-sm text-price">
                {" "}
                {totalPrice.toLocaleString()}{" "}
                <span className="text-xs relative top-[-9px] right-1 underline">đ</span>
              </p>
            </div>
            <div className="w-full flex justify-center items-center pb-2">
              <Link to={"/orders"} className="w-[98%] text-center rounded-md py-2 bg-blueDe bg-opacity-80 hover:opacity-85 text-white font-medium">
                Thanh Toán
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <ContainerCartNull
            className={"flex flex-col w-[350px] z-[1000] bg-white text-black shadow-cartDown "}
          />
        </div>
      )}
    </div>
  );
};
