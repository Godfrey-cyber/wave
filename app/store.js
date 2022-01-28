import { configureStore } from "@reduxjs/toolkit"
import basketReducer from "../slices/basketSlice"
// import authReducer from "../slices/authSlice"
import wishlistReducer from "../slices/wishlistSlice"

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        // auth: authReducer
        wishlist: wishlistReducer
    }
});