import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";
import rotateReducer from "./reducers/rotateSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        rotate: rotateReducer
    }
})