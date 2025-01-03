import { createSlice } from '@reduxjs/toolkit'
import ProductList from '../Product_data'
const initialState = { 
    cart : [],
    items : ProductList,
    totalQuantity : 0, 
    totalPrice : 0,
 }

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
})
   
export default cartSlice.reducer;