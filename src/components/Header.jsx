import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { IoChevronDownOutline } from "react-icons/io5";
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { NavItem } from "./NavItem";
import { getAllCate } from "../services/categoryAPI";
import { useQuery } from "@tanstack/react-query";
import { getAllBrand } from "../services/productAPI";
import axios from "axios";
import { stable } from "../constants";
import { Link, useNavigate } from "react-router-dom";
import { CartDropdown } from "./cart/CartDropdown";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { logout } from "../stores/actions/user";
import apiLink from "../constants/apiLink";

export const Header = ({ className, hanlderShowMenu }) => {
  const userState = useSelector((state) => state.user);
  const cartState = useSelector((state) => state.cart);
  const [valueInputSearch, setvalueInputSearch] = useState("");
  // const cartState = useSelector((state) => state.cart);
  // console.log(cartState.cartInfo, "cartData");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dataDrop, setDataDrop] = useState([]);
  const [dataBrand, setDataBrand] = useState([]);
  const [checkShowSeasrch, setCheckShowSeasrch] = useState(false);
  const handleShowSearch = () => {
    setCheckShowSeasrch(!checkShowSeasrch);
  };
  useEffect(() => {
    axios
      .get(`${apiLink.link}/product_list.php`)
      .then((response) => {
        setDataDrop(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${apiLink.link}/product_brand.php`)
      .then((response) => {
        setDataBrand(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [navIsVisible, setNavIsVisible] = useState(false);
  const hanldermenu = (curTate) => {
    setNavIsVisible(!curTate);
    hanlderShowMenu(!curTate);
  };
  const [slideNavHader, setSlideNavHader] = useState([
    "0px",
    "-190px",
    "-365px",
  ]);
  const [value, setValue] = useState(0);
  const setDownMLNavItem = (value) => {
    if (value > 2) {
      value = 2;
    }
    setValue(value + 1);
    // setSlideNavHader[value];
  };
  const setPlusMLNavItem = (value) => {
    if (value < 0) {
      value = 0;
    }
    setValue(value - 1);
    // setSlideNavHader[value];
  };
  const navItemInfo = [
    {
      id: "1",
      name: "Trang Chủ",
      check: true,
      type: "link",
      href: "/",
    },
    {
      id: "2",
      name: "Thương hiệu nổi bật",
      iconDropDown: <IoChevronDownOutline />,
      type: "dropDown",
      dataDrop: dataBrand.filter((item) => item.noibat != 1),
      check: false,
    },
    {
      id: "3",
      name: "Tin tức",
      check: false,
      type: "link",
      href: "/news",
    },
    {
      id: "4",
      name: "Hệ thống cửa hàng",
      check: false,
      type: "link",
      href: "/addresShop",
    },
    {
      id: "5",
      name: "Liên hệ",
      check: false,
      type: "link",
      href: "/contacts",
    },
    {
      id: "6",
      name: "Sản phẩm",
      iconDropDown: <IoChevronDownOutline />,
      check: false,
      type: "dropDownRow",
      dataDrop: dataDrop,
    },
    {
      id: "7",
      name: "Chính sách bán hàng",
      check: false,
      type: "link",
      href: "/policy",
    },
    {
      id: "8",
      name: "Hướng dẫn chọn size",
      check: false,
      type: "link",
      href: "/supportSize",
    },
  ];
  const handlerLogOut = () => {
    dispatch(logout());
    toast.success("Đăng xuất thành công");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  const handlerChangeSearch = (valueSearch) => {
    setvalueInputSearch(valueSearch);
  };
  const handlerSubmitSearch = () => {
    navigate(`/search?timkiem=${valueInputSearch}`);
  };

  return (
    <section className={`border-b`}>
      <header className={`relative w-full h-full lg:px-0 md:px-3 ${className}`}>
        <nav className="flex items-center justify-between w-full h-full">
          <div className="flex items-center lg:justify-normal md:justify-normal justify-between gap-x-5 h-full w-full">
            <div>
              <Link to={"/"}>
                <img
                  className="md:w-32 lg:h-[38px]"
                  src={stable.UPLOAD_THUMBS_BANNER + stable.STABLE_LOGO}
                  alt=""
                />
              </Link>
            </div>

            <div
              className={`flex-col transition-all duration-500 bg-white lg:bg-transparent md:bg-transparent mt-[0] lg:mt-0 md:mt-0 z-[1000] fixed lg:static md:static justify-start lg:justify-between md:justify-between top-0 bottom-0 flex lg:flex-row md:flex-row  lg:gap-x-5 items-center lg:max-w-[800px] md:max-w-[650px] ${
                navIsVisible ? "left-0 w-4/5" : "-left-full w-full"
              } `}
            >
              <div className="overflow-hidden w-full inline-grid">
                {!userState.userInfo ? (
                  <div className="flex lg:hidden md:hidden w-full text-white font-bold">
                    <button className="w-1/2 bg-[#2a3f50] px-2 py-1">
                      <Link to={"/login"}>Đăng nhập</Link>
                    </button>
                    <button className="w-1/2 bg-[#2a3f50] px-2 py-1">
                      <Link to={"/register"}>Đăng ký</Link>
                    </button>
                  </div>
                ) : (
                  <div className="flex lg:hidden md:hidden w-full text-white font-bold">
                    <button className="w-1/2 bg-[#2a3f50] px-2 py-1">
                      <Link to={"/profile"}>Tài khoản</Link>
                    </button>
                    <button
                      onClick={handlerLogOut}
                      className="w-1/2 bg-[#2a3f50] px-2 py-1"
                    >
                      Đăng xuất
                    </button>
                  </div>
                )}

                <div className="relative contents">
                  {/* {!isLoading && ( */}
                  <ul
                    className={`  lg:flex-row md:flex-row flex-col flex lg:items-center md:items-center items-start justify-between gap-x-3 lg:w-[1090px] md:w-[1090px] duration-200 `}
                    style={{ marginLeft: slideNavHader[value] }}
                  >
                    {navItemInfo.map((item) => (
                      <NavItem key={item.id} item={item} />
                    ))}
                  </ul>
                  {/* )} */}
                </div>
              </div>

              <div className="lg:flex md:flex hidden justify-center items-center gap-x-2">
                <button onClick={() => setPlusMLNavItem(value)}>
                  <GoChevronLeft />
                </button>
                <button onClick={() => setDownMLNavItem(value)}>
                  <GoChevronRight />
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between lg:gap-x-3 md:gap-x-3 gap-x-5">
            <div className="w-7 h-7 flex items-center justify-center text-white font-semibold rounded-full bg-[#2a3f50]">
              <IoIosSearch
                className="cursor-pointer"
                onClick={handleShowSearch}
              />
              <div
                className={`relative duration-500 transition-all ease-in-out  ${
                  !checkShowSeasrch
                    ? "invisible w-0 opacity-0"
                    : "visible w-[300px] opacity-100 z-[1000] "
                }`}
              >
                <div className="w-[300px] flex items-center absolute lg:right-[-7px] right-[-50px] lg:top-[-18px] top-[20px]">
                  <IoMdClose
                    onClick={handleShowSearch}
                    className="absolute left-2 text-xl z-[500] text-black font-bold"
                  />
                  <input
                    type="text"
                    onChange={(e) => handlerChangeSearch(e.target.value)}
                    placeholder="Nhập từ khóa tìm kiếm...."
                    className="py-1 w-[300px] rounded-full pl-10 border border-[#ebebeb] text-black outline-none"
                  />
                  <button
                    onClick={handlerSubmitSearch}
                    className="absolute right-2 text-xl z-[500] text-black font-bold"
                  >
                    <IoIosSearch />
                  </button>
                </div>
              </div>
            </div>
            <div className="relative group w-7 h-7 lg:flex md:flex hidden items-center justify-center text-white font-semibold rounded-full bg-[#2a3f50]">
              <CiUser />
              <div className="bg-[#fff] text-[#231f20] hidden group-hover:block w-[200px] absolute top-[39px] right-0 z-50 menu_acc">
                <ul className="p-2 text-sm">
                  {userState.userInfo ? (
                    <div>
                      <li>
                        <Link
                          to={"/profile"}
                          className="hover:text-brown"
                          href=""
                        >
                          Tài khoản
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={handlerLogOut}
                          className="hover:text-brown border-non outline-none"
                        >
                          Đăng xuất
                        </button>
                      </li>
                    </div>
                  ) : (
                    <div>
                      <li>
                        <Link
                          to={"/login"}
                          className="hover:text-brown"
                          href=""
                        >
                          Đăng nhập
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/register"}
                          className="hover:text-brown"
                          href=""
                        >
                          Đăng ký
                        </Link>
                      </li>
                    </div>
                  )}

                  <li>
                    <Link to={"/favorite"} className="hover:text-brown" href="">
                      Yêu thích
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <Link
              to={"/cart"}
              className=" group w-7 h-7 flex items-center justify-center text-white font-semibold rounded-full bg-[#2a3f50] relative"
            >
              <span className="absolute top-[1px] -right-2 text-xs bg-[#2a3f50] w-7 h-4 rounded-md text-right pr-1">
                {cartState?.cartInfo != null ? cartState?.cartInfo?.length : 0}
              </span>
              <IoBagOutline className="z-40" />
              <div className="absolute hidden group-hover:block right-0 top-[0] z-[1000] duration-500 ease-in-out transition-all pt-[45px]">
                <CartDropdown />
              </div>
            </Link>
            <div className="duration-200 lg:hidden md:hidden">
              {navIsVisible ? (
                <IoMdClose
                  onClick={() => hanldermenu(navIsVisible)}
                  className="w-7 h-7 duration-200 z-[1000] text-white relative"
                />
              ) : (
                <RiMenu3Line
                  onClick={() => hanldermenu(navIsVisible)}
                  className="w-7 h-7 duration-200"
                />
              )}
            </div>
          </div>
        </nav>
      </header>
    </section>
  );
};
