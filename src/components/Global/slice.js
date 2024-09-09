import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false
};

export const appSlice = createSlice({
    name:"Mindpal",
    initialState,
    reducers:{
        login:(state)=>{
            state.isLoggedIn === true
        },
        logout: (state) => {
            state.isLoggedIn = false; 
        }
    }
    
})
export const {login, logout} = appSlice.actions
export default appSlice.reducer