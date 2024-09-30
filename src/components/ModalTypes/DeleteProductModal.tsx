import React from "react";
import { useAppDispatch, useAppSelector} from "../../store";
import { closeModal } from "../../store/slices/Modal/ModalSlice";
import { DeleteProduct } from "../../store/slices/Products/Products.extraReducer";


function DeleteProductModal() {
  const dispatch = useAppDispatch();
  const {  id } = useAppSelector(
    (state) => state.products.singleProduct
  );

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  const deleteProductHandler = () => {
    dispatch(DeleteProduct({id}))
    dispatch(closeModal());
  };

  return (
    <div>
      <div className="text-lg md:text-xl lg:text-2xl font-semibold">
        Are You Sure for Deleting?
      </div>
      <div className="flex justify-end items-center gap-4 mt-5">
        <button
          className="px-4 py-2 bg-blue-500 rounded-lg text-white"
          onClick={closeModalHandler}
        >
          NO
        </button>
        <button
          className="px-4 py-2 bg-red-500 rounded-lg text-white"
          onClick={deleteProductHandler}
        >
          YES
        </button>
      </div>
    </div>
  );
}

export default DeleteProductModal;
