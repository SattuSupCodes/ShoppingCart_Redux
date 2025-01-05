import { createSlice } from '@reduxjs/toolkit'
import {products} from '../Product_data.js'
const initialState = { 
    cart : [],
    items : products,
    totalQuantity : 0, 
    totalPrice : 0,
 }

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart : (state,action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id);
            if (find>=0){
                state.cart[find].quantity += 1;
            }
            else {
                state.cart.push(action.payload); //isse kya hua ki if i add same item in cart, voh same id mai increment hoga naaki ek aur object ki tarah add hoga list mai, bhuji?
            }
            console.log("adding to cart: ", action.payload)
            //i hope ye sbh process kaam aye humari site pe 

        }
    },
});

export const {addToCart} = cartSlice.actions;
   
export default cartSlice.reducer;