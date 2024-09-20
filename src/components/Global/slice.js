import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    token:"",
    userDetails:{},
    bookedTherapistId: ""
};

export const appSlice = createSlice({
    name:"Mindpal",
    initialState,
    reducers: {
        login: (state) => {
          state.isLoggedIn = true;
          localStorage.setItem('isLoggedIn', 'true');
          state.token 
        },
        logout: (state) => {
          state.isLoggedIn = false;
          localStorage.removeItem('isLoggedIn'); 
        },
        saveToken:(state, {payload})=>{
          state.token = payload
        },
        saveUserDetails:(state, {payload})=>{
          state.userDetails = payload
        },
        saveBookedTherapistId:(state, {payload})=>{
          state.bookedTherapistId = payload
        }
        ,
        checkLogin: (state) => {
          const loggedInStatus = localStorage.getItem('isLoggedIn');
          state.isLoggedIn = loggedInStatus ==='true';
        },
      },
    
})
export const {login, logout, saveUserDetails, saveToken, saveBookedTherapistId, checkLogin} = appSlice.actions
export default appSlice.reducer