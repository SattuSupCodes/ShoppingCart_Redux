import { createSlice } from '@reduxjs/toolkit'
import {products} from '../Product_data.js'
const loadCartFromLocalStorage = () => {
    try {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
        console.error("Failed to load cart from localStorage", error);
        return [];
    }
};
const saveCartToLocalStorage = (cart) => {
    try {
        localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
        console.error("Failed to save cart to localStorage", error);
    }
};

const initialState = { 
    cart : loadCartFromLocalStorage(),
    items : products,
    totalQuantity : 0, 
    totalPrice : 0,
 }

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: { //reducers are like (or are) functions
        addToCart : (state,action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id);
            if (find>=0){
                state.cart[find].quantity += 1;
            }
            else {
                state.cart.push(action.payload); //isse kya hua ki if i add same item in cart, voh same id mai increment hoga naaki ek aur object ki tarah add hoga list mai, bhuji?
            }
            saveCartToLocalStorage(state.cart)
            console.log("adding to cart: ", action.payload)
            //i hope ye sbh process kaam aye humari site pe 

        },
        getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.cart.reduce(
              (cartTotal, cartItem) => {
                console.log("carttotal", cartTotal);
                console.log("cartitem", cartItem);
                const { price, quantity } = cartItem;
                console.log(price, quantity);
                const itemTotal = price * quantity;
                cartTotal.totalPrice += itemTotal;
                cartTotal.totalQuantity += quantity;
                return cartTotal;
              },
              {
                totalPrice: 0,
                totalQuantity: 0,
              }
            );
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;},

            removeItem: (state, action) => {
                state.cart = state.cart.filter((item) => item.id !== action.payload);
                saveCartToLocalStorage(state.cart)
            },
            increaseItemQuantity: (state, action) => {
                state.cart = state.cart.map((item) => {
                  if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 };
                  }
                  return item;
                });
                saveCartToLocalStorage(state.cart);
            },
            decreaseItemQuantity: (state, action) => {
                state.cart = state.cart.map((item) => {
                  if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity - 1 };
                  }
                  return item;
                });
                saveCartToLocalStorage(state.cart)
            },


    },
        
       
   
});

export const {addToCart, getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity} = cartSlice.actions;
   
export default cartSlice.reducer; //ahhaa