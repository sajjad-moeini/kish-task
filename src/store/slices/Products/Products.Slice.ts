import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import initialState from "./products.initialState";
import { productSliceInitialState } from "./Products.types";



const ProductsSlice = createSlice({
  name: "Products",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder:ActionReducerMapBuilder<productSliceInitialState>) => {
    
     



  },
});

export default ProductsSlice.reducer;
