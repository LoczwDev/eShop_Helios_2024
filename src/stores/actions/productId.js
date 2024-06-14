import { productIdActions } from "../reducers/productIdReduce";

export const setProductId = (itemId) => (dispatch) => {
  dispatch(productIdActions.setProductId(itemId));
};
