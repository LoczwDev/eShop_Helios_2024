import React, { useEffect, useState } from "react";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineFavorite } from "react-icons/md";
import { PiEyeLight } from "react-icons/pi";
import { SlBag } from "react-icons/sl";
import stable from "../../../constants/Stable";
import { Link } from "react-router-dom";
import { ModalProductDetails } from "../../../components/product/ModalProductDetails";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../stores/reducers/cartReduce";
import { ContainerTestModel } from "../../../components/product/ContainerTestModel";
import { setProductId } from "../../../stores/actions/productId";
import parse from "html-react-parser";

export const Articles = ({ className, data, checkCol }) => {
  const cartState = useSelector((state) => state.cart);
  const [itemsFavorite, setItemsFavorite] = useState(
    JSON.parse(localStorage.getItem("favorite")) || []
  );
  // const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [itemCart, setItemCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(itemsFavorite));
  }, [itemsFavorite]);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(itemCart));
  }, [itemCart]);

  const handleAddFavorite = (item) => {
    const dataOld = localStorage.getItem("favorite");
    const obj = JSON.parse(dataOld);

    if (!itemsFavorite.includes(item)) {
      const updatedFavorite = [...obj, item];

      setItemsFavorite(updatedFavorite);
      toast.success("Đã thêm vào yêu thích");
    } else {
      const updatedFavorite = itemsFavorite.filter((i) => i !== item);
      setItemsFavorite(updatedFavorite);
      toast.success("Đã xóa khỏi yêu thích");
    }
  };

  const hanlderAddToCart = (item) => {
    const dataItem = {
      id: item.id,
      check: true,
      title: item.tenvi,
      photo: item.photo,
      price: item.giamoi,
      soluong: 1,
    };

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
            soluong: cartItem.soluong + 1,
          };
        }
        return cartItem;
      });
      dispatch(cartActions.setCartInfo(updatedCart));

      setItemCart(updatedCart);
      toast.success("Đã cập nhật vào giỏ hàng");
    }
  };
  // const productId = useSelector((state) => state.productId);
  const handleOpenModal = (productId) => {
    dispatch(setProductId(productId));
    document.getElementById("my_modal_1").showModal();
  };
  return (
    <div
      className={`bg-white item relative rounded-lg cursor-pointer py-4 group ${className}`}
    >
      {data?.giakm != "" && (
        <div className="absolute flex items-center justify-center top-4 left-3 p-4 rounded-full bg-[#eb0000] text-white font-bold z-10">
          <span className="absolute block">{data?.giakm}%</span>
        </div>
      )}

      <div className={`flex ${checkCol ? "flex-row" : "flex-col"} `}>
        <div
          className={`overflow-hidden rounded-lg bg-transparent h-[200px] relative ${
            checkCol ? "w-1/5" : "w-full"
          } `}
        >
          <img
            className=" object-cover hover:scale-110 duration-500 ease-in-out w-full h-full"
            src={data?.photo ? stable.UPLOAD_THUMBS_PRODUCT + data?.photo : ""}
            alt=""
          />
          <div
            style={{ height: "calc(100% - 20px)" }}
            className="flex duration-500 inset-y-full group-hover:inset-y-12 opacity-0 group-hover:opacity-100 ease-in-out flex-col item-center absolute text-2xl right-7 gap-2"
          >
            <div className="w-8 h-8 p-2 flex justify-center items-center rounded-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:bg-[#b61615] hover:text-white duration-200 bg-white">
              <button onClick={() => handleAddFavorite(data)}>
                {itemsFavorite.some((item) => item.id === data.id) ? (
                  <MdOutlineFavorite className="text-red-500" />
                ) : (
                  <GrFavorite />
                )}
              </button>
            </div>
            {/* modal */}
            <div>
              <div
                onClick={() => handleOpenModal(data?.id)}
                className="w-8 h-8 p-2 flex justify-center items-center rounded-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:bg-[#b61615] hover:text-white duration-200 bg-white"
              >
                <PiEyeLight />
              </div>
            </div>

            <div className="w-8 h-8 p-2 flex justify-center items-center rounded-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:bg-[#b61615] hover:text-white duration-200 bg-white">
              <label
                htmlFor="my_modal_6"
                onClick={() => hanlderAddToCart(data)}
              >
                <SlBag />
              </label>
            </div>
          </div>
        </div>
        <div
          className={`${checkCol ? "flex-col justify-start w-4/5 px-5" : ""}`}
        >
          <div className={`${checkCol ? "" : "text-center px-4"} h-[50px] `}>
            <Link
              to={`/products/${data?.id}`}
              className="font-normal text-base line-clamp-2 hover:text-brown"
            >
              {data?.tenvi}
            </Link>
          </div>
          <div
            className={`flex lg:flex-row items-center flex-col ${
              checkCol ? "" : " justify-center "
            }  gap-x-3  h-[40px]`}
          >
            {data?.gia && data.gia !== 0 ? (
              <div className="text-[#8C8C8C] text-xs">
                <span className="line-through">
                  {data.gia.toLocaleString()}
                </span>
                <span className="text-xs relative top-[-7px] underline">đ</span>
              </div>
            ) : (
              ""
            )}
            {/* gia */}
            <div className="text-red-700 font-semibold">
              {data?.giamoi && data.giamoi !== "" ? (
                <span className="relative">
                  <span className="text-md">
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
          {checkCol && (
            <div
              className="text-[14px] line-clamp-3"
              dangerouslySetInnerHTML={{
                __html: parse(
                  data?.mota == "" ? "Hiện sản phẩm chưa có mô tả" : data?.mota
                ),
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
