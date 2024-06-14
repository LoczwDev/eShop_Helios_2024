import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainLayout } from "../../components/MainLayout";
import { BreadCrumbs } from "../../components/BreadCrumbs";
import { ItemCart } from "../../components/cart/ItemCart";
import { Link } from "react-router-dom";
import { removeItem } from "../../stores/actions/cart";
import { ContainerCartNull } from "../../components/cart/container/ContainerCartNull";

export const CartPage = () => {
  const [breadCrumbsData, setBreadCrumbsData] = useState([]);
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
  useEffect(() => {
    setBreadCrumbsData([
      {
        name: "Trang Chủ",
        link: "/",
      },
      {
        name: "Giỏ hàng",
        link: "/cart",
      },
    ]);
  }, []);

  return (
    <MainLayout>
      <section className="max-w-6xl mx-auto">
        <BreadCrumbs data={breadCrumbsData} />
        <article>
          <div>
            <div className="w-full">
              <h2 className="text-2xl font-bold my-5">Giỏ hàng</h2>
              {dataCartDisplay?.length > 0 ? (
                <div>
                  <div className="border">
                    <div className=" bg-white z-[2000] border py-2 text-base font-bold lg:block md:hidden hidden">
                      <div className="flex items-center justify-between">
                        <span className="block ml-28">Thông tin sản phẩm</span>
                        <span className="ml-56">Đơn giá</span>
                        <span>Số lượng</span>
                        <span>Thành tiền</span>
                      </div>
                    </div>
                    <div className="h-full max-h-[275px] px-2 overflow-y-auto scrollbar scrollbar-w-2 scrollbar-thumb-slate-400">
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
                      <span className="text-xs relative top-[-7px] underline">
                        đ
                      </span>
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
              ) : (
                <ContainerCartNull className={"my-10"} />
              )}
            </div>
          </div>
        </article>
      </section>
    </MainLayout>
  );
};
