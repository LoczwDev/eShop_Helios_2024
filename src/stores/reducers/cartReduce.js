import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = { cartInfo: null };

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    setCartInfo(state, action) {
      state.cartInfo = action.payload;
    },
    resetCartInfo(state) {
      state.cartInfo = null;
    },
    resetCartItem(state, action) {
      const itemId = action.payload;
      state.cartInfo = state.cartInfo.filter((item) => item.id !== itemId);
      localStorage.setItem("cart", JSON.stringify(state.cartInfo));
    },
    changeCheckAdd(state, action) {
      const { itemId, check } = action.payload;
      const itemToUpdate = state.cartInfo.find((item) => item.id !== itemId);
      itemToUpdate.check = check;
      localStorage.setItem("cart", JSON.stringify(state.cartInfo));
    },
    changeQuantityItem(state, action) {
      const { itemId, quantity } = action.payload;
      console.log(action.payload, "lllllllll");
      const itemToUpdate = state.cartInfo.find((item) => item.id === itemId);
      // console.log(itemId, "itemToUpdate");
      itemToUpdate.soluong = quantity;
      localStorage.setItem("cart", JSON.stringify(state.cartInfo));
    },
  },
});

const { actions: cartActions, reducer: cartReducer } = cartSlice;

export { cartActions, cartReducer };
