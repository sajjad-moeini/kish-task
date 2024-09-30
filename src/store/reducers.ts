import { combineReducers } from "@reduxjs/toolkit";
import ProductsSlice from "./slices/Products/Products.Slice";
import ModalSlice from "./slices/Modal/ModalSlice";

const reducers = combineReducers({
  products:ProductsSlice,
  modal:ModalSlice
});

export default reducers;
