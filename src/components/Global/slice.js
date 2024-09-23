import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    token:"",
    userDetails:{},
    bookedTherapistId: "",
    therapistDetails:{}
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
          state.userDetails={}
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
        },
        checkLogin: (state) => {
          const loggedInStatus = localStorage.getItem('isLoggedIn');
          state.isLoggedIn = loggedInStatus ==='true';
        },
        saveTherapistDetails:(state, {payload})=>{
          state.therapistDetails = payload
        }
      },
    
})
export const {login, logout, saveUserDetails, saveToken, saveBookedTherapistId, checkLogin, saveTherapistDetails} = appSlice.actions
export default appSlice.reducer