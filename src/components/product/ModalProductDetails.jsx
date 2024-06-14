import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { stable } from "../../constants";
import axios from "axios";
import apiLink from "../../constants/apiLink";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../../services/productAPI";
import { useDispatch, useSelector } from "react-redux";
import { productIdActions } from "../../stores/reducers/productIdReduce";
import { cartActions } from "../../stores/reducers/cartReduce";
import { useNavigate } from "react-router-dom";

export const ModalProductDetails = () => {
  const id = useSelector((state) => state.productId);
  const navigate = useNavigate();
  const [itemCart, setItemCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(itemCart));
  }, [itemCart]);
  const dispatch = useDispatch();
  const [productId, setproductId] = useState(id);

  const [quantity, setQuantity] = useState(1);
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
  useEffect(() => {
    setproductId(id);
  }, [id]);

  const {
    data: dataProductDetails,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryFn: () => getProductById({ productId: productId }),
    queryKey: ["productById", productId],
    onSuccess: (data) => {},
    enabled: !!productId,
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  useEffect(() => {
    refetch();
  }, [productId, refetch]);
  const handlerBuyToModel = (action) => {
    // e.preventDefault();
    const dataItem = {
      id: dataProductDetails.id,
      check: true,
      title: dataProductDetails.tenvi,
      photo: dataProductDetails.photo,
      price: dataProductDetails.giamoi,
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
    <div>
      <dialog id="my_modal_1" className="modal">
        {dataProductDetails && !isFetching && !isLoading && (
          <div className="modal-box !max-w-[50rem] !px-5 !py-2">
            <div className="modal-action">
              <form method="dialog">
                <button className="text-black hover:text-brown duration-200 text-lg font-medium">
                  X
                </button>
              </form>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <img
                  src={stable.UPLOAD_THUMBS_PRODUCT + dataProductDetails?.photo}
                  alt=""
                />
              </div>
              <div>
                <h1>{dataProductDetails?.tenvi}</h1>
                <div className="flex items-center gap-x-3">
                  <div className="flex lg:flex-row md:flex-row flex-col items-center justify-center gap-x-3 px-4">
                    {dataProductDetails?.gia && dataProductDetails.gia !== 0 ? (
                      <div className="text-[#8C8C8C] text-base">
                        <span className="line-through">
                          {dataProductDetails.gia.toLocaleString()}
                        </span>
                        <span className="text-xs relative top-[-7px] underline">
                          đ
                        </span>
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="text-red-700 font-semibold">
                      {dataProductDetails?.giamoi &&
                      dataProductDetails.giamoi !== "" ? (
                        <span className="relative">
                          <span className="text-3xl font-bold">
                            {dataProductDetails.giamoi.toLocaleString()}
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
                <form action="/" className=" w-full">
                  <div className="flex flex-col gap-y-2 w-full my-5">
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
                    <div className="flex lg:flex-row md:flex-row flex-col items-center justify-between lg:gap-y-0 md:gap-y-0 gap-y-2 gap-x-5">
                      <div className="w-full lg:w-1/2 md:w-1/2">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handlerBuyToModel("buy");
                          }}
                          type="button
          "
                          className="lg:w-full md:w-full w-full uppercase text-base font-bold bg-[#FF3E3E] hover:opacity-85 text-white px-10 py-3 rounded-lg"
                        >
                          mua ngay
                        </button>
                      </div>

                      <div className="flex items-center justify-center lg:w-auto md:w-auto w-full">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handlerBuyToModel("add");
                          }}
                          type="submit
          "
                          className="lg:w-full md:w-full w-full uppercase text-base font-bold bg-[#2a3f50] hover:opacity-90 text-white lg:px-16 rounded-lg"
                        >
                          thêm vào giỏ
                          <p className="font-normal text-[10px] uppercase text-nowrap">
                            Thêm trước thanh toán sau
                          </p>
                        </button>
                      </div>
                    </div>
                    <div className="w-full flex justify-center items-center">
                      <button className="w-full text-center text-white bg-[#2a3f50] font-bold rounded-lg py-2 hover:opacity-85">
                        MUA QUA FUNFIN
                        <p className="font-normal text-[10px]">
                          Đeo trước trả sau miễn lãi
                        </p>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
};
