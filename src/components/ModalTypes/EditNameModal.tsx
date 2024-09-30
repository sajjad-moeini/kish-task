import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import Loader from "../Loader/Loader";
import CustomInput from "../CustomInput";
import { EditProductName } from "../../store/slices/Products/Products.extraReducer";

function EditNameModal() {
  const { name, id } = useAppSelector(
    (state) => state.products.singleProduct
  );
  const { singleProductLoading } = useAppSelector((state) => state.products);
  const [newName, setNewName] = useState("");
  const dispatch = useAppDispatch();
  const handleSubmit = () => {
       dispatch(EditProductName({id,name:newName}))
  };
  useEffect(()=>{
setNewName(name)
  },[name])

  return (
    <>
      {singleProductLoading ? (
        <Loader />
      ) : (
        <div>
          <CustomInput
            placeholder=""
            removeErr={() => {}}
            title={newName}
            setTitle={setNewName}
            type="text"
          />
          <div className="flex justify-end items-center">
            <button
              className="px-4 py-2 mt-4 text-white  bg-blue-500 rounded-lg"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default EditNameModal;
