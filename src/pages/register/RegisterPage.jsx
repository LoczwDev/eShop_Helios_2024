import React, { useEffect, useState } from "react";
import { MainLayout } from "../../components/MainLayout";
import { BreadCrumbs } from "../../components/BreadCrumbs";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { register } from "../../services/userAPI";

export const RegisterPage = () => {
  const [breadCrumbsData, setBreadCrumbsData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ten, setTen] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation({
    mutationFn: ({ email, password, username, ten, phone }) => {
      return register({
        email: email,
        password: password,
        username: username,
        ten: ten,
        phone: phone,
      });
    },
    onSuccess: (data) => {
      toast.success("Đăng ký thành công, chuyển trang đăng nhập trong 2 giây");
      navigate("/login");
      setEmail("");
      setPassword("");
      setPhone("");
      setTen("");
      setUsername("");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  // useEffect(() => {

  //   setEmail()
  // }, []);

  const submitRegister = (e) => {
    e.preventDefault();
    mutate({
      email: email,
      password: password,
      username: username,
      ten: ten,
      phone: phone,
    });
  };
  useEffect(() => {
    setBreadCrumbsData([
      {
        name: "Trang Chủ",
        link: "/",
      },
      {
        name: "Đăng ký tài khoản",
        link: "/register",
      },
    ]);
  }, []);
  return (
    <MainLayout>
      <section className="max-w-6xl mx-auto">
        <div>
          <BreadCrumbs data={breadCrumbsData} />
          <div>
            <div className="flex flex-col justify-center lg:px-8 mb-5">
              <div className="sm:mx-auto sm:w-full lg:max-w-[400px]">
                <div className="bg-white py-8 px-4 shadow-display sm:rounded-lg sm:px-10">
                  <form
                    className="space-y-3"
                    action="#"
                    method="POST"
                    onSubmit={submitRegister}
                  >
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 uppercase">
                        Đăng ký
                      </h2>
                      <p className="mt-2 text-center text-base text-gray-600 max-w">
                        Nếu bạn đã có tài khoản,
                        <Link
                          to={"/login"}
                          className="font-medium hover:text-brown"
                        >
                          đăng nhập tại đây
                        </Link>
                      </p>
                    </div>
                    <div>
                      <div className="mt-1">
                        <input
                          onChange={(e) => setTen(e.target.value)}
                          id="name"
                          name="ten"
                          type="text"
                          required
                          className="outline-none bg-[#ebebeb] py-3 appearance-none rounded-md relative block w-full px-3 border border-gray-300 placeholder-gray-500 text-gray-900"
                          placeholder="Tên"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="mt-1">
                        <input
                          onChange={(e) => setUsername(e.target.value)}
                          id="username"
                          name="username"
                          type="text"
                          required
                          className="outline-none bg-[#ebebeb] py-3 appearance-none rounded-md relative block w-full px-3 border border-gray-300 placeholder-gray-500 text-gray-900"
                          placeholder="Username"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="mt-1">
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          id="email"
                          name="email"
                          type="email"
                          autocomplete="email"
                          required
                          className="outline-none bg-[#ebebeb] py-3 appearance-none rounded-md relative block w-full px-3 border border-gray-300 placeholder-gray-500 text-gray-900"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="mt-1">
                        <input
                          onChange={(e) => setPhone(e.target.value)}
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          className="outline-none bg-[#ebebeb] py-3 appearance-none rounded-md relative block w-full px-3 border border-gray-300 placeholder-gray-500 text-gray-900"
                          placeholder="Số điện thoại"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="mt-1">
                        <input
                          onChange={(e) => setPassword(e.target.value)}
                          id="password"
                          name="password"
                          type="password"
                          required
                          className="outline-none bg-[#ebebeb] py-3 appearance-none rounded-md relative block w-full px-3 border border-gray-300 placeholder-gray-500 text-gray-900"
                          placeholder="Mật khẩu"
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="group py-3 relative w-full flex justify-center bg-black hover:bg-white hover:text-brown hover:border-brown px-4 border border-transparent text-sm font-medium text-white"
                      >
                        Đăng ký
                      </button>
                    </div>
                    <div className="text-center">
                      <p className="my-3 text-base">Hoặc đăng nhập bằng</p>
                      <div className="flex gap-x-2 justify-center w-full">
                        <div className="w-[130px] h-[37px]">
                          <img
                            className="w-full h-full"
                            src="https://bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg"
                            alt=""
                          />
                        </div>

                        <div className="w-[130px] h-[37px]">
                          <img
                            className="w-full h-full"
                            src="https://bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
