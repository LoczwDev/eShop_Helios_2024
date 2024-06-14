import axios from "axios";
import apiLink from "../constants/apiLink";

export const getImgBanner = async ({}) => {
  try {
    const { data } = await axios.get(
      // "http://localhost/public_html/backend/api/banner.php"
      `${apiLink.link}/banner.php`
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
