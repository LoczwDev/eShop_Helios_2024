import axios from "axios";
import apiLink from "../constants/apiLink";

export const getAllCate = async ({}) => {
  try {
    const { data } = await axios.get(
      // "http://localhost/public_html/backend/api/product_list.php"
      `${apiLink.link}/product_list.php`
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
