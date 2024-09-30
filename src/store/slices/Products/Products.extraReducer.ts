import { createAsyncThunk } from "@reduxjs/toolkit";
import { Http } from "../../../configs/axiosConfig";
import { AllProducts, Product } from "./Products.types";
import { setErrMessage } from "./Products.Slice";
import { appUrls } from "../../../Utils/AppUrls";

type getAllProductsApiErr = {
response:{
       data:{
              error:string
       }
}
}

export const getAllProducts = createAsyncThunk<AllProducts>(
       "Products/getAllProducts",
       async (_, { dispatch,rejectWithValue }) => {
         try {
           const response = await Http.get(``)
             .then((res) => {
               if (res.status === 200) {
                 return res.data;
               }
             })
             .catch((error:getAllProductsApiErr) => {
              dispatch(setErrMessage({message:error.response.data.error}))
               return rejectWithValue(error);
             });
           return response;
         } catch (error) {
           return rejectWithValue(error);
         }
       }
     );


     export const filterProductsById = createAsyncThunk<AllProducts,{query:string}>(
       "Products/filterProductsById",
       async ({query}, { dispatch,rejectWithValue }) => {
         try {
           const response = await Http.get(`${query}`)
             .then((res) => {
               if (res.status === 200) {
                 return res.data;
               }
             })
             .catch((error:getAllProductsApiErr) => {
              dispatch(setErrMessage({message:error.response.data.error}))
               return rejectWithValue(error);
             });
           return response;
         } catch (error) {
           return rejectWithValue(error);
         }
       }
     );

     export const GetProductsById = createAsyncThunk<Product,{id:string}>(
       "Products/GetProductsById",
       async ({id}, { dispatch,rejectWithValue }) => {
              
         try {
           const response = await Http.get(`/${id}`)
             .then((res) => {
               if (res.status === 200) {
                 return res.data;
               }
             })
             .catch((error:getAllProductsApiErr) => {
              dispatch(setErrMessage({message:error.response.data.error}))
               return rejectWithValue(error);
             });
           return response;
         } catch (error) {
           return rejectWithValue(error);
         }
       }
     );