import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
};
export const CartSlicer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    DeleteCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (state) => state.id !== action.payload.id
      );
    },
  },
});

export const { AddToCart } = CartSlicer.actions;
export const { DeleteCartItem } = CartSlicer.actions;
export default CartSlicer.reducer;
