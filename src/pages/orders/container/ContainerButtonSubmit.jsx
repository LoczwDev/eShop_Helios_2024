import { useMutation } from "@tanstack/react-query";
import React from "react";
import { addOrder } from "../../../services/orderAPI";
import toast from "react-hot-toast";
import { checkOutCart } from "../../../stores/actions/cart";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineChevronLeft } from "react-icons/md";
import emailjs from "@emailjs/browser";
import apiLink from "../../../constants/apiLink";

export const ContainerButtonSubmit = ({ dataSubmit, httt }) => {
  const publicKey = "PYmdWkWN8dX7N09cD";
  const templateId = "template_dlcnwbk";
  const serviceId = "service_33fearn";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mutate: mutateOrder, isLoading } = useMutation({
    mutationFn: ({ formData }) => {
      return addOrder({
        formData: formData,
      });
    },
    onSuccess: (data) => {
      toast.success("Dat hang thanh cong");
      setTimeout(() => {
        dispatch(checkOutCart());
        navigate("/");
      }, 2000);
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  var templateParams = {
    name: dataSubmit?.hoten,
    form_email: dataSubmit?.email,
  };

  const handleSubmitOrder = (e) => {
    if (!dataSubmit?.userId) {
      e.preventDefault();
      toast.error("Bạn cần phải đăng nhập trước khi thanh toán");
      return;
    }
    if (httt && httt === 638) {
      e.preventDefault();
      mutateOrder({ formData: dataSubmit });

      emailjs.send(serviceId, templateId, templateParams, publicKey).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    } else if (dataSubmit?.tonggia >= 50000000) {
      e.preventDefault();
      toast.error("Đơn hàng của bạn phải nhỏ hơn 50 triệu");
    }
  };
  return (
    <div className="w-full my-3">
      <form
        name="form_momoATM"
        method="POST"
        action={`${apiLink.payment}`}
        className="flex lg:flex-row md:flex-row flex-col-reverse gap-y-5 justify-between items-center w-full"
      >
        <div className="flex items-center text-[#2a9dcc] hover:text-[#2a6395] duration-200">
          <MdOutlineChevronLeft />
          <Link to={"/cart"}>Quay về giỏ hàng</Link>
        </div>
        <div>
          <input type="text" hidden name="name" value={dataSubmit?.hoten} />
          <input type="tel" hidden name="phone" value={dataSubmit?.phone} />
          <input type="text" hidden name="address" value={dataSubmit?.diachi} />
          <input type="text" hidden name="ghichu" value={dataSubmit?.ghichu} />
          <input
            type="number"
            hidden
            name="tonggia"
            value={dataSubmit?.tonggia}
          />
        </div>
        <button
          onClick={handleSubmitOrder}
          type="submit"
          className="px-5 py-3 bg-[#357ebd] hover:bg-[#2a6395] font-medium text-white rounded-md text-nowrap lg:w-auto md:w-auto w-full"
        >
          Đặt hàng
        </button>
      </form>
    </div>
  );
};
