import { createSlice } from "@reduxjs/toolkit";

const productIdInitiaState = null;
const productIdSlice = createSlice({
  name: "productId",
  initialState: productIdInitiaState,
  reducers: {
    setProductId(state, action) {
      const itemId = action.payload;
      localStorage.setItem("productId", JSON.stringify(itemId));
      return itemId;
    },
    resetProductId(state, action) {
      return null;
    },
  },
});

const productIdActions = productIdSlice.actions;
const productIdReducer = productIdSlice.reducer;

export { productIdActions, productIdReducer };
