import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authData: null
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signIn: (state, action) => {
            console.log(action?.payload)
            localStorage.setItem("profile", JSON.stringify({ ...action?.payload })),
                
            state.authData = {...state.authData, authData: action.payload}
        },
        logOut: (state, action) => {
            localStorage.clear()
            state.authData = {...state.authData, authData: null}
        },
    },
})

export const { signIn, logOut } = authSlice.actions;
//
export const selectItems = (state) => state.auth.authData

export default authSlice.reducer;