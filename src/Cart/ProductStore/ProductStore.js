import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductReducer";

export default () => {
  return configureStore({
    reducer: {
      selectedproducts: productReducer
    }
  });
};
