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
            state.cart.push(action.payload)

        }
    },
})
   
export default cartSlice.reducer;