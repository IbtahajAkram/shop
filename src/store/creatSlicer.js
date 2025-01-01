import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
  whishList : []
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
    AddToWhishList : (state,action)=>{
// const {id,title, thumbnail,price} = action.payload;
state.whishList.push(action.payload);
console.log('whishList:',action.payload)
    }
  },
});

export const { AddToCart } = CartSlicer.actions;
export const {AddToWhishList} = CartSlicer.actions
export const { DeleteCartItem } = CartSlicer.actions;
export default CartSlicer.reducer;
