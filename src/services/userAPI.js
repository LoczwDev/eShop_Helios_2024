import axios from "axios";
import apiLink from "../constants/apiLink";

export const login = async ({ email, password }) => {
  try {
    const { data } = await axios.post(
      `${apiLink.link}/login.php?quanly=login`,
      { email, password }
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
export const register = async ({ email, password, username, ten, phone }) => {
  try {
    const { data } = await axios.post(
      `${apiLink.link}/register.php?quanly=register`,
      { email, password, username, ten, phone }
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
export const changePass = async ({
  email,
  old_password,
  new_password,
  confirm_password,
}) => {
  try {
    const { data } = await axios.post(
      `${apiLink.link}/user.php?quanly=changePass`,
      { email, old_password, new_password, confirm_password }
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
