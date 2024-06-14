import axios from "axios";
import apiLink from "../constants/apiLink";

export const getAllProduct = async (filters = "") => {
  try {
    const { data } = await axios.get(`${apiLink.link}/product.php`, {
      params: filters,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getProductById = async ({ productId }) => {
  try {
    const { data } = await axios.get(
      `${apiLink.link}/productById.php?id=${productId}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getPhotoGallery = async ({ productId }) => {
  try {
    const { data } = await axios.get(
      `${apiLink.link}/gallery.php?id=${productId}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
// ${apiLink}/productById.php?id=754

export const getAllBrand = async ({}) => {
  try {
    const { data } = await axios.get(`${apiLink.link}/product_brand.php`);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
export const getSizeProduct = async () => {
  try {
    const { data } = await axios.get(
      `${apiLink.link}/product.php?quanly=size`
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
export const getTypeProduct = async () => {
  try {
    const { data } = await axios.get(
      `${apiLink.link}/product.php?quanly=type`
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
export const getPerProduct = async () => {
  try {
    const { data } = await axios.get(
      `${apiLink.link}/product.php?quanly=per`
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

// export const getAllProduct = async (filters) => {
//   try {
//     const { data } = await axios.get(
//       "${apiLink}/product.php",
//       {
//         params: filters
//       }
//     );
//     return data;
//   } catch (error) {
//     console.log(error);
//     throw error; // Rethrow error để có thể xử lý ở phía gọi hàm nếu cần
//   }
// };
