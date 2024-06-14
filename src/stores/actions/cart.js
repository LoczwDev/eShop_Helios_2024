import { cartActions } from "../reducers/cartReduce";

export const removeItem = (itemId) => (dispatch) => {
  dispatch(cartActions.resetCartItem(itemId));
};

export const changeQuantityItemCard = (itemId, quantity) => (dispatch) => {
  dispatch(cartActions.changeQuantityItem({ itemId, quantity }));
};
export const checkItemCart = (itemId, check) => (dispatch) => {
  dispatch(cartActions.changeCheckAdd({ itemId, check }));
};

export const checkOutCart = () => (dispatch) => {
  dispatch(cartActions.resetCartInfo());
  localStorage.removeItem("cart");
};

