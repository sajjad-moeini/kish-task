import { ActionReducerMapBuilder, createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./products.initialState";
import { AllProducts, errMessage, productSliceInitialState } from "./Products.types";
import { getAllProducts } from "./Products.extraReducer";



const ProductsSlice = createSlice({
  name: "Products",
  initialState: initialState,
  reducers: {
       setErrMessage: (state, {payload}:PayloadAction<errMessage>) => {
              state.err = payload.message;
            },
  },
  extraReducers: (builder:ActionReducerMapBuilder<productSliceInitialState>) => {
       builder
       .addCase(getAllProducts.pending, (state) => {
         state.isLoadingData= true;
       })
       .addCase(getAllProducts.fulfilled, (state, { payload }:PayloadAction<AllProducts>) => {
         state.isLoadingData = false;
         state.Data = payload;
       })
       .addCase(getAllProducts.rejected, (state) => {
         state.isLoadingData = false;
       })



  },
});
export const { setErrMessage } = ProductsSlice.actions;
export default ProductsSlice.reducer;
