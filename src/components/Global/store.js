import { configureStore } from "@reduxjs/toolkit";
import mindpalReducer from '../Global/slice'

export const store = configureStore({
    reducer:{
        Mindpal: mindpalReducer
    }
})