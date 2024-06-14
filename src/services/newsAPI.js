import axios from "axios";
import apiLink from "../constants/apiLink";

export const getPhotoNews = async ({}) => {
  try {
    const { data } = await axios.get(`${apiLink.link}/news.php`);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
export const getPolicyNews = async ({}) => {
  try {
    const { data } = await axios.get(`${apiLink.link}/news_policy.php`);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
export const getNewsById = async ({ newsId }) => {
  try {
    const { data } = await axios.get(
      // `${apiLink}/news_ById.php?id=${newsId}`
      `${apiLink.link}/news_ById.php?id=${newsId}`
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
