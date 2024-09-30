import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: reducers,
});



export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
