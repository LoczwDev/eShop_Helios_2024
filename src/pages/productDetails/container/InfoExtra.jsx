import React from "react";

export const InfoExtra = ({ className }) => {
  const data = [
    {
      title: "Tình trạng",
      content: "mới 100%",
    },
    {
      title: "Phụ kiện",
      content: "hộp, sổ, thẻ bảo hành 2021",
    },
    {
      title: "Kích thước mặt",
      content: "44mm",
    },
    {
      title: "Xuất xứ",
      content: "Casio",
    },
    {
      title: "Ref",
      content: "301.PX.7180.LR",
    },
    {
      title: "Movement",
      content: "Pin, Cal HUB4100",
    },
    {
      title: "Chất liệu",
      content: "vàng hồng 18k",
    },
    {
      title: "Chức năng",
      content: "giờ, phút, giây, ngày, chronograph",
    },
    {
      title: "Chống nước",
      content: "100m",
    },
    {
      title: "Dự trữ",
      content: "42h",
    },
  ];
  return (
    <div className="">
      <h2 className="pt-2 p-3 text-nowrap text-[17px] bg-blueDe px-6 text-white ">
        Thông số sản phẩm
      </h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-xs text-left rtl:text-right text-gray-500">
          <tbody>
            {data?.map((item, index) => (
              <tr
                key={index}
                className="odd:dark:bg-gray-900 odd:bg-white  even:bg-gray-50"
              >
                <th
                  scope="row"
                  className="px-6 font-medium text-gray-900 whitespace-nowrap"
                >
                  {item?.title}
                </th>
                <td className="px-6 py-4">{item.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-5 flex justify-center">
        <button className="text-white font-semibold bg-blueDe px-5 py-2 hover:opacity-85 duration-200 rounded-md">
          Xem cấu hình chi tiết
        </button>
      </div>
    </div>
  );
};
