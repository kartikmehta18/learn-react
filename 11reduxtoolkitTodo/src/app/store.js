// import configureStore from "@reduxjs/toolkit";
// import todoReducer from "../features/todo/todoSlice";
// export const store = configureStore({
//     reducer : todoReducer
// })
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

const store = configureStore({
    reducer: todoReducer
});

export default store;

