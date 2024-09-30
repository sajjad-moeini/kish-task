import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./ModalInitialState";

type modalType ={
  type : "add"|"edit" | "delete"
}


const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    setModalType: (state, {payload}:PayloadAction<modalType>) => {
      state.modalType = payload.type;
    },

  },
});

export const { openModal, closeModal,setModalType } = modalSlice.actions;
export default modalSlice.reducer;
