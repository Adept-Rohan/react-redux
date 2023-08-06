import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    productData: [],
    userInfo: null
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.productData.find((product) => product.id === action.payload.id)
            if (item) {
                item.quantity += action.payload.quantity
            }
            else {
                state.productData.push(action.payload)
            }
        }
    }




})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer