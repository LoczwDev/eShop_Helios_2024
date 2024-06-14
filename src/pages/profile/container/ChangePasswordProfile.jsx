import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { changePass } from "../../../services/userAPI";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

export const ChangePasswordProfile = () => {
  const userState = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [old_password, setOld_password] = useState("");

  const [new_password, setNew_password] = useState("");

  const [confirm_password, setConfirm_password] = useState("");
  useEffect(() => {
    setEmail(userState?.userInfo?.email);
  }, [userState]);

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ email, old_password, new_password, confirm_password }) => {
      return changePass({
        email: email,
        old_password: old_password,
        new_password: new_password,
        confirm_password: confirm_password,
      });
    },
    onSuccess: (data) => {
      toast.success("Đổi mật khẩu thành công");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error, "pass");
    },
  });
  const handlerSubmit = (e) => {
    e.preventDefault();
    mutate({
      email: email,
      old_password: old_password,
      new_password: new_password,
      confirm_password: confirm_password,
    });
  };
  return (
    <div>
      <h2 className="text-2xl font-medium uppercase">đổi mật khẩu</h2>
      <p className="py-4">
        Để đảm bảo tính bảo mật bạn vui lòng đặt lại mật khẩu với ít nhất 8 kí
        tự
      </p>
      <div class="w-full bg-white  md:mt-0 sm:max-w-md">
        <div class="">
          <div className="pt-2">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Mật khẩu cũ *
            </label>
            <input
              type="password"
              value={old_password}
              onChange={(e) => setOld_password(e.target.value)}
              name="passwordOld"
              id="password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  block w-full p-2.5 focus:outline-none"
              required=""
            />
          </div>
          <div className="pt-2">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Mật khẩu mới *
            </label>
            <input
              type="password"
              name="passwordNew"
              value={new_password}
              onChange={(e) => setNew_password(e.target.value)}
              id="password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  block w-full p-2.5 focus:outline-none"
              required=""
            />
          </div>
          <div className="pt-2">
            <label
              for="confirm-password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Xác nhận lại mật khẩu *
            </label>
            <input
              type="password"
              name="passwordConfirm "
              value={confirm_password}
              onChange={(e) => setConfirm_password(e.target.value)}
              id="confirm-password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  block w-full p-2.5 focus:outline-none"
              required=""
            />
          </div>

          <button
            type="submit"
            onClick={handlerSubmit}
            class="w-1/2 my-5 text-white bg-primary-600 duration-200 border hover:bg-white bg-blueDe  hover:border-blueDe hover:text-black font-bold  text-sm px-5 py-2.5 text-center"
          >
            ĐẶT LẠI MẬT KHẨU
          </button>
        </div>
      </div>
    </div>
  );
};
