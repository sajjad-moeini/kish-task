import React from "react";
import { Product } from "../store/slices/Products/Products.types";
import { useAppDispatch } from "../store";
import { GetProductsById } from "../store/slices/Products/Products.extraReducer";
import {
  openModal,
  setModalType,
} from "../store/slices/Modal/ModalSlice";

// function ProductBox({name,data,id}:Product) {
function ProductBox({ name, data, id }: any) {
  const dispatch = useAppDispatch();
  const openModalHandler = () => {
    dispatch(GetProductsById({ id }));
    dispatch(openModal());
  };
  const showProductDetaileHandler = () => {
    dispatch(setModalType({ type: "showDetail" }));
    openModalHandler();
  };
  const editProductInfoHandler = () => {
    dispatch(setModalType({ type: "edit" }));
    openModalHandler();
  };
  const editProductNameHandler = () => {
    dispatch(setModalType({ type: "editName" }));
    openModalHandler();
  };
  return (
    <div className="w-full mx-auto flex justify-center items-center">
      <div className="bg-white w-64 h-64 mx-auto rounded-lg p-2 flex flex-col justify-between items-center">
        <div className="text-center text-black text-lg md:text-xl lg:text-2xl font-semibold">
          {name}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex justify-center items-center">
            <button
              className="text-white px-4 py-2 bg-blue-600 rounded-lg"
              onClick={showProductDetaileHandler}
            >
              More ...
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="text-white px-4 py-2 bg-orange-600 rounded-lg"
              onClick={editProductInfoHandler}
            >
              Edit
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="text-white px-4 py-2 bg-orange-600 rounded-lg"
              onClick={editProductNameHandler}
            >
              Edit Name
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button className="text-white px-4 py-2 bg-red-600 rounded-lg">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
