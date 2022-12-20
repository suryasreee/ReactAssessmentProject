import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducer";

export default () => {
  return configureStore({
    reducer: {
      todos: todoReducer
    }
  });
};
