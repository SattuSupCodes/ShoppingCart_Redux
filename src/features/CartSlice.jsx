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
    reducers: {},
})
   
export default cartSlice.reducer;