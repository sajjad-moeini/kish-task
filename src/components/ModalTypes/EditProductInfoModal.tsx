import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import Loader from "../Loader/Loader";
import CustomInput from "../CustomInput";
import { EditProductInfo } from "../../store/slices/Products/Products.extraReducer";

function EditProductInfoModal() {
       const { name, data } = useAppSelector(
              (state) => state.products.singleProduct
            );
  const { singleProductLoading } = useAppSelector((state) => state.products);
const dispatch = useAppDispatch()
  const convertedDataToArray = data
    ? Object.entries(data).map(([key, value]) => ({
        title: key,
        value,
        valueType: typeof value,
      }))
    : [];

  const [productData, setProductData] = useState(
    convertedDataToArray.reduce((acc, curr) => {
      acc[curr.title] = curr.value;
      return acc;
    }, {} as { [key: string]: string | number })
  );


  const handleInputChange = (
    key: string,
    value: React.SetStateAction<string | number>
  ) => {
    setProductData((prev) => ({
      ...prev,
      [key]: value as string | number,
    }));
  };

  const handleSubmit = () => {
    const data = {
       name,
       data:productData
    }
    dispatch(EditProductInfo({data}))
  };

  return (
    <>
      {singleProductLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="text-lg md:text-xl lg:text-2xl font-semibold">
            {name}
          </div>
          {convertedDataToArray.map((property, index) => (
            <div key={index} className="my-3">
              <div className="text-md md:text-lg lg:text-xl font-semibold">
                {property.title}:
              </div>
              <CustomInput
                title={productData[property.title]}
                setTitle={(value) => handleInputChange(property.title, value)}
                type={property.valueType === "number" ? "number" : "text"}
                placeholder={`Enter ${property.title}...`}
                removeErr={() => {}}
              />
            </div>
          ))}
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

export default EditProductInfoModal;
