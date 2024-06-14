import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReduce";
import { cartReducer } from "./reducers/cartReduce";
import { productIdReducer } from "./reducers/productIdReduce";

const userInfoFromStorage = localStorage.getItem("account")
  ? JSON.parse(localStorage.getItem("account"))
  : null;
const cartInfoFromStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : null;
const productId = localStorage.getItem("productId")
  ? JSON.parse(localStorage.getItem("productId"))
  : null;

const initialState = {
  user: { userInfo: userInfoFromStorage },
  cart: { cartInfo: cartInfoFromStorage },
  productId: productId,
};
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    productId: productIdReducer
  },
  preloadedState: initialState,
});

export default store;
