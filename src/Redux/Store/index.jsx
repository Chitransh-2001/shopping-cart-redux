import { configureStore } from "@reduxjs/toolkit";
import Counter from "../CounterSlice/Counter";
import CartRe from "../CartSlice/CartRe";
export const store = configureStore({
    reducer:{
        counter:Counter,
        cart:CartRe
    }
})