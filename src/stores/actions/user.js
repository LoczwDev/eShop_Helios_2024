import { userActions } from "../reducers/userReduce";


export const logout = () => (dispatch) => {
  dispatch(userActions.resetUserInfo());
  localStorage.removeItem("account");
};
