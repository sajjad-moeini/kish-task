import { combineReducers } from "@reduxjs/toolkit";
import ProductsSlice from "./slices/Products/Products.Slice";

const reducers = combineReducers({
  products:ProductsSlice
});

export default reducers;
