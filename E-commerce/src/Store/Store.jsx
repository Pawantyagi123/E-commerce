import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./app/CartSlice";
import productSlice from "./app/ProductSlice";
export const store=configureStore({
    reducer:{ 
        cart:counterSlice,
        productData:productSlice
    }
})