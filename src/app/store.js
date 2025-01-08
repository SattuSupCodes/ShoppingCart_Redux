import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";


export const store = configureStore({
  reducer: {
    allCart : cartReducer,
    
  },
});
// i am going to kill myself kgfkjhfdh