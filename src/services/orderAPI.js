import axios from "axios";
import apiLink from "../constants/apiLink";

export const addOrder = async ({ formData }) => {
  try {
    const { data } = await axios.post(
      `${apiLink.link}/order.php?quanly=order`,
      {
        userId: formData.userId,
        products: formData.products,
        hoten: formData.hoten,
        sodienthoai: formData.phone,
        diachi: formData.diachi,
        email: formData.email,
        httt: formData.httt,
        tamtinh: formData.tamtinh,
        tonggia: formData.tonggia,
        city: formData.city,
        district: formData.district,
        wards: formData.wards,
        phiship: formData.phiship,
        ghichu: formData.ghichu,
        tinhtrang: formData.tinhtrang,
      }
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
export const getOrderByUser = async ({ userId }) => {
  try {
    const { data } = await axios.get(
      // "http://localhost/public_html/backend/api/product_list.php"
      `${apiLink.link}/order.php?userId=${userId}`
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
export const getStatusOrder = async () => {
  try {
    const { data } = await axios.get(
      // "http://localhost/public_html/backend/api/product_list.php"
      `${apiLink.link}/statusOrder.php`
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
export const getDetailsOrder = async ({ madonhang }) => {
  try {
    const { data } = await axios.get(
      // "http://localhost/public_html/backend/api/product_list.php"
      `${apiLink.link}/order.php?madonhang=${madonhang}`
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
