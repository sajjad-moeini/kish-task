import React from "react";
import { useAppSelector } from "../../store";
import Loader from "../Loader/Loader";

function ShowDetailModal() {
  const { name, data } = useAppSelector(
    (state) => state.products.singleProduct
  );
  const { singleProductLoading } = useAppSelector((state) => state.products);

  const convertedDataToArray = data
    ? Object.entries(data).map(([key, value]) => ({
        title: key,
        value,
      }))
    : [];

  return (
    <>
      {singleProductLoading ? (
        <Loader />
      ) : (
        <>
          <div className="text-lg md:text-xl lg:text-2xl font-semibold">
            {name}
          </div>
          {convertedDataToArray.map((data, index) => (
            <div className="flex justify-start items-center" key={index}>
              <div className="text-md md:text-lg lg:text-xl font-semibold">
                {data.title} :
              </div>
              <pre> </pre>
              <div>{data.value}</div>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default ShowDetailModal;
