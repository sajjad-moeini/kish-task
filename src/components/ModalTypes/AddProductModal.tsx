import React, { useState } from "react";
import CustomInput from "../CustomInput";
import { Http } from "../../configs/axiosConfig";

function AddProductModal() {
  const [name, setName] = useState<string>("");
  const [year, setYear] = useState<number | undefined>();
  const [price, setPrice] = useState<number | undefined>();
  const [cpuModel, setCpuModel] = useState<string>("");
  const [HardDiskSize, setHardDiskSize] = useState<string>("");
  const [err, setErr] = useState(false);

  const submitNewProduct = () => {
    if (name.trim().length && year && price && cpuModel.trim().length && HardDiskSize.trim().length ) {
       const productInfo = {
              name,
              data:{
                     year,
                     price,
                     CPU_model:cpuModel,
                     Hard_disk_size:HardDiskSize
              }
       }

       Http.post("",productInfo)
       .then(res=>{
              if(res.status === 200){
                     console.log(res.data)
              }
       })
       .catch(err=>{
              setErr(true)
       })
    }
    else{
       setErr(true)
    }
  };

  return (
    <>
      <CustomInput
        title={name}
        setTitle={setName}
        type="text"
        placeholder="Please enter product name ..."
        removeErr={setErr}
      />
      <CustomInput
        title={year}
        setTitle={setYear}
        type="number"
        placeholder="Please enter product year ..."
        removeErr={setErr}
      />
      <CustomInput
        title={price}
        setTitle={setPrice}
        type="number"
        placeholder="Please enter product price ..."
        removeErr={setErr}
      />
      <CustomInput
        title={cpuModel}
        setTitle={setCpuModel}
        type="text"
        placeholder="Please enter CPU model ..."
        removeErr={setErr}
      />
      <CustomInput
        title={HardDiskSize}
        setTitle={setHardDiskSize}
        type="text"
        placeholder="Please enter CPU hard disk size ..."
        removeErr={setErr}
      />
      {err && <span className="text-red-500">Please Enter Valid Data</span>}
      <div className="flex justify-end items-center">
        <button
          className="text-lg text-white bg-blue-500 px-4 py-2 rounded-lg"
          onClick={submitNewProduct}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default AddProductModal;
