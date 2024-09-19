import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false
};

export const appSlice = createSlice({
    name:"Mindpal",
    initialState,
    reducers: {
        login: (state) => {
          state.isLoggedIn = true;
          localStorage.setItem('isLoggedIn', 'true');
        },
        logout: (state) => {
          state.isLoggedIn = false;
          localStorage.removeItem('isLoggedIn'); 
        },
        checkLogin: (state) => {
          const loggedInStatus = localStorage.getItem('isLoggedIn');
          state.isLoggedIn = loggedInStatus ==='true';
        },
      },
    
})
export const {login, logout, checkLogin} = appSlice.actions
export default appSlice.reducer