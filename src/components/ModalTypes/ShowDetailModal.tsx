import React from "react";
import { useAppSelector } from "../../store";

function ShowDetailModal() {
  const { name, data } = useAppSelector((state) => state.products.singleProduct);

  const convertedDataToArray = data
    ? Object.entries(data).map(([key, value]) => ({
        title: key,
        value,
      }))
    : [];

  return (
    <>
      <div className="text-lg md:text-xl lg:text-2xl font-semibold">{name}</div>
      {convertedDataToArray.map((data, index) => (
        <div className="flex justify-start items-center" key={index}>
          <div className="text-md md:text-lg lg:text-xl font-semibold">{data.title} :</div>
          <pre> </pre>
          <div>{data.value}</div>
        </div>
      ))}
    </>
  );
}

export default ShowDetailModal;
