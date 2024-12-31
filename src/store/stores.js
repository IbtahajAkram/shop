import { configureStore } from "@reduxjs/toolkit";
import { CartSlicer } from "./creatSlicer";

const store = configureStore({
   reducer:{
    cartProducts:CartSlicer.reducer
   } 
})

export default store;