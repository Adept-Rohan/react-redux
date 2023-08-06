import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../redux/CartSlice'
import productReducer from '../redux/ProductSlice'

export const Store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer
    }
})