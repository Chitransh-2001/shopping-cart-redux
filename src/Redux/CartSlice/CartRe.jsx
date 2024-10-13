import { createSlice } from "@reduxjs/toolkit";
export const CartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
        totalPrice:0
    },
    reducers:{
        addToCart:(state,action)=>{
            const newItem=action.payload;
            state.items.push(newItem);
            state.totalPrice +=newItem.price
        },
        clearCart:(state)=>{
            state.items=[],
            state.totalPrice=0
        }
    }
   

})
export const selectedItem = (state)=>state.cart.items
export const selectedtotal = (state)=>state.cart.totalPrice
export const {addToCart,clearCart} = CartSlice.actions
export default CartSlice.reducer