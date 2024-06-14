import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ArticlesNews } from "../../home/container/ArticlesNews";
import { ItemFIlterTool } from "./ItemFIlterTool";
import apiLink from "../../../constants/apiLink";

export const FilterToolNews = ({ className, data }) => {
  const [dataDrop, setDataDrop] = useState(null);
  const [dataBrand, setDataBrand] = useState(null);
  // const [dropDown, setDropDown] = useState(false);
  // const dropDownHandle = () => {
  //   setDropDown((curState) => !curState);
  // };
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
  const navItemInfo = [
    {
      id: "1",
      name: "Trang Chủ",
      check: true,
      type: "link",
    },
    {
      id: "2",
      name: "Thương hiệu nổi bật",
      iconDropDown: <IoChevronDownOutline />,
      type: "dropDown",
      dataDrop: dataBrand,
      check: false,
    },
    {
      id: "3",
      name: "Tin tức",
      check: false,
      type: "link",
    },
    {
      id: "4",
      name: "Hệ thống cửa hàng",
      check: false,
      type: "link",
    },
    {
      id: "5",
      name: "Liên hệ",
      check: false,
      type: "link",
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
    },
    {
      id: "8",
      name: "Hướng dẫn chọn size",
      check: false,
      type: "link",
    },
  ];
  return (
    <div className={`${className}`}>
      <h2 className="text-2xl font-bold text-black">Danh mục tin tức</h2>
      <div className="">
        {navItemInfo?.map((item, index) => (
          // <div key={index}>
          //   {item.type === "link" ? (
          //     <div className="flex items-center justify-between my-5 text-black hover:text-brown">
          //       <span className="text-sm">{item.name}</span>
          //     </div>
          //   ) : item.type === "dropDown" ? (
          //     <div className="w-full">
          //       <button
          //         onClick={dropDownHandle}
          //         className="flex justify-between w-full hover:text-brown text-black"
          //       >
          //         <span className="text-sm">{item.name}</span>
          //         <div
          //           className={`${
          //             dropDown ? "rotate-180" : "rotate-0"
          //           } duration-300 ease-in-out transition-all`}
          //         >
          //           {item.iconDropDown}
          //         </div>
          //       </button>
          //       <div className="w-full">
          //         <ul
          //           className={`${
          //             dropDown ? "block" : "hidden"
          //           } duration-300 transition-all ease-in-out p-2`}
          //         >
          //           {item?.dataDrop
          //             ?.filter((item) => item.noibat != 1)
          //             .map((item, index) => (
          //               <li className="mt-3" key={index}>
          //                 {item.title}
          //               </li>
          //             ))}
          //         </ul>
          //       </div>
          //     </div>
          //   ) : (
          //     <div className="w-full">
          //       <button
          //         onClick={dropDownHandle}
          //         className="flex justify-between w-full hover:text-brown text-black"
          //       >
          //         <span className="text-sm">{item.name}</span>
          //         <div
          //           className={`${
          //             dropDown ? "rotate-180" : "rotate-0"
          //           } duration-300 ease-in-out transition-all`}
          //         >
          //           {item.iconDropDown}
          //         </div>
          //       </button>
          //       <div className="w-full">
          //         <ul
          //           className={`${
          //             dropDown ? "block" : "hidden"
          //           } duration-300 transition-all ease-in-out p-2 text-sm`}
          //         >
          //           {item?.dataDrop?.map((item, index) => (
          //             <div className="w-full">
          //               <li
          //                 className="mt-3 flex justify-between w-full"
          //                 key={index}
          //               >
          //                 {item.title}
          //                 <div>
          //                   {item?.items?.length > 0 && (
          //                     <IoChevronDownOutline />
          //                   )}
          //                 </div>
          //               </li>
          //               <div>
          //                 <ul className="text-sm">
          //                   {item?.items?.map((el, subIndex) => (
          //                     <li key={subIndex} className="mt-3">
          //                       <Link to={`${el.href}`}>{el.title}</Link>
          //                     </li>
          //                   ))}
          //                 </ul>
          //               </div>
          //             </div>
          //           ))}
          //         </ul>
          //       </div>
          //     </div>
          //   )}
          // </div>
          <ItemFIlterTool key={index} item={item} />
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-bold text-black">Danh mục tin tức</h2>
        <div className="flex flex-wrap gap-y-3">
          {data
            ?.filter((item) => item.noibat !== 0)
            .slice(0, 4)
            .map((item, index) => (
              <ArticlesNews
                key={index}
                data={item}
                check={true}
                displayContent={false}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
