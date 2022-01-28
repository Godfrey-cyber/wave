import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeFromWishlist: (state, action) => {
            const index = state.items.findIndex(wishlistItem => wishlistItem.id === action.payload.id)
            let newWishlist = [...state.items]
            if (index >= 0) {
                newWishlist.splice(index, 1)
            } else {
                console.log('cannnot reemove item');
            }
            state.items = newWishlist
        },
        
    },
})

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
//
export const selectItems = (state) => state.wishlist.items
export const selectTotal = (state) => state.wishlist.items.reduce((total, item) => total + item.price, 0)

export default wishlistSlice.reducer;