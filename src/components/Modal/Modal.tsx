import React from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { closeModal } from "../../store/slices/Modal/ModalSlice";
import CloseIcon from "../Icons/CloseIcon";
import ShowDetailModal from "../ModalTypes/ShowDetailModal";
import AddProductModal from "../ModalTypes/AddProductModal";
import EditProductInfoModal from "../ModalTypes/EditProductInfoModal";

const Modal = () => {
  const { isOpen, modalType } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto"
          onClick={closeModalHandler}
        >
          <div
            className="bg-white p-8 rounded-lg w-11/12 md:w-1/2 lg:w-1/3 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={closeModalHandler}
            >
              <CloseIcon />
            </button>
            {modalType === "showDetail" && <ShowDetailModal />}
            {modalType === "add" && <AddProductModal />}
            {modalType === "edit" && <EditProductInfoModal />}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
