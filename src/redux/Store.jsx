import { configureStore }from "@reduxjs/toolkit";
import cartReducer from '../redux/CartSlice'


export const Store = configureStore({
    reducer: {
        cart : cartReducer
    }
})