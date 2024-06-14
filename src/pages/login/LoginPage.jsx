import React, { useEffect, useState } from "react";
import { MainLayout } from "../../components/MainLayout";
import { BreadCrumbs } from "../../components/BreadCrumbs";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../stores/reducers/userReduce";
import { login } from "../../services/userAPI";

export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate, isLoading } = useMutation({
    mutationFn: ({ email, password }) => {
      return login({
        email: email,
        password: password,
      });
    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));
      localStorage.setItem("account", JSON.stringify(data));
      toast.success("Đăng nhập thành công");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const submitLogin = (e) => {
    e.preventDefault();
    mutate({ email: email, password: password });
  };

  const [breadCrumbsData, setBreadCrumbsData] = useState([]);
  useEffect(() => {
    setBreadCrumbsData([
      {
        name: "Trang Chủ",
        link: "/",
      },
      {
        name: "Đăng nhập tài khoản",
        link: "/login",
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
                    onSubmit={submitLogin}
                  >
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 uppercase">
                        Đăng nhập
                      </h2>
                      <p className="mt-2 text-center text-base text-gray-600 max-w">
                        Nếu bạn chưa có tài khoản,
                        <Link
                          to={"/register"}
                          className="font-medium hover:text-brown"
                        >
                          đăng ký tại đây
                        </Link>
                      </p>
                    </div>
                    <div>
                      <div className="mt-1">
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          id="email"
                          name="email"
                          type="email"
                          value={email}
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
                          onChange={(e) => setPassword(e.target.value)}
                          id="password"
                          value={password}
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
                        Đăng nhập
                      </button>
                    </div>
                    <div className="text-center">
                      <Link to={"/"} className="text-sm">
                        Quên mật khẩu
                      </Link>
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
