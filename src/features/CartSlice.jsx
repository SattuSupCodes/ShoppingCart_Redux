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
    reducers: { //reducers are like (or are) functions jo decide krta hai ki state kaise badlegi jab koi action trigger hota hai
        addToCart : (state,action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id);//checking if the item (action.payload.id) already exists in the cart or not
            if (find>=0){
                state.cart[find].quantity += 1;//agar item hai toh quantity increment ho rhi else item pushed in cart
            }
            else {
                state.cart.push(action.payload); //isse kya hua ki if i add same item in cart, voh same id mai increment hoga naaki ek aur object ki tarah add hoga list mai, bhuji?
            }//action.payload here represents the item(product) that I want to add in the cart. Payload product data carry krha
            saveCartToLocalStorage(state.cart)
            console.log("adding to cart: ", action.payload)
            //i hope ye sbh process kaam aye humari site pe 
//reducer humesha ek nayi state bnata hai
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
                  } //yha pe the action.payload holds the item's id. When action is triggered, action.payload will carry the id of the product whose quantity you want to reduce
                  return item;
                });
                saveCartToLocalStorage(state.cart)
            },


    },
        
       
   
});

export const {addToCart, getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity} = cartSlice.actions;
   
export default cartSlice.reducer; //ahhaa

//Action.payload = voh data hoti hai jisko hum kisi action ke saath bhejte hai , taaki reducer ko pata chale ki state ko kaise update krna hai.
//payload is the data jo kaam keliye chahiye.